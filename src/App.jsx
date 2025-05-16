import React from "react";
import ScrollToTop from "./ScrollToTop";
import WebPage from "./Pages/HomePage/Home";
import ErrorPage from "./Pages/Errors/Error";
import SharedComponent from "./SharedComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SharedComponent />}>
          <Route index element={<WebPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
