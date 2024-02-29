import Sidebar from "./Components/Sidebar";
import ResumeControls from "./Components/ResumeControls";
import PersonalDetails from "./Components/PersonalDetails";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import ResumePersonalInfo from "./Components/ResumePersonalInfo";
import ResumeEducationInfo from "./Components/ResumeEducationInfo";
import ResumeExperienceInfo from "./Components/ResumeExperienceInfo";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  function handleInputChange(e) {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    setInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <>
      <div className="app-div">
        <section className="customize-resume-container">
          <Sidebar />
          <div className="form-container">
            <ResumeControls />
            <PersonalDetails
              handleInputChange={handleInputChange}
              inputValue={inputValue}
            />
            <Education />
            <Experience />
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
    </>
  );
}
