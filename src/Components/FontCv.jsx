import PropTypes from "prop-types";

const FontCv = ({ handleFonts, font }) => {
  return (
    <div className="font-cv-container">
      <h2>Fonts</h2>
      <div className="font-select">
        <button
          className="serif-button"
          id={font === "Serif" ? "active-font" : ""}
          onClick={() => handleFonts("Serif")}
        >
          <span>Aa</span>
          Serif
        </button>
        <button
          className="sans-button"
          id={font === "Sans" ? "active-font" : ""}
          onClick={() => handleFonts("Sans")}
        >
          <span>Aa</span>
          Sans
        </button>
        <button
          className="segoe-button"
          id={font === "Segoe" ? "active-font" : ""}
          onClick={() => handleFonts("Segoe")}
        >
          <span>Aa</span>
          Segoe
        </button>
      </div>
    </div>
  );
};

FontCv.propTypes = {
  handleFonts: PropTypes.func.isRequired,
  font: PropTypes.string.isRequired,
};

export default FontCv;
