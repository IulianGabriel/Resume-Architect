import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import "./AddQualifications.css";

// Define the AddQualifications functional component
const AddQualifications = ({
  config,
  handleSaveBtn,
  handleCancelButton,
  handleDeleteButton,
}) => {
  const { qualificationInputs, handleQualificationsInputs } = config;
  const categoryName = config.text === "Education" ? "School" : "Company Name";
  const categoryInfo =
    config.text === "Education" ? "Degree" : "Position Title";
  const showDescription = config.text === "Experience" && (
    <>
      <label htmlFor="description">
        Description <span>optional</span>
      </label>
      <input
        type="textarea"
        id="description"
        placeholder="Description..."
        name="jobDescription"
        value={qualificationInputs.jobDescription}
        onChange={handleQualificationsInputs}
      />
    </>
  );
  return (
    <form className="qualificationInputs-container">
      <label htmlFor="qualification-name">{categoryName}</label>
      <input
        type="text"
        id="qualification-name"
        name="name"
        placeholder={`Enter ${categoryName} / University`}
        value={qualificationInputs.name}
        onChange={handleQualificationsInputs}
      />
      <label htmlFor="qualification-info">{categoryInfo}</label>
      <input
        type="text"
        id="qualification-info"
        name="achievement"
        placeholder={`Enter ${categoryInfo} / Field of study`}
        value={qualificationInputs.achievement}
        onChange={handleQualificationsInputs}
      />
      <div className="attendance-period">
        <div className="start-attendance">
          <label htmlFor="start-date">Start Date</label>
          <input
            type="text"
            id="start-date"
            name="startDate"
            placeholder="Enter start date"
            value={qualificationInputs.startDate}
            onChange={handleQualificationsInputs}
          />
        </div>
        <div className="end-attendance">
          <label htmlFor="end-date">End Date</label>
          <input
            type="text"
            id="end-date"
            name="endDate"
            placeholder="Enter end date"
            value={qualificationInputs.endDate}
            onChange={handleQualificationsInputs}
          />
        </div>
      </div>
      <label htmlFor="location">
        Location <span>optional</span>
      </label>
      <input
        type="text"
        id="location"
        name="location"
        placeholder="Enter Location"
        value={qualificationInputs.location}
        onChange={handleQualificationsInputs}
      />
      {showDescription}
      <div className="updateQualification-container-buttons">
        <button className="delete-qualification" onClick={handleDeleteButton}>
          <FaTrash /> Delete
        </button>
        <div className="update-qualification">
          <button
            className="cancel-qualification-action"
            onClick={handleCancelButton}
          >
            Cancel
          </button>
          <button className="save-qualification" onClick={handleSaveBtn}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

// Define prop types for the AddQualifications component
AddQualifications.propTypes = {
  config: PropTypes.shape({
    text: PropTypes.string.isRequired,
    qualificationInputs: PropTypes.shape({
      name: PropTypes.string.isRequired,
      achievement: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      jobDescription: PropTypes.string,
    }).isRequired,
    handleQualificationsInputs: PropTypes.func.isRequired,
  }).isRequired,
  handleSaveBtn: PropTypes.func.isRequired,
  handleCancelButton: PropTypes.func.isRequired,
  handleDeleteButton: PropTypes.func.isRequired,
};

export default AddQualifications;
