import AccordionItemComp from "./AccordionItemComp";
import { Accordion } from "@chakra-ui/accordion";
import { FaBriefcase } from "react-icons/fa"; // icon for "experience"
import { GiOpenBook } from "react-icons/gi";
import PropTypes from "prop-types";

const Qualifications = ({ qualificationInputs, setQualificationHandle }) => {
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
        }}
      />
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

Qualifications.propTypes = {
  qualificationInputs: PropTypes.shape({
    education: PropTypes.object.isRequired,
    experience: PropTypes.object.isRequired,
  }).isRequired,
  setQualificationHandle: PropTypes.func.isRequired,
};

export default Qualifications;
