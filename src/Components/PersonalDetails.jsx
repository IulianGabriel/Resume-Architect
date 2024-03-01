import PropTypes from "prop-types";
import templateResume from "../util/template";

export default function PersonalDetails({ handleInputChange, inputValue }) {
  return (
    <form className="personal-details">
      <h3>Personal Details</h3>
      <label htmlFor="name">Full name</label>
      <input
        type="text"
        placeholder={templateResume.name}
        id="name"
        name="name"
        value={inputValue.name}
        onChange={handleInputChange}
      />
      <label htmlFor="email">
        Email <span>recommended</span>
      </label>
      <input
        type="email"
        placeholder={templateResume.email}
        id="email"
        name="email"
        value={inputValue.email}
        onChange={handleInputChange}
      />
      <label htmlFor="phoneNumber">
        Phone Number <span>recommended</span>
      </label>
      <input
        type="tel"
        placeholder={templateResume.phoneNumber}
        id="phoneNumber"
        name="phoneNumber"
        value={inputValue.phoneNumber}
        onChange={handleInputChange}
      />
      <label htmlFor="address">
        Address <span>recommended</span>
      </label>
      <input
        type="text"
        placeholder={templateResume.address}
        id="address"
        name="address"
        value={inputValue.address}
        onChange={handleInputChange}
      />
    </form>
  );
}

PersonalDetails.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};
