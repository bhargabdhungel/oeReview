import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Verify } from "./pages/Verify";
import { ForgotPass } from "./pages/ForgotPass";
import Loading from "./pages/Loading";
import Navbar from "./components/Navbar";
import AddSubjects from "./pages/AddSubjects";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AddReview from "./pages/AddReview";
import { AllReviews } from "./pages/AllReviews.jsx";
import { AllDepartments } from "./pages/AllDepartments.jsx";
import { DeptSubjects } from "./pages/DeptSubjects.jsx";

function HomeRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addSubjects" element={<AddSubjects />} />
        <Route path="/addReview" element={<AddReview />} />
        <Route path="/allReviews" element={<AllReviews />} />
        <Route path="/allDepartments" element={<AllDepartments />} />
        <Route path="/deptSubjects" element={<DeptSubjects />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifyEmail" element={<Verify />} />
        <Route path="/home/*" element={<HomeRoutes />} />
        <Route path="/forgotPassword" element={<ForgotPass />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </>
  );
}

export default App;
