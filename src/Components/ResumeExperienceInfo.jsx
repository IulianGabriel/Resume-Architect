import PropTypes from "prop-types";

const ResumeExperienceInfo = ({ showStoredExperience }) => {
  // const { name, achievement, startDate, endDate, location, jobDescription } =
  // experienceInfo;

  return (
    <div className="experience-section">
      <h3>Professional Experience</h3>
      {showStoredExperience.map((experience, index) => {
        return (
          <div className="experience-info" key={index}>
            <div className="working-period">
              <p>
                {experience.startDate} -{experience.endDate}
              </p>
              <p> {experience.location} </p>
            </div>
            <div className="additional-information">
              <p>{experience.name}</p>
              <p style={{ fontWeight: "bold" }}>{experience.achievement}</p>
              <p>{experience.jobDescription}</p>
            </div>
          </div>
        );
      })}
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
};

export default ResumeExperienceInfo;
