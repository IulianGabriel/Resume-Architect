import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa"; // icon for "clear" button

export default function AddQualifications({ category }) {
  const categoryName = category === "Education" ? "School" : "Company Name";
  const categoryInfo = category === "Education" ? "Degree" : "Position Title";
  return (
    <form className="qualificationInputs-container">
      <label htmlFor="qualification-name">{categoryName}</label>
      <input
        type="text"
        id="qualification-name"
        placeholder={`Enter ${categoryName}`}
      />
      <label htmlFor="qualification-info">{categoryInfo}</label>
      <input
        type="text"
        id="qualification-info"
        placeholder={`Enter ${categoryInfo}`}
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
}

AddQualifications.propTypes = {
  category: PropTypes.string.isRequired,
};
