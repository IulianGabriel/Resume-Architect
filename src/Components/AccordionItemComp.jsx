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
  const [saveButton, setSaveButton] = useState(false);
  const handleAddQualificationButton = () => {
    setAddQualifications(true);
    setSaveButton(false);
  };
  const handleSaveBtn = (e) => {
    e.preventDefault();
    setSaveButton(true);
    setAddQualifications(false);
    const arrayToUpdate =
      config.text === "Education" ? "education" : "experience";
    config.setStoreQualifications((prevState) => ({
      ...prevState,
      [arrayToUpdate]: [
        ...prevState[arrayToUpdate],
        config.qualificationInputs,
      ],
    }));
  };
  console.log(saveButton);
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
              onClick={handleAddQualificationButton}
              className="create-form"
            >
              &#x2b; {config.text}
            </button>
          </div>
        ) : null}
        {addQualifications && (
          <AddQualifications config={config} handleSaveBtn={handleSaveBtn} />
        )}
      </AccordionPanel>
    </AccordionItem>
  );
};

AccordionItemComp.propTypes = {
  config: PropTypes.shape({
    text: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    setStoreQualifications: PropTypes.func.isRequired,
    qualificationInputs: PropTypes.object.isRequired,
    storeQualifications: PropTypes.shape({
      education: PropTypes.array.isRequired,
      experience: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default AccordionItemComp;
