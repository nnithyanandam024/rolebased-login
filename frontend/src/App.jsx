import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import AdmNavbar from "./components/Navbar/AdmNavbar";
import FacNavbar from "./components/Navbar/FacNavbar";
import StdNavbar from "./components/Navbar/StdNavbar";

const App = () => {
  const [role, setRole] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setRole={setRole} />} />
        <Route path="/admin/*" element={role === "admin" ? <AdmNavbar /> : <Navigate to="/" />} />
        <Route path="/faculty/*" element={role === "faculty" ? <FacNavbar /> : <Navigate to="/" />} />
        <Route path="/student/*" element={role === "student" ? <StdNavbar /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
