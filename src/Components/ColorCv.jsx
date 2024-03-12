import PropTypes from "prop-types";

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

ColorCv.propTypes = {
  color: PropTypes.string.isRequired,
  handleColor: PropTypes.func.isRequired,
};

export default ColorCv;
