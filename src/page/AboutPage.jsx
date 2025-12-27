import image from "../assets/vijayaboutDP.png";
import { FaDownload } from "react-icons/fa6";
import "../App.css";

function AboutPage() {
  return (
    <div id="about" className="pt-5">
      <section className="mx-lg-5 rounded-2 mx-2 bg-color py-4">
        <div className="d-flex justify-content-around flex-column flex-lg-row align-items-center py-5 gap-5">
          <div className="col-12 col-lg-6 text-center">
            <img src={image} alt="vijay" className="img-fluid about-img" />
          </div>

          <div className="mx-2">
            <div className="text-light">
              <p className="h2">I'm Vijay</p>
            </div>

            <div className="text-light about-text font">
              <p>
                I am a fresher full-stack web developer with a strong interest
                in building responsive and scalable web applications. I enjoy
                transforming ideas into functional user experiences using modern
                frontend and backend technologies, while continuously improving
                my skills and professional expertise.
              </p>
            </div>
              <div className="border border-1"></div>
            <div>
              <p className="h3 text-info">Education</p>
              <div className="rounded-3 bg-blur py-2">
                <div className="m-2 text-light font">
                    <div className="d-flex justify-content-between mx-2">
                        <p>2021 - 2025</p>
                        <p>CGPA - 7.75</p>
                    </div>
                  <h5 className="mx-2"><span className="fw-bold">B.E ETE -</span> <span className="">Karpagam college of engineering,</span></h5>
                  <p className="mx-2">
                    Coimabtore, Tamilnadu
                  </p>     
                </div>
              </div>
            </div>
            <div className="border my-3"></div>
            <div className="my-3">
                <button className="btn btn-primary">Download Resume <FaDownload className="mb-2"/></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutPage;
