import { FaRegFileAlt } from "react-icons/fa"; //File icon for "content" button
import { BiCustomize } from "react-icons/bi"; //icon for "customize" button
import { FaTrash } from "react-icons/fa"; // icon for "clear" button
import { MdSchool } from "react-icons/md"; //icon for "Education"
import { FaBriefcase } from "react-icons/fa"; // icon for "experience"
import { MdMail } from "react-icons/md"; //icon for "mail"
import { FaPhoneAlt } from "react-icons/fa"; // icon for "phone"
import { FaLocationDot } from "react-icons/fa6"; // icon for "location"
import { IoChevronDown } from "react-icons/io5"; // icon for dropdown menu

export default function Layout() {
  return (
    <>
      <div className="app-div">
        <section className="customize-resume-container">
          <div className="sidebar">
            <button id="sidebar-active">
              <FaRegFileAlt /> Content
            </button>
            <button>
              <BiCustomize /> Customize
            </button>
          </div>
          <div className="form-container">
            <div className="resume-controls">
              <button className="clear-resume-btn">
                <FaTrash /> Clear Resume
              </button>
              <button className="load-template-btn">Load Template</button>
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
              <input type="tel" placeholder="Enter phone number" />
              <label>
                Address <span>recommended</span>
              </label>
              <input type="text" placeholder="Bucuresti, Romania" />
            </form>
            <div className="education">
              <span>
                <MdSchool /> Education
              </span>
              <IoChevronDown />
            </div>
            <div className="experience">
              <span>
                <FaBriefcase /> Experience
              </span>
              <IoChevronDown />
            </div>
          </div>
        </section>
        <section className="resume-container">
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
          <div className="more-information">
            <div className="education-section">
              <h3>Education</h3>
              <div className="education-info">
                <div className="education-period">
                  <p>08/2020 - present</p>
                  <p>New York City, US</p>
                </div>
                <div className="school-and-degree">
                  <p>London City University</p>
                  <p>Bachelors in Economics</p>
                </div>
              </div>
            </div>
            <div className="experience-section">
              <h3>Professional Experience</h3>
              <div className="experience-info">
                <div className="working-period">
                  <p>08/2020 - present</p>
                  <p> New York City, US </p>
                </div>
                <div className="additional-informatio">
                <p>Umbrella Inc</p>
                <p>
                  Designed and prototyped user interface patterns for various
                  clients in various industries, ranging from self-service apps
                  within the telecommunications-sector to mobile games for IOS
                  and Android
                </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
