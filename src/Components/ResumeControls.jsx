import { FaTrash } from "react-icons/fa"; // icon for "clear" button

export default function ResumeControls() {
  return (
    <div className="resume-controls">
      <button className="clear-resume-btn">
        <FaTrash /> Clear Resume
      </button>
      <button className="load-template-btn">Load Template</button>
    </div>
  );
}
