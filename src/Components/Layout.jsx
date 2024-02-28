import { FaRegFileAlt } from "react-icons/fa"; //File icon for "content" button
import { BiCustomize } from "react-icons/bi"; //icon for "customize" button
import { FaTrash } from "react-icons/fa"; // icon for "clear" button
import { GiGraduateCap } from "react-icons/gi"; //icon for "Education"
import { FaBriefcase } from "react-icons/fa"; // icon for "experience"
import { MdMail } from "react-icons/md"; //icon for "mail"
import { FaPhoneAlt } from "react-icons/fa"; // icon for "phone"
import { FaLocationDot } from "react-icons/fa6"; // icon for "location"

export default function Layout() {
  return (
    <>
      <div className="app-div">
        <section className="customize-resume-container">
          <div className="sidebar">
            <button>
              <FaRegFileAlt /> Content
            </button>
            <button>
              <BiCustomize /> Customize
            </button>
          </div>
          <div className="form-container">
            <div className="resume-controls">
              <button>
                <FaTrash /> Clear Resume
              </button>
              <button>Load Template</button>
            </div>
            <form className="personal-details">
              <h3>Personal Details</h3>
              <label>Full name</label>
              <input type="text" placeholder="Burciu Iulian Gabriel" />
              <label>
                Email <span>recommended</span>
              </label>
              <input type="email" placeholder="Buiuga@gmail.com" />
              <label>
                Phone Number <span>recommended</span>
              </label>
              <input
                type="tel"
                id="phone-number"
                placeholder="Enter phone number"
              />
              <label>
                Address <span>recommended</span>
              </label>
              <input type="text" placeholder="Bucuresti, Romania" />
            </form>
            <div className="education">
              <button>
                <GiGraduateCap /> Education
              </button>
            </div>
            <div className="experience">
              <button>
                <FaBriefcase /> Experience
              </button>
            </div>
          </div>
        </section>
        <section className="resume-container">
          <div className="resume">
            <div className="personal-info">
              <h1>Burciu Iulian Gabriel</h1>
              <div className="contact-info">
                <span>
                  <MdMail /> Buiuga@gmail.com
                </span>
                <span>
                  <FaPhoneAlt /> 077-012-3123
                </span>
                <span>
                  <FaLocationDot /> Pitesti, Romania
                </span>
              </div>
            </div>
            <div className="education-info">
              <p>Temporary...</p>
            </div>
            <div className="experience-info">
              <p>Temporary...</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
