import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import { Home, CreatePost } from "./pages/Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <main className="sm:p-8 px-4 py-8 w-full  bg-[#000] ">
        {/*bg-[#f9fafe] */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
