import PropTypes from "prop-types";
import "./Layout.css";

const Layout = ({ handleLayouts, color }) => {
  return (
    <div className="layout-container">
      <h2>Layout</h2>
      <div className="layout-buttons">
        <button onClick={() => handleLayouts("Top")}>
          <div
            className="layout-top"
            style={{
              background: `linear-gradient(180deg, ${color} 50%, #fff 50%)`,
            }}
          ></div>
          Top
        </button>
        <button onClick={() => handleLayouts("Left")}>
          <div
            className="layout-left"
            style={{
              background: `linear-gradient(90deg, ${color} 50%, #fff 50%)`,
            }}
          ></div>
          Left
        </button>
        <button onClick={() => handleLayouts("Right")}>
          <div
            className="layout-right"
            style={{
              background: `linear-gradient(-90deg, ${color} 50%, #fff 50%)`,
            }}
          ></div>
          Right
        </button>
      </div>
    </div>
  );
};

Layout.propTypes = {
  handleLayouts: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Layout;
