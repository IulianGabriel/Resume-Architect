import PropTypes from "prop-types";
import { calculateColorBrightness } from "../../util/colorUtils";
import "./FontCv.css";

// Define the FontCv component
const FontCv = ({ handleFonts, font, color }) => {
  // Calculate brightness based on color
  const brightness = calculateColorBrightness(color);
  // Determine text color based on brightness
  const textColor = brightness > 128 ? "#333" : "white";
  return (
    <div className="font-cv-container">
      <h2>Fonts</h2>
      <div className="font-select">
        <button
          className="serif-button"
          id={font === "Serif" ? "active-font" : ""}
          onClick={() => handleFonts("Serif")}
          style={
            font === "Serif"
              ? { color: textColor, backgroundColor: color }
              : null
          }
        >
          <span>Aa</span>
          Serif
        </button>
        <button
          className="sans-button"
          id={font === "Sans" ? "active-font" : ""}
          onClick={() => handleFonts("Sans")}
          style={
            font === "Sans"
              ? { color: textColor, backgroundColor: color }
              : null
          }
        >
          <span>Aa</span>
          Sans
        </button>
        <button
          className="segoe-button"
          id={font === "Segoe" ? "active-font" : ""}
          onClick={() => handleFonts("Segoe")}
          style={
            font === "Segoe"
              ? { color: textColor, backgroundColor: color }
              : null
          }
        >
          <span>Aa</span>
          Segoe
        </button>
      </div>
    </div>
  );
};

// Define prop types for the FontCv component
FontCv.propTypes = {
  handleFonts: PropTypes.func.isRequired,
  font: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default FontCv;
