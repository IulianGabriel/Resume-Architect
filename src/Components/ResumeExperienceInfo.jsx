import PropTypes from "prop-types";

const ResumeExperienceInfo = ({ experienceInfo }) => {
  const { name, achievement, startDate, endDate, location, jobDescription } =
    experienceInfo;

  return (
    <div className="experience-section">
      <h3>Professional Experience</h3>
      <div className="experience-info">
        <div className="working-period">
          <p>
            {startDate} -{endDate}
          </p>
          <p> {location} </p>
        </div>
        <div className="additional-information">
          <p>{name}</p>
          <p style={{ fontWeight: "bold" }}>{achievement}</p>
          <p>{jobDescription}</p>
        </div>
      </div>
    </div>
  );
};

ResumeExperienceInfo.propTypes = {
  experienceInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    achievement: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    jobDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResumeExperienceInfo;
