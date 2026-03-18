import { useState } from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const sidebarWidth = toggleSidebar
    ? "grid-cols-[200px_1fr]"
    : "grid-cols-[70px_1fr]";

  function handleToggleSidebar() {
    setToggleSidebar((prev) => !prev);
  }
  return (
    <div
      className={`grid ${sidebarWidth} transition-[grid-template-columns] duration-300 ease-in-out`}
    >
      <div className="top-0 h-screen w-full sticky">
        <Sidebar
          toggle={toggleSidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
      </div>
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
}
