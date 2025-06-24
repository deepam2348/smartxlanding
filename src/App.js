import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Forget from "./components/forget.jsx";
import Dashboard from "./components/dashboard.jsx";
import CompleteProfile from "./components/complete-profile.jsx";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-dark text-light">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
             <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
               <Route path="/forgot" element={<Forget />} />
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/complete-profile" element={<CompleteProfile />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
