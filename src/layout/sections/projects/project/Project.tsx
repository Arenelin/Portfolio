import { Button } from "../../../../components/Button"
import React from "react"
import { S } from "../Projects_Styles"

type ProjectPropsType = {
   srcNative: string,
   srcWebp: string,
   srcJpg: string,
   title: string,
   tech: string,
   descr: string,
   linkGit: string,
   linkDemo: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
   return (
      <S.Project>
         <S.WrapperContent>
            <S.ProjectImage>
               <S.Picture>
                  <source srcSet={props.srcWebp} type="image/webp" />
                  <source srcSet={props.srcJpg} type="image/jpeg" />
                  <img src={props.srcNative} alt="Frontend Project" loading="lazy" />
               </S.Picture>
            </S.ProjectImage>
            <S.ProjectInfo>
               <S.InfoTitle>{props.title}</S.InfoTitle>
               <S.InfoDescription>{props.descr}</S.InfoDescription>
               <S.InfoStack>Tech stack: {props.tech}</S.InfoStack>
               <S.WrapperButtons>
                  <Button as={'a'} href={props.linkDemo}>Demo</Button>
                  <Button as={'a'} href={props.linkGit}>Code</Button>
               </S.WrapperButtons>
            </S.ProjectInfo>
         </S.WrapperContent>
      </S.Project>
   )
}