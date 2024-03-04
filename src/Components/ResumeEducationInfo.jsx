import { templateResume } from "../util/template";

const ResumeEducationInfo = () => {
  return (
    <div className="education-section">
      <h3>Education</h3>
      <div className="education-info">
        <div className="education-period">
          <p>
            {templateResume.education[0].startDate} -
            {templateResume.education[0].endDate}
          </p>
          <p>{templateResume.education[0].location}</p>
        </div>
        <div className="school-and-degree">
          <p style={{ fontWeight: "bold" }}>
            {templateResume.education[0].name}
          </p>
          <p>{templateResume.education[0].achievement}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeEducationInfo;
