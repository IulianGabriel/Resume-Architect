import { FaTrash } from "react-icons/fa"; // icon for "clear" button
import PropTypes from "prop-types";

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

ResumeControls.propTypes = {
  handleClearButton: PropTypes.func.isRequired,
  handleTemplateButton: PropTypes.func.isRequired,
};
