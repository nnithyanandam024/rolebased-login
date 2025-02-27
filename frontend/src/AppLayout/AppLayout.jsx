import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Login/Login";
import FacAttendence from "../pages/Admin/FacAttendence";
import StuAttendence from "../pages/Admin/StuAttendence";
import Remarks from "../pages/Faculty/Remarks";
import Timetable from "../pages/Faculty/Timetable";
import Uploads from "../pages/Faculty/Uploads";
import Academics from "../pages/Student/Academics";
import Acheivements from "../pages/Student/Acheivements";
import Fa from "../pages/Student/Fa";
import Marks from "../pages/Student/Marks";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import FacDashboard from "../pages/Faculty/FacDashboard";
import StudentDashboard from "../pages/Student/StudentDashboard";

const AppLayout = () => {
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || "");

  useEffect(() => {
    localStorage.setItem("userRole", userRole);
  }, [userRole]);

  return (
    <Router>
      <Routes>
     
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />

       
        {userRole === "admin" ? (
          <>
            <Route path="/admin/admdashboard" element={<AdminDashboard />} />
            <Route path="/admin/facattendence" element={<FacAttendence />} />
            <Route path="/admin/stuattendence" element={<StuAttendence />} />
          </>
        ) : null}

      
        {userRole === "faculty" ? (
          <>
            <Route path="/faculty/facdashboard" element={<FacDashboard />} />
            <Route path="/faculty/remarks" element={<Remarks />} />
            <Route path="/faculty/timetable" element={<Timetable />} />
            <Route path="/faculty/uploads" element={<Uploads />} />
          </>
        ) : null}

       
        {userRole === "student" ? (
          <>
            <Route path="/student/stdashboard" element={<StudentDashboard />} />
            <Route path="/student/academics" element={<Academics />} />
            <Route path="/student/acheivements" element={<Acheivements />} />
            <Route path="/student/fa" element={<Fa />} />
            <Route path="/student/marks" element={<Marks />} />
          </>
        ) : null}

      
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppLayout;
