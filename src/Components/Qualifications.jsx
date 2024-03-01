import { MdSchool } from "react-icons/md"; //icon for "Education"
import { IoChevronDown } from "react-icons/io5"; // icon for dropdown menu
import { FaBriefcase } from "react-icons/fa"; // icon for "experience"
import PropTypes from "prop-types";

export default function Qualifications({ text, icon }) {
  return (
    <div className="qualification">
      <span>
        {icon === "educationIcon" ? <MdSchool /> : <FaBriefcase />} {text}
      </span>
      <IoChevronDown />
    </div>
  );
}

Qualifications.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
