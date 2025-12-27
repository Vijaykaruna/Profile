import { tools, languages } from "../components/skills.list.js"
import "../App.css";

function SkillsPage({ setModalType }) {

  return (
    <div id="skills" className="pt-5">
      <section className="py-4 mx-lg-5 mx-2 bg-color rounded-2">
        <div>
          <div>
            <p className="h3 text-info text-center mb-4">Tools</p>

            <div className="py-3">
              <div className="skills-slider">
                <div className="tools-track">
                  {[...tools, ...tools].map((item, index) => (
                    <div className="skills-card" key={index}>
                      <img src={item.img} alt={item.name} />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center my-3">
                  <button
                    className="btn btn-sm btn-outline-info text-light"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleSkillsModal"
                    onClick={() => setModalType("tools")}
                  >
                    View List
                  </button>
                </div>
              </div>
            </div>
          </div>
      
          <div>
            <p className="h3 text-info text-center mb-4">Languages</p>

            <div className="py-3">
              <div className="skills-slider">
                <div className="langu-track">
                  {[...languages, ...languages].map((item, index) => (
                    <div className="skills-card" key={index}>
                      <img src={item.img} alt={item.name} />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center my-3">
                  <button
                    className="btn btn-sm btn-outline-info text-light"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleSkillsModal"
                    onClick={() => setModalType("languages")}
                  >
                    View List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillsPage;
