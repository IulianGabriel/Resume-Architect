import { FaBriefcase } from "react-icons/fa"; // icon for "experience"
import { IoChevronDown } from "react-icons/io5"; // icon for dropdown menu

export default function Experience() {
  return (
    <div className="experience">
      <span>
        <FaBriefcase /> Experience
      </span>
      <IoChevronDown />
    </div>
  );
}
