export default function PersonalDetails() {
  return (
    <form className="personal-details">
      <h3>Personal Details</h3>
      <label>Full name</label>
      <input type="text" placeholder="Burciu Iulian Gabriel" />
      <label>
        Email <span>recommended</span>
      </label>
      <input type="email" placeholder="Buiuga@gmail.com" />
      <label>
        Phone Number <span>recommended</span>
      </label>
      <input type="tel" placeholder="Enter phone number" />
      <label>
        Address <span>recommended</span>
      </label>
      <input type="text" placeholder="Bucuresti, Romania" />
    </form>
  );
}
