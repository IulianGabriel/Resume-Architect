import { FaTrash } from "react-icons/fa"; // icon for "clear" button

export default function ResumeControls({
  handleClearButton,
  handleTemplateButton,
}) {
  return (
    <div className="resume-controls">
      <button onClick={handleClearButton} className="clear-resume-btn">
        <FaTrash /> Clear Resume
      </button>
      <button onClick={handleTemplateButton} className="load-template-btn">
        Load Template
      </button>
    </div>
  );
}
