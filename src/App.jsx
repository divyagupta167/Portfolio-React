
import styles from "./App.module.css";
// import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Project } from "./components/Projects/Project";
import { Skills } from "./components/Skills/Skills";

function App() {

  return (
    <div className={styles.App}>
      
      <Navbar/>
      <Hero/>
      <Skills/>
      {/* <About/> */}
   <Project/>
  <Contact/>
  <Footer/>
     
    </div>
  )
}

export default App
