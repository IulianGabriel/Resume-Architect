import AddQualifications from "./AddQualifications";
import { MdSchool } from "react-icons/md"; //icon for "Education"
import { FaBriefcase } from "react-icons/fa"; // icon for "experience"
import PropTypes from "prop-types";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import { useState } from "react";

export default function Qualifications({ text, icon, createFormText }) {
  const [addQualification, setAddQualification] = useState(false);
  function handleQualificationButton() {
    setAddQualification(true);
  }
  return (
    <Accordion allowToggle>
      <AccordionItem className="qualification-container">
        <AccordionButton className="qualification">
          <div>
            <span>
              {icon === "educationIcon" ? <MdSchool /> : <FaBriefcase />} {text}
            </span>
          </div>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel className="qualification-open-container">
          <button
            onClick={handleQualificationButton}
            className={`create-form ${addQualification ? "inactive" : null}`}
          >
            {createFormText}
          </button>
          {addQualification && <AddQualifications category={text}/>}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

Qualifications.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  createFormText: PropTypes.string.isRequired,
};
