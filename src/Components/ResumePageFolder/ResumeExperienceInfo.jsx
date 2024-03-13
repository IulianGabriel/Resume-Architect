import PropTypes from "prop-types";
import "./ResumeExperienceInfo.css";

// Component for displaying professional experience information on the resume
const ResumeExperienceInfo = ({ showStoredExperience, layout }) => {
  let displayExperience;

  // Map stored experience data to JSX elements
  displayExperience = showStoredExperience.map((experience) => {
    // Generate unique key for each experience entry
    const newId = window.crypto.randomUUID();
    return (
      <div className="experience-info" key={newId}>
        <div
          className={
            layout === "Top" ? "working-period" : "leftRight-working-period"
          }
        >
          <p>
            {experience.startDate} - {experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
        <div className="additional-information">
          <p>{experience.name}</p>
          <p style={{ fontWeight: "bold" }}>{experience.achievement}</p>
          <p>{experience.jobDescription}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="experience-section">
      <h3>Professional Experience</h3>
      {/* Display mapped experience entries */}
      {displayExperience}
    </div>
  );
};

// Prop type validation for ResumeExperienceInfo component
ResumeExperienceInfo.propTypes = {
  showStoredExperience: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      achievement: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      jobDescription: PropTypes.string.isRequired,
    })
  ).isRequired,
  layout: PropTypes.string.isRequired,
};

export default ResumeExperienceInfo;
