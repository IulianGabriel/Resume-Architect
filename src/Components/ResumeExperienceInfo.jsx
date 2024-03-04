import { templateResume } from "../util/template";

const ResumeExperienceInfo = () => {
  return (
    <div className="experience-section">
      <h3>Professional Experience</h3>
      <div className="experience-info">
        <div className="working-period">
          <p>
            {templateResume.experience[0].startDate} -{" "}
            {templateResume.experience[0].endDate}
          </p>
          <p> {templateResume.experience[0].location} </p>
        </div>
        <div className="additional-information">
          <p>{templateResume.experience[0].name}</p>
          <p style={{ fontWeight: "bold" }}>
            {templateResume.experience[0].achievement}
          </p>
          <p>{templateResume.experience[0].jobDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeExperienceInfo;
