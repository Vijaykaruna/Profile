import { listProject } from "../components/project.list.js";

function ProjectModal({ select }) {

  const showProject = listProject.find(
    (project) => project.id === select
  );

  if (!showProject) return null;

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content modal-bg rounded-4">

          <div className="modal-header">
            <h5 className="modal-title text-light" id="exampleModalLabel">
              {showProject.name}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body d-flex flex-column align-items-center">
            <img
              src={showProject.img}
              alt={showProject.name}
              className="img-fluid rounded mb-3 w-75"
            />
            <p className="text-light font fw-bold">{showProject.desc}</p>
          </div>

          <div className="modal-footer">

            {showProject.link !== "none" && (
              <a
                href={showProject.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            )}

            <a
              href={showProject.repo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              GitHub Repo
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
