import React from "react";
import "../styles/Login.css";

export default function LoginLayout({ children }) {
  return (
    <div className="login-bg min-h-screen w-screen overflow-x-hidden">
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

