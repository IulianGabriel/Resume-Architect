import PropTypes from "prop-types";
import { MdMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ResumePersonalInfo = ({ personalInfo }) => {
  return (
    <div className="personal-info">
      <h1>{personalInfo.name}</h1>
      <div className="contact-info">
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
};

export default ResumePersonalInfo;
