import { FaRegFileAlt } from "react-icons/fa";
import { BiCustomize } from "react-icons/bi";
import "./Sidebar.css";

const Sidebar = ({ viewMode, handleViewMode }) => {
  return (
    <div className="sidebar">
      <button
        id={viewMode === "Content" ? "sidebar-active" : null}
        onClick={() => handleViewMode("Content")}
      >
        <FaRegFileAlt /> Content
      </button>
      <button
        id={viewMode === "Customize" ? "sidebar-active" : null}
        onClick={() => handleViewMode("Customize")}
      >
        <BiCustomize /> Customize
      </button>
    </div>
  );
};

export default Sidebar;
