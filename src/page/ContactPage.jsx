import "../App.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import { sendEmail } from "../components/email.js";

function ContactPage() {
  const contact = [
    {
      name: "Phone",
      icon: <FaPhoneAlt className="fs-3" />,
      value: "+91 6381687209",
    },
    {
      name: "Email Address",
      icon: <IoMail className="fs-3" />,
      value: "krvijayinfo@gmail.com",
    },
    {
      name: "Address",
      icon: <FaLocationDot className="fs-3" />,
      value:
        "9/272, Sengankadu, Thillaivilagam Village, Thiruthuraipoondi, Tiruvarur, Tamil Nadu, India 614706.",
    },
  ];

  return (
    <div id="contact" className="my-5">
      <section className="mx-lg-5 mx-2 bg-color rounded-2 py-5">
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-start gap-5 py-5">

          {/* LEFT SIDE */}
          <div className="col-lg-4 col-12 mx-2">
            <p className="h2 text-info fw-bold text-decoration-underline mb-4">
              Let's discuss your project
            </p>

            {contact.map((con, index) => (
              <div key={index} className="mb-3">
                <div className="d-flex align-items-center gap-3 text-light">
                  {con.icon}
                  <span className="fs-5 text-info">{con.name}</span>
                </div>

                <p className="text-light ms-5 mb-0">
                  {con.value}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-5 col-11 mx-3">
            <p className="h2 text-info fw-bold text-decoration-underline mb-4">
              Send us a Message
            </p>

            <div className="bg-blur rounded-3 p-4">
              <div className="input-group mb-3">
                <input
                id="email"
                  type="email"
                  className="form-control border-info"
                  placeholder="Enter your Email..."
                />
              </div>

              <div className="d-flex gap-2">
                <input
                id="name"
                  type="text"
                  className="form-control border-info mb-3"
                  placeholder="Name..."
                />
                <input
                id="subject"
                  type="text"
                  className="form-control border-info mb-3"
                  placeholder="Subject..."
                />
              </div>

              <textarea
              id="message"
                className="form-control border-info mb-3"
                placeholder="Message..."
              ></textarea>

              <button className="btn btn-primary text-light" onClick={sendEmail}>
                Send <BsFillSendFill className="mb-1" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}


export default ContactPage;
