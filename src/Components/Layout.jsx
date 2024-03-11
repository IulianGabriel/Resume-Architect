const Layout = () => {
  return (
    <div className="layout-container">
      <h2>Layout</h2>
      <div className="layout-buttons">
        <button>
          <div className="layout-top"></div>
          Top
        </button>
        <button>
          <div className="layout-left"></div>
          Left
        </button>
        <button>
          <div className="layout-right"></div>
          Right
        </button>
      </div>
    </div>
  );
};

export default Layout;
