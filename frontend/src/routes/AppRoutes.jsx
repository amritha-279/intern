import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import Guru from "../pages/guru";
import Gallery from "../pages/gallery";
import Classes from "../pages/classes";
import Contact from "../pages/contact";
import Register from "../pages/register";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Privacy from "../pages/privacy";
import Terms from "../pages/terms";
import Admin from "../pages/admin";
import Statistics from "../pages/statistics";
import Revenue from "../pages/revenue";
import Messages from "../pages/messages";
import GalleryManager from "../pages/gallerymanager";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/guru" element={<Guru />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/revenue" element={<Revenue />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/gallerymanager" element={<GalleryManager />} />
    </Routes>
  );
}

export default AppRoutes;