import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { About } from './layout/sections/about/About';
import { Skills } from './layout/sections/skills/Skills';
import { Education } from './layout/sections/education/Education';
import { Projects } from './layout/sections/projects/Projects';
import { Quote } from './layout/sections/quote/Quote';
import { Contact } from './layout/sections/contact/Contact';
import { Footer } from './layout/footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
             <Main />
             <About />
            <Skills />
            <Education />
           <Projects />
            <Quote />
            <Contact />
            {/*<Footer />  */}
        </div>
    );
}

export default App;

//Попробовать сделать picture и вставлять так картинки
