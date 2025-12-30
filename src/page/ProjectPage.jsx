import { useState, useEffect } from "react";
import { listProject } from "../components/project.list.js";
import "../App.css";

function ProjectPage({ setSelectProject }) {

  return (
    <div id="projects" className="pt-4">
      <section className="mx-lg-5 rounded-2 mx-2 bg-color py-5">
        <p className="h3 text-info text-center mb-4">Projects</p>

        <div className="row justify-content-center g-4 mx-lg-5 mx-1">
          {listProject.map((project) => (
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

      </section>
    </div>
  );
}

export default ProjectPage;
