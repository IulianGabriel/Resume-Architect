import { useState } from "react";
import { templateResume } from "../util/template";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { usePDF } from "react-to-pdf";
import Sidebar from "./SidebarFolder/Sidebar";
import ResumeControls from "./ResumeControlButtonsFolder/ResumeControls";
import PersonalDetails from "./PersonalDetailsFolder/PersonalDetails";
import ResumePersonalInfo from "./ResumePageFolder/ResumePersonalInfo";
import ResumeEducationInfo from "./ResumePageFolder/ResumeEducationInfo";
import ResumeExperienceInfo from "./ResumePageFolder/ResumeExperienceInfo";
import Qualifications from "./QualificationsFolder/Qualifications/Qualifications";
import Layout from "./LayoutFolder/Layout";
import ColorCv from "./ColorCvFolder/ColorCv";
import FontCv from "./FontCvFolder/FontCv";
import { CvContext } from "../store/cv-app-context";

const CvApp = () => {
  // State for controlling different aspects of the CV
  const [viewMode, setViewMode] = useState("Content");
  const [layout, setLayout] = useState("Top");
  const [font, setFont] = useState("Serif");
  const [color, setColor] = useState("#0e374e");
  const [storeQualifications, setStoreQualifications] = useState({
    education: [templateResume.education[0]],
    experience: [templateResume.experience[0]],
  });
  const [values, setValues] = useState({
    personalDetails: templateResume.personalDetails,
    education: templateResume.education[0],
    experience: templateResume.experience[0],
  });

  // Handlers for different actions
  const handleClearButton = () => {
    setValues({
      personalDetails: { name: "", email: "", phoneNumber: "", address: "" },
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
    setStoreQualifications({ education: [], experience: [] });
  };

  const handleTemplateButton = () => {
    setValues({
      personalDetails: templateResume.personalDetails,
      education: templateResume.education[0],
      experience: templateResume.experience[0],
    });
    setStoreQualifications({
      education: [templateResume.education[0]],
      experience: [templateResume.experience[0]],
    });
  };

  const handleInputs = (e, section) => {
    // Extracting name and value from the input event
    const { name, value } = e.target;
    // Updating state using functional update to ensure correct previous state reference
    setValues((prev) => ({
      // Spread previous state
      ...prev,
      // Update the specific section of the form with the new input value
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

  // Styles for layout and font
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

  // PDF generation
  const { toPDF, targetRef } = usePDF({
    filename: `CV ${values.personalDetails.name}`,
  });

  const contextValue = {
    storeQualifications: storeQualifications,
    setStoreQualifications: setStoreQualifications,
    qualificationInputs: values,
    setQualificationInputs: setValues,
  };

  return (
    <CvContext.Provider value={contextValue}>
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
                <Qualifications />
              </>
            ) : (
              <>
                <Layout handleLayouts={handleLayouts} color={color} />
                <ColorCv color={color} handleColor={handleColor} />
                <FontCv handleFonts={handleFonts} font={font} color={color} />
              </>
            )}
            <div className="download-button-container">
              <button id="download-button" onClick={() => toPDF()}>
                <span>
                  <BsFileEarmarkPdf /> Download
                </span>
                <FaDownload />
              </button>
            </div>
          </div>
        </section>
        <section
          ref={targetRef}
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
    </CvContext.Provider>
  );
};

export default CvApp;
