import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./page/HomePage.jsx";
import AboutPage from "./page/AboutPage.jsx";
import SkillsPage from "./page/SkillsPage.jsx";
import ProjectPage from "./page/ProjectPage.jsx";
import SkillsModal from "./components/Skills.modal.jsx";
import ProjectModal from "./components/Projects.modal.jsx";
import ContactPage from "./page/ContactPage.jsx";

function App() {
  const [modalType, setModalType] = useState("");
  const [selectProject, setSelectProject] =useState(null);

  return (
    <>
      <div className="animated-bg">
        <Navbar />
        <div className="mt-5">
          <HomePage />
          <AboutPage />
          <SkillsPage setModalType={setModalType} />
          <ProjectPage setSelectProject={setSelectProject}/>
          <ContactPage/>
        </div>
        <Footer />
      </div>
      <SkillsModal type={modalType} />
      <ProjectModal select={selectProject}/>
    </>
  );
}

export default App;
