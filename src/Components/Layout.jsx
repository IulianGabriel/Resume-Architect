export default function Layout() {
  return (
    <>
      <div className="app-div">
        <section className="customize-resume-container">
          <div className="sidebar">
            <button>Content</button>
            <button>Customize</button>
          </div>
          <div className="form-container">
            <div className="resume-controls">
              <button>Clear Resume</button>
              <button>Load Template</button>
            </div>
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
              <input
                type="tel"
                id="phone-number"
                placeholder="Enter phone number"
              />
              <label>
                Address <span>recommended</span>
              </label>
              <input type="text" placeholder="Bucuresti, Romania" />
            </form>
            <div className="education">
              <button>Education</button>
            </div>
            <div className="experience">
              <button>Experience</button>
            </div>
          </div>
        </section>
        <section className="resume-container">
          <div className="resume">
            <div className="personal-info">
              <h1>Burciu Iulian Gabriel</h1>
              <div className="contact-info">
                <span>Buiuga@gmail.com</span>
                <span>077-012-3123</span>
                <span>Pitesti, Romania</span>
              </div>
            </div>
            <div className="education-info">
              <p>Temporary...</p>
            </div>
            <div className="experience-info">
              <p>Temporary...</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
