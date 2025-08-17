import Navbar from "./Pages/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ResumeLanding from "./Pages/ResumeLanding";
import { Box } from "@chakra-ui/react";
import "./index.css";
import Login from "./Pages/Loginresume";
import Dashboard from "./Pages/Resume_edit";
import ResumeForm from "./Pages/Resumeform";

function App() {
  return (
    <BrowserRouter basename="/Resume-builder-website">
      <Box className="no-scrollbar">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ResumeLanding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ResumeForm" element={<ResumeForm />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;

