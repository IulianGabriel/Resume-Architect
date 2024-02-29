export default function PersonalDetails({ handleInputChange, inputValue }) {
  return (
    <form className="personal-details">
      <h3>Personal Details</h3>
      <label>Full name</label>
      <input
        type="text"
        placeholder="Burciu Iulian Gabriel"
        name="name"
        value={inputValue.name}
        onChange={handleInputChange}
      />
      <label>
        Email <span>recommended</span>
      </label>
      <input
        type="email"
        placeholder="Buiuga@gmail.com"
        name="email"
        value={inputValue.email}
        onChange={handleInputChange}
      />
      <label>
        Phone Number <span>recommended</span>
      </label>
      <input
        type="tel"
        placeholder="Enter phone number"
        name="phoneNumber"
        value={inputValue.phoneNumber}
        onChange={handleInputChange}
      />
      <label>
        Address <span>recommended</span>
      </label>
      <input
        type="text"
        placeholder="Bucuresti, Romania"
        name="address"
        value={inputValue.address}
        onChange={handleInputChange}
      />
    </form>
  );
}
