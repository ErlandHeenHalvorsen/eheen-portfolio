// App.jsx

import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import ContactMe from "./pages/ContactMe.jsx";
import Layout from "./Layout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects/:projectId" element={<ProjectDetails />} />
        <Route path="contact" element={<ContactMe />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
