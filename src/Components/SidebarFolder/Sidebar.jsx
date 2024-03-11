import PropTypes from "prop-types";
import { FaRegFileAlt } from "react-icons/fa";
import { BiCustomize } from "react-icons/bi";
import "./Sidebar.css";

const Sidebar = ({ viewMode, handleViewMode }) => {
  return (
    <div className="sidebar">
      <button
        id={viewMode === "Content" ? "sidebar-active" : ""}
        onClick={() => handleViewMode("Content")}
      >
        <FaRegFileAlt /> Content
      </button>
      <button
        id={viewMode === "Customize" ? "sidebar-active" : ""}
        onClick={() => handleViewMode("Customize")}
      >
        <BiCustomize /> Customize
      </button>
    </div>
  );
};

Sidebar.propTypes = {
  viewMode: PropTypes.oneOf(["Content", "Customize"]).isRequired,
  handleViewMode: PropTypes.func.isRequired,
};

export default Sidebar;
