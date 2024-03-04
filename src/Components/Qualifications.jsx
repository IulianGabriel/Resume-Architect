import AccordionItemComp from "./AccordionItemComp";
import { Accordion } from "@chakra-ui/accordion";
import { FaBriefcase } from "react-icons/fa"; // icon for "experience"
import { GiOpenBook } from "react-icons/gi";

const Qualifications = () => {
  return (
    <Accordion allowToggle>
      <AccordionItemComp config={{ text: "Education", icon: <GiOpenBook /> }} />
      <AccordionItemComp
        config={{ text: "Experience", icon: <FaBriefcase /> }}
      />
    </Accordion>
  );
};

export default Qualifications;
