import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

const DarkModeButton = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  console.log(darkMode);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <button
      className="p-2 rounded-md shadow-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none"
      onClick={toggleDarkMode}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
export default DarkModeButton;
