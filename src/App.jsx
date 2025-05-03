import React from "react";
import ScrollToTop from "./ScrollToTop";
import WebPage from "./Pages/HomePage/Home";
import ErrorPage from "./Pages/Errors/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<WebPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
