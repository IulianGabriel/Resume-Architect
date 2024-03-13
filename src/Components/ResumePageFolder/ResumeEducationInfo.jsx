import PropTypes from "prop-types";
import "./ResumeEducationInfo.css";

// Component for displaying education information on the resume
const ResumeEducationInfo = ({ showStoredEducation, layout }) => {
  let displayEducation;

  // Map stored education data to JSX elements
  displayEducation = showStoredEducation.map((education) => {
    // Generate unique key for each education entry
    const newId = window.crypto.randomUUID();
    return (
      <div className="education-info" key={newId}>
        <div
          className={
            layout === "Top" ? "education-period" : "leftRight-education-period"
          }
        >
          <p>
            {education.startDate} - {education.endDate}
          </p>
          <p>{education.location}</p>
        </div>
        <div className="school-and-degree">
          <p style={{ fontWeight: "bold" }}>{education.name}</p>
          <p>{education.achievement}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="education-section">
      <h3>Education</h3>
      {/* Display mapped education entries */}
      {displayEducation}
    </div>
  );
};

// Prop type validation for ResumeEducationInfo component
ResumeEducationInfo.propTypes = {
  showStoredEducation: PropTypes.arrayOf(
    PropTypes.shape({
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      achievement: PropTypes.string.isRequired,
    })
  ).isRequired,
  layout: PropTypes.string.isRequired,
};

export default ResumeEducationInfo;
