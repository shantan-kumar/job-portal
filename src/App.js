import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobPortal from "./pages/JobPortal";
import ResumeUpload from "./pages/ResumeUpload";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<JobPortal />} />
        <Route path="/upload-resume" element={<ResumeUpload />} />
      </Routes>
    </Router>
    /*<div className="bg-red-500 text-white p-6">
      Tailwind is working!
    </div>*/
  );
}

export default App;