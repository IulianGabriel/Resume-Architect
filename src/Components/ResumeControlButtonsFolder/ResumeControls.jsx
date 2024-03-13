import { FaTrash } from "react-icons/fa";
import { HiTemplate } from "react-icons/hi";
import PropTypes from "prop-types";
import "./ResumeControls.css";

// Component for displaying controls to clear resume and load template
const ResumeControls = ({ handleClearButton, handleTemplateButton }) => {
  return (
    <div className="resume-controls">
      <button onClick={handleClearButton} className="clear-resume-btn">
        <FaTrash /> Clear Resume
      </button>
      <button onClick={handleTemplateButton} className="load-template-btn">
        <HiTemplate /> Load Template
      </button>
    </div>
  );
};

// Prop type validation for ResumeControls component
ResumeControls.propTypes = {
  handleClearButton: PropTypes.func.isRequired,
  handleTemplateButton: PropTypes.func.isRequired,
};

export default ResumeControls;
