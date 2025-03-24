import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";
import { Toaster } from "react-hot-toast";
import SignupComponent from "./components/SignupComponent";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Toaster position="bottom-right" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          <Route path="/register" element={<SignupComponent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
