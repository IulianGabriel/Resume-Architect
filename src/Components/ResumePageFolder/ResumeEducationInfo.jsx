import PropTypes from "prop-types";
import "./ResumeEducationInfo.css";

const ResumeEducationInfo = ({ showStoredEducation, layout }) => {
  let displayEducation;

  displayEducation = showStoredEducation.map((education) => {
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
      {displayEducation}
    </div>
  );
};

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
