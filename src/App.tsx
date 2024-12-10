import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Tech from "./pages/Tech";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import { ReactNode } from "react";
import { motion as m } from "framer-motion";
import Footer from "./components/Footer";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/projects"
          element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="/tech"
          element={
            <PageWrapper>
              <Tech />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      exit={{ y: "0%" }}
      className="w-full h-full fixed top-0 left-0"
    >
      {children}
    </m.div>
  );
}

function App() {
  return (
    <div className="relative h-svh overflow-hidden p-8 bg-[#FFF2AB]">
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
