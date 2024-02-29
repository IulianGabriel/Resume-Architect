import templateResume from "../util/template";

export default function PersonalDetails({ handleInputChange, inputValue }) {
  return (
    <form className="personal-details">
      <h3>Personal Details</h3>
      <label>Full name</label>
      <input
        type="text"
        placeholder={templateResume.name}
        name="name"
        value={inputValue.name}
        onChange={handleInputChange}
      />
      <label>
        Email <span>recommended</span>
      </label>
      <input
        type="email"
        placeholder={templateResume.email}
        name="email"
        value={inputValue.email}
        onChange={handleInputChange}
      />
      <label>
        Phone Number <span>recommended</span>
      </label>
      <input
        type="tel"
        placeholder={templateResume.phoneNumber}
        name="phoneNumber"
        value={inputValue.phoneNumber}
        onChange={handleInputChange}
      />
      <label>
        Address <span>recommended</span>
      </label>
      <input
        type="text"
        placeholder={templateResume.address}
        name="address"
        value={inputValue.address}
        onChange={handleInputChange}
      />
    </form>
  );
}
