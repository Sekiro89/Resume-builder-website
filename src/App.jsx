import Navbar from "./Pages/Navbar";
import {Routes,Route} from "react-router-dom"
import ResumeLanding from "./Pages/ResumeLanding"
import savedResume from "./Pages/savedResume";
import { Box } from "@chakra-ui/react";
import './index.css';
import Login from "./Pages/Loginresume";
import Dashboard from "./Pages/Resume_edit";

function App() {
  return (
    <div>
      <Box className="no-scrollbar">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ResumeLanding />} />
        <Route path="/Saveresume" element={<savedResume />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </Box>
    </div>
  );
}

export default App;

