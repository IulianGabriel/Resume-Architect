import AccordionItemComp from "./AccordionItemComp";
import { Accordion } from "@chakra-ui/accordion";
import { FaBriefcase } from "react-icons/fa"; // icon for "experience"
import { GiOpenBook } from "react-icons/gi";
import { useState } from "react";

const Qualifications = () => {
  const [qualificationInputs, setQualificationInputs] = useState({
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
  function handleQualificationsInputs(e, section) {
    const { name, value } = e.target;
    setQualificationInputs((prev) => ({
      ...prev,
      [section]: { ...prev[section], [name]: value },
    }));
  }

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

export default Qualifications;
