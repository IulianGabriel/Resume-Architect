import PropTypes from "prop-types";
import { templateResume } from "../util/template";
import "./PersonalDetails.css";

const PersonalDetails = ({ handlePersonalDetailsInputs, pdInputValues }) => {
  return (
    <form className="personal-details">
      <h3>Personal Details</h3>
      <label htmlFor="name">Full name</label>
      <input
        type="text"
        placeholder={templateResume.personalDetails.name}
        id="name"
        name="name"
        value={pdInputValues.name}
        onChange={handlePersonalDetailsInputs}
      />
      <label htmlFor="email">
        Email <span>recommended</span>
      </label>
      <input
        type="email"
        placeholder={templateResume.personalDetails.email}
        id="email"
        name="email"
        value={pdInputValues.email}
        onChange={handlePersonalDetailsInputs}
      />
      <label htmlFor="phoneNumber">
        Phone Number <span>recommended</span>
      </label>
      <input
        type="tel"
        placeholder={templateResume.personalDetails.phoneNumber}
        id="phoneNumber"
        name="phoneNumber"
        value={pdInputValues.phoneNumber}
        onChange={handlePersonalDetailsInputs}
      />
      <label htmlFor="address">
        Address <span>recommended</span>
      </label>
      <input
        type="text"
        placeholder={templateResume.personalDetails.address}
        id="address"
        name="address"
        value={pdInputValues.address}
        onChange={handlePersonalDetailsInputs}
      />
    </form>
  );
};

PersonalDetails.propTypes = {
  handlePersonalDetailsInputs: PropTypes.func.isRequired,
  pdInputValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonalDetails;
