import {
    Routes, Route
  } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
import { ProfilePage } from "../pages/ProfilePage";

  
export const AppRouter = () => {
return (
      <Routes>
        <Route path="/" element={<LoginPage />}/> {/* 👈 Renders at /app/ */}
        <Route path="/sign-up" element={<SignupPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
      </Routes>
  );
};
