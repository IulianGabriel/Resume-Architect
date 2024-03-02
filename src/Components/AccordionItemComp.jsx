import AddQualifications from "./AddQualifications";
import { MdSchool } from "react-icons/md"; //icon for "Education"
import { FaBriefcase } from "react-icons/fa"; // icon for "experience"
import PropTypes from "prop-types";
import { useState } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";

const AccordionItemComp = ({ text }) => {
  const [addQualifications, setAddQualifications] = useState(false);
  return (
    <AccordionItem className="qualification-container">
      <AccordionButton className="qualification">
        <span>
          {text === "Education" ? <MdSchool /> : <FaBriefcase />} {text}
        </span>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        {!addQualifications ? (
          <div className="qualification-button-container">
            <button
              onClick={() => setAddQualifications(true)}
              className="create-form"
            >
              &#x2b; {text}
            </button>
          </div>
        ) : null}
        {addQualifications && <AddQualifications category={text} />}
      </AccordionPanel>
    </AccordionItem>
  );
};

AccordionItemComp.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AccordionItemComp;
