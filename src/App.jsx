import styles from "./App.module.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About/About.jsx";
import Home from "./pages/Home/Home.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Experiences from "./pages/Experiences/Experience.jsx";

function App() {
  return(
      <div className={styles.App}>
        <Header/>
        <Home/>
        <About/>
        <Experiences/>
        <Projects />
        <Footer/>
      </div>

  );
}

export default App
