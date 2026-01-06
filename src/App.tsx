import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NotFound404 from "./components/NotFound404";

/**
 * App Component
 *
 * Main application component with routing setup.
 * Handles all routes including 404 error page.
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}

export default App;
