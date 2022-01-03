import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// styles
import "./assets/css/styles.css";

// pages and components
import Home from "./pages/home/Home";
import PatientDashboard from "./pages/patient-dashboard/PatientDashboard";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/Navbar/Navbar";
import StaffDashboard from "./pages/staff-dashboard/StaffDashboard";

const App = () => {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />

          {/* Patient Dashboard Routes */}
          <Route path="/patient/dashboard" element={<PatientDashboard option={""} />} />
          <Route path="/patient/dashboard/book-appointment" element={<PatientDashboard option={"/book-appointment"} />} />
          <Route path="/patient/dashboard/view-appointment" element={<PatientDashboard option={"/view-appointment"} />} />
          <Route path="/patient/dashboard/medical-record" element={<PatientDashboard option={"/medical-record"} />} />

          {/* Staff Dashboard Routes */}

          <Route path="/staff/dashboard" element={<StaffDashboard option={""} />} />
          <Route path="/staff/dashboard/doctor" element={<StaffDashboard option={"/doctor"} />} />
          <Route path="/staff/dashboard/cashier" element={<StaffDashboard option={"/cashier"} />} />
          <Route path="/staff/dashboard/receptionist" element={<StaffDashboard option={"/receptionist"} />} />
          <Route path="/staff/dashboard/labassistant" element={<StaffDashboard option={"/labassistant"} />} />
          <Route path="/staff/dashboard/nurse" element={<StaffDashboard option={"/nurse"} />} />
          <Route path="/staff/dashboard/pharmacist" element={<StaffDashboard option={"/pharmacist"} />} />
          {/* Default Route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
