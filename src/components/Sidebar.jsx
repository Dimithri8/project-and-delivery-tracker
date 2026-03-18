import { NavLink } from "react-router-dom";
import { House, FolderOpen, Users, ChartNoAxesCombined } from "lucide-react";

export default function Sidebar({ toggle, handleToggleSidebar }) {
  const activeStyle = `bg-[#1A56DB] text-white rounded-sm transition-all duration-300`;

  return (
    <nav
      className={`flex flex-col gap-5 ${toggle ? "p-5" : "px-2 py-5"} bg-[#F9FAFB] text-black h-screen`}
    >
      <div onClick={handleToggleSidebar}>
        <img
          className="w-fit"
          src="/src/assets/images/oracle.png"
          alt="orbit-logo"
        />
      </div>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `py-2 flex items-center ${
            toggle ? " px-5 justify-start gap-3" : "justify-center px-3"
          } ${isActive ? activeStyle : ""}`
        }
      >
        <House className="shrink-0" />
        {toggle ? "Overview" : ""}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `py-2 flex items-center ${
            toggle ? " px-5 justify-start gap-3" : "justify-center px-3"
          } ${isActive ? activeStyle : ""}`
        }
        to={"projects"}
      >
        <FolderOpen className="shrink-0" />
        {toggle ? "Projects" : ""}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `py-2 flex items-center ${
            toggle ? " px-5 justify-start gap-3" : "justify-center px-3"
          } ${isActive ? activeStyle : ""}`
        }
        to={"team"}
      >
        <Users className="shrink-0" />
        {toggle ? "Teams" : ""}
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `py-2 flex items-center ${
            toggle ? " px-5 justify-start gap-3" : "justify-center px-3"
          } ${isActive ? activeStyle : ""}`
        }
        to={"/analytics"}
      >
        <ChartNoAxesCombined className="shrink-0" />
        {toggle ? "Analytics" : ""}
      </NavLink>
    </nav>
  );
}
