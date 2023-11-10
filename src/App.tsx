import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { About } from './layout/sections/about/About';
import { Skills } from './layout/sections/skills/Skills';
import { Education } from './layout/sections/education/Education';


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <About />
            <Skills />
            <Education />
        </div>
    );
}

export default App;
