import { Accordion } from "@chakra-ui/accordion";
import AccordionItemComp from "./AccordionItemComp";

const Qualifications = () => {
  return (
    <Accordion allowToggle>
      <AccordionItemComp text="Education" />
      <AccordionItemComp text="Experience" />
    </Accordion>
  );
};

export default Qualifications;
