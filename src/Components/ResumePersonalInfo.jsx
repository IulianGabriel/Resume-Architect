import { MdMail } from "react-icons/md"; //icon for "mail"
import { FaPhoneAlt } from "react-icons/fa"; // icon for "phone"
import { FaLocationDot } from "react-icons/fa6"; // icon for "location"

export default function ResumePersonalInfo() {
  return (
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
  );
}
