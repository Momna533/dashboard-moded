import "./App.css";
import useLocalStorage from "use-local-storage";
import Theme from "./Theme";
import Home from "./Screens/Home/Home";
import FilterCategory from "./Screens/FilterCategory/FilterCategory";
import { Routes, Route } from "react-router-dom";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <>
      <div className="app" data-theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FilterCategory" element={<FilterCategory />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
