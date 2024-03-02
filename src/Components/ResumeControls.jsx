import { FaTrash } from "react-icons/fa"; // icon for "clear" button
import { HiTemplate } from "react-icons/hi";
import PropTypes from "prop-types";

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

ResumeControls.propTypes = {
  handleClearButton: PropTypes.func.isRequired,
  handleTemplateButton: PropTypes.func.isRequired,
};

export default ResumeControls;
