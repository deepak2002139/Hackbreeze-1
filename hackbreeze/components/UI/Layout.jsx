import React, { useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { DarkModeContext } from "../../context/DarkModeContext";

const Layout = ({ children }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? `bg-slate-800 text-white` : null}>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
