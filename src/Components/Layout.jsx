import PropTypes from "prop-types";

const Layout = ({ handleLayouts }) => {
  return (
    <div className="layout-container">
      <h2>Layout</h2>
      <div className="layout-buttons">
        <button onClick={() => handleLayouts("Top")}>
          <div className="layout-top"></div>
          Top
        </button>
        <button onClick={() => handleLayouts("Left")}>
          <div className="layout-left"></div>
          Left
        </button>
        <button onClick={() => handleLayouts("Right")}>
          <div className="layout-right"></div>
          Right
        </button>
      </div>
    </div>
  );
};

Layout.propTypes = {
  handleLayouts: PropTypes.func.isRequired,
};

export default Layout;
