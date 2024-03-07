import PropTypes from "prop-types";

const ResumeEducationInfo = ({ showStoredEducation }) => {
  // const { name, achievement, startDate, endDate, location } = educationInfo;
  return (
    <div className="education-section">
      <h3>Education</h3>
      {showStoredEducation.map((education, index) => {
        return (
          <div className="education-info" key={index}>
            <div className="education-period">
              <p>
                {education.startDate}
                {education.endDate}
              </p>
              <p>{education.location}</p>
            </div>
            <div className="school-and-degree">
              <p style={{ fontWeight: "bold" }}>{education.name}</p>
              <p>{education.achievement}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

ResumeEducationInfo.propTypes = {
  educationInfo: PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    achievement: PropTypes.string.isRequired,
  }).isRequired,
  showStoredEducation: PropTypes.arrayOf(
    PropTypes.shape({
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      achievement: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ResumeEducationInfo;
