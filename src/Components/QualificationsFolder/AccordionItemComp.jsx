import AddQualifications from "./AddQualifications/AddQualifications";
import { useState } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import PropTypes from "prop-types";

// Component representing an accordion item for displaying qualifications (education or experience)
const AccordionItemComp = ({ config }) => {
  const {
    storeQualifications,
    setStoreQualifications,
    setQualificationInputs,
    text,
    icon,
    qualificationInputs,
  } = config;

  // State variables
  const [addQualifications, setAddQualifications] = useState(false);
  const [controlButtons, setControlButtons] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedIndex, setEditedIndex] = useState(null);
  const arrayToUpdate = text === "Education" ? "education" : "experience";
  const updatedQualifications = [...storeQualifications[arrayToUpdate]];

  // Handlers
  // Function to handle the addition of a new qualification
  const handleAddQualificationButton = () => {
    // Reset the qualificationInputs in storeQualifications to an empty object
    setStoreQualifications((prevState) => ({
      ...prevState,
      qualificationInputs: {},
    }));
    setAddQualifications(true);
    setControlButtons(false);
    // Reset qualificationInputs to empty fields for both education and experience
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
      // If editing an existing qualification, replace the qualification at the edited index with the updated qualificationInputs
      updatedQualifications[editedIndex] = qualificationInputs;
    } else {
      // If adding a new qualification, push the new qualificationInputs to the qualifications array
      updatedQualifications.push(qualificationInputs);
    }
    // Update storeQualifications with the updated qualifications array
    setStoreQualifications((prevState) => ({
      ...prevState,
      [arrayToUpdate]: updatedQualifications,
    }));
    // Reset editing state and edited index
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
    // Set qualificationInputs to the data of the qualification being edited
    setStoreQualifications((prevState) => ({
      ...prevState,
      qualificationInputs: storeQualifications[arrayToUpdate][index],
    }));
    // Retrieve data of the qualification being edited and set it in the qualificationInputs
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
    // Update storeQualifications with the updated qualifications array
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

// Prop type validation for AccordionItemComp component
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
