import { useCoreStore } from "../store/store";

const useDataTheme = () => {
  const setTheme = useCoreStore((state) => state.setTheme);

  const setDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
    setTheme("dark");
  };

  const setLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
    setTheme("light");
  };

  const selectedThemeLS = localStorage.getItem("selectedTheme");

  return {
    setDarkMode,
    setLightMode,
    selectedThemeLS,
  };
};

export default useDataTheme;
