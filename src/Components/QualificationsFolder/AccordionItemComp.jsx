import AddQualifications from "./AddQualifications/AddQualifications";
import { useState } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import PropTypes from "prop-types";

const AccordionItemComp = ({ config }) => {
  const {
    storeQualifications,
    setStoreQualifications,
    setQualificationInputs,
    text,
    icon,
    qualificationInputs,
  } = config;

  const [addQualifications, setAddQualifications] = useState(false);
  const [controlButtons, setControlButtons] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedIndex, setEditedIndex] = useState(null);
  const arrayToUpdate = text === "Education" ? "education" : "experience";
  const updatedQualifications = [...storeQualifications[arrayToUpdate]];
  console.log(controlButtons);
  const handleAddQualificationButton = () => {
    setStoreQualifications((prevState) => ({
      ...prevState,
      qualificationInputs: {},
    }));
    setAddQualifications(true);
    setControlButtons(false);
    setQualificationInputs((prevQualifications) => ({
      ...prevQualifications,
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
    }));
  };

  const handleSaveBtn = (e) => {
    e.preventDefault();
    setControlButtons(true);
    setAddQualifications(false);

    if (isEditing && editedIndex !== null) {
      updatedQualifications[editedIndex] = qualificationInputs;
    } else {
      updatedQualifications.push(qualificationInputs);
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
    const showEditInputs = storeQualifications[arrayToUpdate][index];
    setQualificationInputs((prevQualifications) => ({
      ...prevQualifications,
      [arrayToUpdate]: showEditInputs,
    }));
    setEditedIndex(index);
  };

  const handleDeleteButton = (e) => {
    e.preventDefault();
    setControlButtons(true);
    setAddQualifications(false);

    isEditing &&
      editedIndex !== null &&
      updatedQualifications.splice(editedIndex, 1);

    setStoreQualifications((prevState) => ({
      ...prevState,
      [arrayToUpdate]: updatedQualifications,
    }));
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
          {icon}
          {text}
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
              &#x2b; {text}
            </button>
          </div>
        ) : null}
        {addQualifications && (
          <AddQualifications
            config={config}
            handleSaveBtn={handleSaveBtn}
            handleCancelButton={handleCancelButton}
            handleDeleteButton={handleDeleteButton}
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
    setQualificationInputs: PropTypes.func.isRequired,
    qualificationInputs: PropTypes.object.isRequired,
    storeQualifications: PropTypes.shape({
      education: PropTypes.array.isRequired,
      experience: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default AccordionItemComp;
