import Sidebar from "./Components/Sidebar";
import ResumeControls from "./Components/ResumeControls";
import PersonalDetails from "./Components/PersonalDetails";
import ResumePersonalInfo from "./Components/ResumePersonalInfo";
import ResumeEducationInfo from "./Components/ResumeEducationInfo";
import ResumeExperienceInfo from "./Components/ResumeExperienceInfo";
import Qualifications from "./Components/Qualifications";
import { templateResume } from "./util/template";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState({
    name: templateResume.name,
    email: templateResume.email,
    phoneNumber: templateResume.phoneNumber,
    address: templateResume.address,
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

export default App;
