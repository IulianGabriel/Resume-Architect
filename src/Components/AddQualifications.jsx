import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa"; // icon for "clear" button

const AddQualifications = ({ config }) => {
  const categoryName = config.text === "Education" ? "School" : "Company Name";
  const categoryInfo =
    config.text === "Education" ? "Degree" : "Position Title";
  const showDescription = config.text === "Experience" && (
    <>
      <label htmlFor="description">
        Description <span>optional</span>
      </label>
      <input type="textarea" id="description" placeholder="Description..." />
    </>
  );
  return (
    <form className="qualificationInputs-container">
      <label htmlFor="qualification-name">{categoryName}</label>
      <input
        type="text"
        id="qualification-name"
        placeholder={`Enter ${categoryName} / University`}
      />
      <label htmlFor="qualification-info">{categoryInfo}</label>
      <input
        type="text"
        id="qualification-info"
        placeholder={`Enter ${categoryInfo} / Field of study`}
      />
      <div className="attendance-period">
        <div className="start-attendance">
          <label htmlFor="start-date">Start Date</label>
          <input type="text" id="start-date" placeholder="Enter start date" />
        </div>
        <div className="end-attendance">
          <label htmlFor="end-date">End Date</label>
          <input type="text" id="end-date" placeholder="Enter end date" />
        </div>
      </div>
      <label htmlFor="location">
        Location <span>optional</span>
      </label>
      <input type="text" id="location" placeholder="Enter Location" />
      {showDescription}
      <div className="updateQualification-container-buttons">
        <button className="delete-qualification">
          <FaTrash /> Delete
        </button>
        <div className="update-qualification">
          <button className="cancel-qualification-action">Cancel</button>
          <button className="save-qualification">Save</button>
        </div>
      </div>
    </form>
  );
};

AddQualifications.propTypes = {
  config: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }),
};

export default AddQualifications;
