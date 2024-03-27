import AccordionItemComp from "../AccordionItemComp";
import { Accordion } from "@chakra-ui/accordion";
import { FaBriefcase } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import PropTypes from "prop-types";
import "./Qualifications.css";
import { useContext } from "react";
import { CvContext } from "../../../store/cv-app-context";

// Component for managing education and experience qualifications
const Qualifications = () => {
  const { setQualificationInputs, qualificationInputs } = useContext(CvContext);
  // Function to handle changes in qualification inputs
  const handleQualificationsInputs = (e, section) => {
    const { name, value } = e.target;
    setQualificationInputs((prev) => ({
      ...prev,
      [section]: { ...prev[section], [name]: value },
    }));
  };

  return (
    <Accordion
      allowToggle
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {/* Component for managing education qualifications */}
      <AccordionItemComp
        config={{
          text: "Education",
          icon: <GiOpenBook />,
          qualificationInputs: qualificationInputs.education,
          handleQualificationsInputs: (e) =>
            handleQualificationsInputs(e, "education"),
        }}
      />
      {/* Component for managing experience qualifications */}
      <AccordionItemComp
        config={{
          text: "Experience",
          icon: <FaBriefcase />,
          qualificationInputs: qualificationInputs.experience,
          handleQualificationsInputs: (e) =>
            handleQualificationsInputs(e, "experience"),
        }}
      />
    </Accordion>
  );
};

// PropTypes for Qualifications component
Qualifications.propTypes = {
  qualificationInputs: PropTypes.shape({
    education: PropTypes.object.isRequired,
    experience: PropTypes.object.isRequired,
  }),
  storeQualifications: PropTypes.shape({
    education: PropTypes.array.isRequired,
    experience: PropTypes.array.isRequired,
  }),
};

export default Qualifications;
