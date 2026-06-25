import data from "./myData.json";
import { useEffect } from "react";
import filterTag from "./functions/filterTag";
import fillContent from "./functions/fillContent";
import Navigation from "./components/navigation";
import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Education from "./components/education";
import TopProjects from "./components/topProjects";
import HireMe from "./components/hireme";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Languages from "./components/languages";

function App() {
  useEffect(() => {
    let metaTags = document.getElementsByTagName("meta");
    let description = filterTag(metaTags, "description");
    let author = filterTag(metaTags, "author");

    fillContent(author, data.name);
    fillContent(description, data.about);
    document.title = data.name;
  }, []);

  return (
    <div id="home">
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Languages />
      <Experience />
      <Education />
      <HireMe />
      <Projects />
      <TopProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
