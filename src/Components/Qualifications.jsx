import AccordionItemComp from "./AccordionItemComp";
import { Accordion } from "@chakra-ui/accordion";
import { FaBriefcase } from "react-icons/fa"; // icon for "experience"
import { GiOpenBook } from "react-icons/gi";
import PropTypes from "prop-types";
import "./Qualifications.css";

const Qualifications = ({
  qualificationInputs,
  setQualificationHandle,
  storeQualifications,
  setStoreQualifications,
}) => {
  const handleQualificationsInputs = (e, section) => {
    const { name, value } = e.target;
    setQualificationHandle((prev) => ({
      ...prev,
      [section]: { ...prev[section], [name]: value },
    }));
  };
  return (
    <Accordion allowToggle>
      <AccordionItemComp
        config={{
          text: "Education",
          icon: <GiOpenBook />,
          qualificationInputs: qualificationInputs.education,
          handleQualificationsInputs: (e) =>
            handleQualificationsInputs(e, "education"),
          setQualificationInputs: setQualificationHandle,
          storeQualifications: storeQualifications,
          setStoreQualifications: setStoreQualifications,
        }}
      />
      <AccordionItemComp
        config={{
          text: "Experience",
          icon: <FaBriefcase />,
          qualificationInputs: qualificationInputs.experience,
          handleQualificationsInputs: (e) =>
            handleQualificationsInputs(e, "experience"),
          setQualificationInputs: setQualificationHandle,
          storeQualifications: storeQualifications,
          setStoreQualifications: setStoreQualifications,
        }}
      />
    </Accordion>
  );
};

Qualifications.propTypes = {
  qualificationInputs: PropTypes.shape({
    education: PropTypes.object.isRequired,
    experience: PropTypes.object.isRequired,
  }).isRequired,
  setQualificationHandle: PropTypes.func.isRequired,
  storeQualifications: PropTypes.shape({
    education: PropTypes.array.isRequired,
    experience: PropTypes.array.isRequired,
  }).isRequired,
  setStoreQualifications: PropTypes.func.isRequired,
};

export default Qualifications;
