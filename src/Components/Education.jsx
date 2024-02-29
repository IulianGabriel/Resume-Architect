import { MdSchool } from "react-icons/md"; //icon for "Education"
import { IoChevronDown } from "react-icons/io5"; // icon for dropdown menu

export default function Education() {
  return (
    <div className="education">
      <span>
        <MdSchool /> Education
      </span>
      <IoChevronDown />
    </div>
  );
}
