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
import NotFound from "./pages/NotFound";

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const is404 =
    !["/", "/gallery", "/about", "/writing"].includes(pathname) &&
    !pathname.startsWith("/writing/") &&
    !pathname.startsWith("/work/");

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
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!is404 && <Footer />}
      {!is404 && <Floater />}
    </>
  );
}