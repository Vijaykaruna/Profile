import { useState, useEffect } from "react";
import { listProject } from "../components/project.list.js";
import "../App.css";

function ProjectPage({ setSelectProject }) {
  const [showAll, setShowAll] = useState(false);
  const [isLgScreen, setIsLgScreen] = useState(
    window.innerWidth >= 992
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 992);
      if (window.innerWidth >= 992) {
        setShowAll(true);
      } else {
        setShowAll(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProjects =
    isLgScreen || showAll
      ? listProject
      : listProject.slice(0, 3);

  return (
    <div id="projects" className="pt-4">
      <section className="mx-lg-5 rounded-2 mx-2 bg-color py-5">
        <p className="h3 text-info text-center mb-4">Projects</p>

        <div className="row justify-content-center g-4 mx-lg-5 mx-1">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="col-12 col-sm-6 col-lg-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => setSelectProject(project.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="p-2 h-100 bg-blur rounded-2">
                <div className="card-body text-center text-light my-2">
                  <h5 className="card-title">{project.name}</h5>
                  <p>{project.type}</p>

                  <img
                    src={project.template}
                    alt={project.name}
                    className="img-fluid rounded w-75"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isLgScreen && (
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-info btn-sm"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View More"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default ProjectPage;
