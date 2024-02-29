import Sidebar from "./Components/Sidebar";
import ResumeControls from "./Components/ResumeControls";
import PersonalDetails from "./Components/PersonalDetails";
import ResumePersonalInfo from "./Components/ResumePersonalInfo";
import ResumeEducationInfo from "./Components/ResumeEducationInfo";
import ResumeExperienceInfo from "./Components/ResumeExperienceInfo";
import Qualifications from "./Components/Qualifications";
import { templateResume } from "./util/template";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState({
    name: templateResume.name,
    email: templateResume.email,
    phoneNumber: templateResume.phoneNumber,
    address: templateResume.address,
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    setInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleClearButton() {
    setInputValue({
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
  }

  function handleTemplateButton() {
    setInputValue({
      name: templateResume.name,
      email: templateResume.email,
      phoneNumber: templateResume.phoneNumber,
      address: templateResume.address,
    });
  }

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
          <Qualifications text="Education" icon="educationIcon" />
          <Qualifications text="Experience" icon="experienceIcon" />
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
}
