import { MdSchool } from "react-icons/md"; //icon for "Education"
// import { IoChevronDown } from "react-icons/io5"; // icon for dropdown menu
import { FaBriefcase } from "react-icons/fa"; // icon for "experience"
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";

export default function Qualifications({ text, icon }) {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton className="qualification">
          <div>
            <span>
              {icon === "educationIcon" ? <MdSchool /> : <FaBriefcase />} {text}
            </span>
          </div>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>Test</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

Qualifications.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
