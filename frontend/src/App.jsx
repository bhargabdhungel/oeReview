import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Verify } from "./pages/Verify";
import { ForgotPass } from "./pages/ForgotPass";
import Loading from "./pages/Loading";
import Navbar from "./components/Navbar";
import AddSubjects from "./pages/AddSubjects";
import { Home } from "./pages/Home";
import AddReview from "./pages/AddReview";

function HomeRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addSubjects" element={<AddSubjects />} />
        <Route path="/AddReview" element={<AddReview />} />
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
