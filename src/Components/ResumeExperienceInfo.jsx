import PropTypes from "prop-types";

const ResumeExperienceInfo = ({ showStoredExperience }) => {
  let displayExperience;

  displayExperience = showStoredExperience.map((experience) => {
    const newId = window.crypto.randomUUID();
    return (
      <div className="experience-info" key={newId}>
        <div className="working-period">
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
      {displayExperience}
    </div>
  );
};

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
};

export default ResumeExperienceInfo;
