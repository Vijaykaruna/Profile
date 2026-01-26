import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import "../App.css";

function Navbar() {
  const [active, setActive] = useState("Home");

  const navItems = [
    { title: "Home", href: "home" },
    { title: "About", href: "about" },
    { title: "Skills", href: "skills" },
    { title: "Projects", href: "projects" },
    { title: "Contact", href: "contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg rounded-2 mx-lg-5 mx-2 my-2 bg-color fixed-top">
      <div className="container-fluid mx-3">
        <a className="navbar-brand fw-bold text-light" href="#home">
          Vijay Karunanithi
        </a>
        <button
          className="navbar-toggler border-0 p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <CgMenuGridR className="text-light border-0 fs-1" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto text-center gap-lg-3 me-lg-4">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  href={`#${item.href}`}
                  className={`nav-link text-light ${
                    active === item.title ? "active" : ""
                  }`}
                  onClick={() => setActive(item.title)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
