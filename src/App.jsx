import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import SprintBoard from "./pages/SprintBoard";
import Team from "./pages/Team";
import Analytics from "./pages/Analytics";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="projects" element={<Projects />}>
          <Route path=":pid" element={<ProjectDetails />}>
            <Route path="sprint-board" element={<SprintBoard />} />
          </Route>
        </Route>
        <Route path="team" element={<Team />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
}
