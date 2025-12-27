import logo from "../assets/logo.png";
import "../App.css";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { HiMiniHeart } from "react-icons/hi2";

function Footer() {
  const icons = [
    { icon: <FaLinkedin className="fs-2 text-light" />, link: "https://www.linkedin.com/in/vijaykaruna/" },
    { icon: <FaSquareGithub className="fs-2 text-light" />, link: "https://github.com/Vijaykaruna" },
    { icon: <SiLeetcode className="fs-2 text-light" />, link: "https://www.leetcode.com/vijaykarunanithi2003" },
    { icon: <IoLogoInstagram className="fs-2 text-light" />, link: "https://www.instagram.com/vijxy_kr?igsh=MWp2aWsxcTk3bTNxaA==" },
  ];
  const navItems = [
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
  ];

  return (
    <div>
      <footer className="py-3 mx-lg-5 rounded-2 mx-2 bg-color">
        <div className="d-flex justify-content-evenly align-items-center flex-lg-row flex-column">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <img src={logo} alt="" className="img-fluid foot-img" />
            <div className="">
              <ul className="navbar-nav d-flex flex-row justify-content-center gap-3">
                {navItems.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      href={`#${item.link}`}
                      className={`nav-link text-light text-decoration-none`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="text-center text-light py-3">
              <p className="h2 d-none d-lg-block">Vijay K</p>
            </div>
            <div className="d-flex justify-content-center gap-5 my-1">
              {icons.map((item, index) => (
                <div key={index} className="p-2 foot-icons rounded-5">
                  <a href={item.link} className="footer-item" target="_blank">
                    {item.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-light mt-5">
          <p className="foot-line">
            Made with{" "}
            <span>
              <HiMiniHeart className="fs-4 text-danger" />
            </span>{" "}
            by Vijay
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
