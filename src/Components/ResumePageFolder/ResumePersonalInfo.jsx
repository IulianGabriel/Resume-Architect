import PropTypes from "prop-types";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./ResumePersonalInfo.css";

const ResumePersonalInfo = ({ personalInfo, layout }) => {
  return (
    <div
      className={layout === "Top" ? "personal-info" : "leftRight-personal-info"}
    >
      <h1>{personalInfo.name}</h1>
      <div
        className={layout === "Top" ? "contact-info" : "leftRight-contact-info"}
      >
        <span>
          <MdMail /> {personalInfo.email}
        </span>
        <span>
          <FaPhoneAlt /> {personalInfo.phoneNumber}
        </span>
        <span>
          <FaLocationDot /> {personalInfo.address}
        </span>
      </div>
    </div>
  );
};

ResumePersonalInfo.propTypes = {
  personalInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  layout: PropTypes.string.isRequired,
};

export default ResumePersonalInfo;
