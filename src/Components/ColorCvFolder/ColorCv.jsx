import PropTypes from "prop-types";
import "./ColorCv.css";

// Define the ColorCv component
const ColorCv = ({ color, handleColor }) => {
  return (
    <div className="color-cv-container">
      <h2>Color</h2>
      <label htmlFor="color">
        Accent Color
        <input
          className="color-input"
          id="color"
          type="color"
          value={color}
          onChange={handleColor}
        />
      </label>
    </div>
  );
};

// Define prop types for the ColorCv component
ColorCv.propTypes = {
  color: PropTypes.string.isRequired,
  handleColor: PropTypes.func.isRequired,
};

export default ColorCv;
