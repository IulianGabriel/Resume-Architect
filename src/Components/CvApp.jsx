import Sidebar from "./Sidebar";
import ResumeControls from "./ResumeControls";
import PersonalDetails from "./PersonalDetails";
import ResumePersonalInfo from "./ResumePersonalInfo";
import ResumeEducationInfo from "./ResumeEducationInfo";
import ResumeExperienceInfo from "./ResumeExperienceInfo";
import Qualifications from "./Qualifications";
import { templateResume } from "../util/template";
import { useState } from "react";

const CvApp = () => {
  const [inputValue, setInputValue] = useState({
    name: templateResume.name,
    email: templateResume.email,
    phoneNumber: templateResume.phoneNumber,
    address: templateResume.address,
    education: templateResume.education,
    experience: templateResume.experience,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleClearButton = () => {
    setInputValue({
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      education: [],
      experience: [],
    });
  };

  const handleTemplateButton = () => {
    setInputValue({
      name: templateResume.name,
      email: templateResume.email,
      phoneNumber: templateResume.phoneNumber,
      address: templateResume.address,
    });
  };

  return (
    <div className="app-div">
      <section className="customize-resume-container">
        <Sidebar />
        <div className="form-container">
          <ResumeControls
            handleClearButton={handleClearButton}
            handleTemplateButton={handleTemplateButton}
          />
          <PersonalDetails
            handleInputChange={handleInputChange}
            inputValue={inputValue}
          />
          <Qualifications />
        </div>
      </section>
      <section className="resume-container">
        <ResumePersonalInfo personalInfo={inputValue} />
        <div className="more-information">
          <ResumeEducationInfo />
          <ResumeExperienceInfo />
        </div>
      </section>
    </div>
  );
};

export default CvApp;
