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
  const { storeQualifications } = config;
  const [addQualifications, setAddQualifications] = useState(false);
  const [controlButtons, setControlButtons] = useState(false);

  const handleAddQualificationButton = () => {
    setAddQualifications(true);
    setControlButtons(false);
  };

  const handleSaveBtn = (e) => {
    e.preventDefault();
    setControlButtons(true);
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

  const handleCancelButton = (e) => {
    e.preventDefault();
    setControlButtons(true);
    setAddQualifications(false);
  };

  let qualificationEntries;

  if (controlButtons && config.text === "Education") {
    qualificationEntries = storeQualifications.education.map(
      (education, index) => {
        return (
          <p className="qualificationEntry" key={index}>
            {education.name}
          </p>
        );
      }
    );
  } else if (controlButtons && config.text === "Experience") {
    qualificationEntries = storeQualifications.experience.map(
      (experience, index) => {
        return (
          <p className="qualificationEntry" key={index}>
            {experience.name}
          </p>
        );
      }
    );
  }

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
        {qualificationEntries}
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
          <AddQualifications
            config={config}
            handleSaveBtn={handleSaveBtn}
            handleCancelButton={handleCancelButton}
          />
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
