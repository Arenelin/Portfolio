import React from 'react'
import myPhoto from '../../../assets/images/myPhoto.webp'

export function Main() {
  return (
     <div>
        <div>
           <span>Welcome</span>
           <h2>I am Nikita Akmaykin</h2>
           <h1>A Frontend Developer</h1>
        </div>
        <img src={myPhoto} alt="" />
    </div>
  )
}
