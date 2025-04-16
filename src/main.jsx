import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./routes/Homepage.jsx";
import Createpage from "./routes/Createpage.jsx";
import Postpage from "./routes/Postpage.jsx";
import Authpage from "./routes/Authpage.jsx";
import Searchpage from "./routes/Searchpage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import ProfilePage from "./routes/ProfilePage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<Createpage />} />
          <Route path="/pin/:id" element={<Postpage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/search" element={<Searchpage />} />
        </Route>
        <Route path="/auth" element={<Authpage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
