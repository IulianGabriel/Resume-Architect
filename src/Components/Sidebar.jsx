import { FaRegFileAlt } from "react-icons/fa"; //File icon for "content" button
import { BiCustomize } from "react-icons/bi"; //icon for "customize" button

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button id="sidebar-active">
        <FaRegFileAlt /> Content
      </button>
      <button>
        <BiCustomize /> Customize
      </button>
    </div>
  );
};

export default Sidebar;
