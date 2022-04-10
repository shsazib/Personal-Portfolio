import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Works from "./Components/Works/Works";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import ErrorPage from "./Components/Error/ErrorPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route  path="about" element={<About />} />
          <Route  path="resume" element={<Resume />} />
          <Route  path="work" element={<Works />} />
          <Route  path="blog" element={<Blog />} />
          <Route  path="contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
