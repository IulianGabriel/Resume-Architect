import Sidebar from "./Components/Sidebar";
import ResumeControls from "./Components/ResumeControls";
import PersonalDetails from "./Components/PersonalDetails";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import ResumePersonalInfo from "./Components/ResumePersonalInfo";
import ResumeEducationInfo from "./Components/ResumeEducationInfo";
import ResumeExperienceInfo from "./Components/ResumeExperienceInfo";

export default function App() {
  return (
    <>
      <div className="app-div">
        <section className="customize-resume-container">
          <Sidebar />
          <div className="form-container">
            <ResumeControls />
            <PersonalDetails />
            <Education />
            <Experience />
          </div>
        </section>
        <section className="resume-container">
          <ResumePersonalInfo />
          <div className="more-information">
            <ResumeEducationInfo />
            <ResumeExperienceInfo />
          </div>
        </section>
      </div>
    </>
  );
}
