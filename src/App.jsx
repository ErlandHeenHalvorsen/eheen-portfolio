// App.jsx

import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Layout from "./Layout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
