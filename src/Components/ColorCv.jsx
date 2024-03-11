const ColorCv = () => {
  return (
    <div className="color-cv-container">
      <h2>Color</h2>
      <label htmlFor="color">
        Accent Color
        <input
          className="color-input"
          id="color"
          type="color"
          defaultValue="#0e374e"
        />
      </label>
    </div>
  );
};

export default ColorCv;
