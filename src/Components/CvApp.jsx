import Sidebar from "./SidebarFolder/Sidebar";
import ResumeControls from "./ResumeControlButtonsFolder/ResumeControls";
import PersonalDetails from "./PersonalDetailsFolder/PersonalDetails";
import ResumePersonalInfo from "./ResumePageFolder/ResumePersonalInfo";
import ResumeEducationInfo from "./ResumePageFolder/ResumeEducationInfo";
import ResumeExperienceInfo from "./ResumePageFolder/ResumeExperienceInfo";
import Qualifications from "./QualificationsFolder/Qualifications/Qualifications";
import { templateResume } from "../util/template";
import Layout from "./LayoutFolder/Layout";
import ColorCv from "./ColorCvFolder/ColorCv";
import FontCv from "./FontCvFolder/FontCv";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";

const CvApp = () => {
  const [viewMode, setViewMode] = useState("Content");
  const [layout, setLayout] = useState("Top");
  const [font, setFont] = useState("Serif");
  const [color, setColor] = useState("#0e374e");
  const [storeQualifications, setStoreQualifications] = useState({
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
  const [values, setValues] = useState({
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

  const handleInputs = (e, section) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [section]: { ...prev[section], [name]: value },
    }));
  };

  const handleViewMode = (currentMode) => {
    setViewMode(currentMode);
  };

  const handleLayouts = (position) => {
    setLayout(position);
  };

  const handleFonts = (fontType) => {
    setFont(fontType);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const layoutStyles = {
    Left: { flexDirection: "row" },
    Right: { flexDirection: "row-reverse" },
    Top: { flexDirection: "column" },
  };

  const fontStyles = {
    Serif: { fontFamily: "serif" },
    Sans: { fontFamily: "Open Sans" },
    Segoe: { fontFamily: "Segoe UI" },
  };

  const styleLayout = layoutStyles[layout] || {};
  const styleFont = fontStyles[font] || {};

  return (
    <div className="app-div">
      <section className="customize-resume-container">
        <Sidebar viewMode={viewMode} handleViewMode={handleViewMode} />
        <div className="form-container">
          <ResumeControls
            handleClearButton={handleClearButton}
            handleTemplateButton={handleTemplateButton}
          />
          {viewMode === "Content" ? (
            <>
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
            </>
          ) : (
            <>
              <Layout handleLayouts={handleLayouts} color={color} />
              <ColorCv color={color} handleColor={handleColor} />
              <FontCv handleFonts={handleFonts} font={font} color={color} />
            </>
          )}
          <div className="download-button-container">
            <button id="download-button">
              <span>
                <BsFileEarmarkPdf /> Download
              </span>
              <FaDownload />
            </button>
          </div>
        </div>
      </section>
      <section
        className="resume-container"
        style={{ ...styleLayout, ...styleFont }}
      >
        <ResumePersonalInfo
          personalInfo={values.personalDetails}
          layout={layout}
          color={color}
        />
        <div className="more-information">
          <ResumeEducationInfo
            showStoredEducation={storeQualifications.education}
            layout={layout}
          />
          <ResumeExperienceInfo
            showStoredExperience={storeQualifications.experience}
            layout={layout}
          />
        </div>
      </section>
    </div>
  );
};

export default CvApp;
