import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import JourneyPage from "./pages/JourneyPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-black text-neutral-50">
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
