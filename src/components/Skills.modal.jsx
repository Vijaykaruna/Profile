import { tools, languages } from "../components/skills.list.js"
import "../App.css";

function SkillsModal({ type }) {

  const list = type === "tools" ? tools : languages;

  return (
    <div
      className="modal fade"
      id="exampleSkillsModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="bg-color rounded-4">
          <div className="modal-header">
            <h5 className="modal-title text-light">
              {type === "tools" ? "Tools" : "Languages"}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <div className="row">
              {list.map((item, index) => (
                <div key={index} className="col-6 col-md-4 text-center mb-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    width="50"
                    className="mb-2"
                  />
                  <p className="mb-0 text-light">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsModal;
