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
  const [viewMode, setViewMode] = useState("Content");
  const [storeQualifications, setStoreQualifications] = useState({
    education: [],
    experience: [],
  });
  const [values, setValues] = useState({
    personalDetails: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
    education: {
      name: "",
      achievement: "",
      startDate: "",
      endDate: "",
      location: "",
    },
    experience: {
      name: "",
      achievement: "",
      startDate: "",
      endDate: "",
      location: "",
      jobDescription: "",
    },
  });

  const handleInputs = (e, section) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [section]: { ...prev[section], [name]: value },
    }));
  };

  const handleClearButton = () => {
    setValues({
      personalDetails: {
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
      },
      education: {
        name: "",
        achievement: "",
        startDate: "",
        endDate: "",
        location: "",
      },
      experience: {
        name: "",
        achievement: "",
        startDate: "",
        endDate: "",
        location: "",
        jobDescription: "",
      },
    });
    setStoreQualifications({
      education: [],
      experience: [],
    });
  };

  const handleTemplateButton = () => {
    setValues({
      personalDetails: {
        name: templateResume.personalDetails.name,
        email: templateResume.personalDetails.email,
        phoneNumber: templateResume.personalDetails.phoneNumber,
        address: templateResume.personalDetails.address,
      },
      education: {
        name: templateResume.education[0].name,
        achievement: templateResume.education[0].achievement,
        startDate: templateResume.education[0].startDate,
        endDate: templateResume.education[0].endDate,
        location: templateResume.education[0].location,
      },
      experience: {
        name: templateResume.experience[0].name,
        achievement: templateResume.experience[0].achievement,
        startDate: templateResume.experience[0].startDate,
        endDate: templateResume.experience[0].endDate,
        location: templateResume.experience[0].location,
        jobDescription: templateResume.experience[0].jobDescription,
      },
    });
    setStoreQualifications({
      education: [
        {
          name: templateResume.education[0].name,
          achievement: templateResume.education[0].achievement,
          startDate: templateResume.education[0].startDate,
          endDate: templateResume.education[0].endDate,
          location: templateResume.education[0].location,
        },
      ],
      experience: [
        {
          name: templateResume.experience[0].name,
          achievement: templateResume.experience[0].achievement,
          startDate: templateResume.experience[0].startDate,
          endDate: templateResume.experience[0].endDate,
          location: templateResume.experience[0].location,
          jobDescription: templateResume.experience[0].jobDescription,
        },
      ],
    });
  };
  const handleViewMode = (currentMode) => {
    setViewMode(currentMode);
  };
  return (
    <div className="app-div">
      <section className="customize-resume-container">
        <Sidebar viewMode={viewMode} handleViewMode={handleViewMode} />
        {viewMode === "Content" ? (
          <div className="form-container">
            <ResumeControls
              handleClearButton={handleClearButton}
              handleTemplateButton={handleTemplateButton}
            />
            <PersonalDetails
              handlePersonalDetailsInputs={(e) =>
                handleInputs(e, "personalDetails")
              }
              pdInputValues={values.personalDetails}
            />
            <Qualifications
              storeQualifications={storeQualifications}
              setStoreQualifications={setStoreQualifications}
              qualificationInputs={values}
              setQualificationHandle={setValues}
            />
          </div>
        ) : (
          <p>TEST</p>
        )}
      </section>
      <section className="resume-container">
        <ResumePersonalInfo personalInfo={values.personalDetails} />
        <div className="more-information">
          <ResumeEducationInfo
            showStoredEducation={storeQualifications.education}
          />
          <ResumeExperienceInfo
            showStoredExperience={storeQualifications.experience}
          />
        </div>
      </section>
    </div>
  );
};

export default CvApp;