import AddQualifications from "./AddQualifications";
import { useState } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import PropTypes from "prop-types";

const AccordionItemComp = ({ config }) => {
  const [addQualifications, setAddQualifications] = useState(false);
  return (
    <AccordionItem className="qualification-container">
      <AccordionButton className="qualification">
        <span>
          {config.icon}
          {config.text}
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
              &#x2b; {config.text}
            </button>
          </div>
        ) : null}
        {addQualifications && <AddQualifications config={config} />}
      </AccordionPanel>
    </AccordionItem>
  );
};

AccordionItemComp.propTypes = {
  config: PropTypes.shape({
    text: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  }).isRequired,
};

export default AccordionItemComp;
