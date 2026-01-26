import image from "../assets/Vijay-image.png";
import "../App.css";
import { BsFillSendFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { IoArrowDownSharp } from "react-icons/io5";
import Typewriter from "typewriter-effect";

const titles = ["JAVA", "MERN"];

function HomePage() {

  const icons = [
    {
      icon: <FaLinkedin className="fs-2" />,
      link: "https://www.linkedin.com/in/vijaykaruna/",
    },
    {
      icon: <FaSquareGithub className="fs-2" />,
      link: "https://github.com/Vijaykaruna",
    },
    {
      icon: <SiLeetcode className="fs-2" />,
      link: "https://www.leetcode.com/vijaykarunanithi2003",
    },
    {
      icon: <IoLogoInstagram className="fs-2" />,
      link: "https://www.instagram.com/vijxy_kr?igsh=MWp2aWsxcTk3bTNxaA==",
    },
  ];

  return (
    <div id="home" className="pt-4">
      <section className="mx-lg-5 rounded-2 mx-2 bg-color py-4">
        <div className="d-flex justify-content-around flex-column flex-lg-row align-items-center py-4 gap-5">
          <div>
            <img src={image} alt="vijay" className="img-fluid home-img" />
          </div>
          <div className="text-light text-center">
            <div className="py-3">
              <p className="h1 fw-bold">Hii, I am Vijay K</p>
            </div>

            <div className="d-flex justify-content-center align-items-center pb-2">
              <span style={{ minWidth: "100px", textAlign: "right", fontSize: "30px", fontWeight:"bold" }}>
                <Typewriter
                  options={{
                    strings: ["MERN", "Java"],
                    autoStart: true,
                    loop: true,
                    delay: 200,
                    pauseFor: 1500,
                    deleteSpeed: 200,
                  }}
                />
              </span>

              <span className="h3 text-info m-0 pt-1">Full Stack Developer</span>
            </div>

            <div className="home-line my-3">
              <p className="text-light">
                Developer passionate about creating efficient, scalable web
                applications and clean user experiences.
              </p>
            </div>
            <div className="py-4">
              <a href="#contact" className="btn btn-primary text-light">
                Contact Me <BsFillSendFill className="mb-1" />
              </a>
            </div>
            <div className="d-flex justify-content-center gap-5">
              {icons.map((item, index) => (
                <div key={index} className="p-2 home-icons rounded-5">
                  <a href={item.link} target="_blank">
                    {item.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-light">
          <p>Scroll down</p>{" "}
          <a href="#about" className="text-light">
            <IoArrowDownSharp />
          </a>
        </div>
      </section>
    </div>
  );
}
export default HomePage;
