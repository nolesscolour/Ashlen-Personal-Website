import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Floater from "./components/Floater";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Writing from "./pages/Writing";
import Project from "./pages/Project";
import Post from "./pages/Post";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<Post />} />
        <Route path="/work/:slug" element={<Project />} />
      </Routes>
      <Footer />
      <Floater />
    </>
  );
}
