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
  const { storeQualifications, setStoreQualifications } = config;

  const [addQualifications, setAddQualifications] = useState(false);
  const [controlButtons, setControlButtons] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedIndex, setEditedIndex] = useState(null);
  const arrayToUpdate =
    config.text === "Education" ? "education" : "experience";

  const handleAddQualificationButton = () => {
    setStoreQualifications((prevState) => ({
      ...prevState,
      qualificationInputs: {},
    }));
    setAddQualifications(true);
    setControlButtons(false);
  };

  const handleSaveBtn = (e) => {
    e.preventDefault();
    setControlButtons(true);
    setAddQualifications(false);
    const updatedQualifications = [...storeQualifications[arrayToUpdate]];

    if (isEditing && editedIndex !== null) {
      updatedQualifications[editedIndex] = config.qualificationInputs;
    } else {
      updatedQualifications.push(config.qualificationInputs);
    }

    setStoreQualifications((prevState) => ({
      ...prevState,
      [arrayToUpdate]: updatedQualifications,
    }));

    setIsEditing(false);
    setEditedIndex(null);
  };

  const handleCancelButton = (e) => {
    e.preventDefault();
    setControlButtons(true);
    setAddQualifications(false);
    setIsEditing(false);
    setEditedIndex(null);
  };

  const handleEditButton = (index) => {
    setIsEditing(true);
    setAddQualifications(true);
    setControlButtons(false);
    setStoreQualifications((prevState) => ({
      ...prevState,
      qualificationInputs: storeQualifications[arrayToUpdate][index],
    }));
    setEditedIndex(index);
  };

  let qualificationEntries = null;

  if (!addQualifications) {
    qualificationEntries = storeQualifications[arrayToUpdate].map(
      (qualification, index) => {
        const newId = window.crypto.randomUUID();
        return (
          <p
            className="qualificationEntry"
            key={newId}
            onClick={() => handleEditButton(index)}
          >
            {qualification.name}
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
