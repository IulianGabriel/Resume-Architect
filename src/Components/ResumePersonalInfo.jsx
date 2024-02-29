import { MdMail } from "react-icons/md"; //icon for "mail"
import { FaPhoneAlt } from "react-icons/fa"; // icon for "phone"
import { FaLocationDot } from "react-icons/fa6"; // icon for "location"

export default function ResumePersonalInfo({ personalInfo }) {
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
}
