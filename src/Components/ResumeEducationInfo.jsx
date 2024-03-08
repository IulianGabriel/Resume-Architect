import PropTypes from "prop-types";

const ResumeEducationInfo = ({ educationInfo, showStoredEducation }) => {
  const { name, achievement, startDate, endDate, location } = educationInfo;

  let displayEducation;

  if (showStoredEducation.length === 0) {
    displayEducation = (
      <div className="education-info">
        <div className="education-period">
          <p>
            {startDate}
            {endDate}
          </p>
          <p>{location}</p>
        </div>
        <div className="school-and-degree">
          <p style={{ fontWeight: "bold" }}>{name}</p>
          <p>{achievement}</p>
        </div>
      </div>
    );
  } else {
    displayEducation = showStoredEducation.map((education, index) => (
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
    ));
  }

  return (
    <div className="education-section">
      <h3>Education</h3>
      {displayEducation}
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
