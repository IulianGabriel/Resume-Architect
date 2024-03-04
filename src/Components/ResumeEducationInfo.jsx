import PropTypes from "prop-types";

const ResumeEducationInfo = ({ educationInfo }) => {
  const { name, achievement, startDate, endDate, location } = educationInfo;
  return (
    <div className="education-section">
      <h3>Education</h3>
      <div className="education-info">
        <div className="education-period">
          <p>
            {startDate} - {endDate}
          </p>
          <p>{location}</p>
        </div>
        <div className="school-and-degree">
          <p style={{ fontWeight: "bold" }}>{name}</p>
          <p>{achievement}</p>
        </div>
      </div>
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
};

export default ResumeEducationInfo;
