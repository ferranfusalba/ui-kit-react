import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/navbar/Navbar";
import { useCoreStore } from "./store/store";

function App() {
  const isNavbarExpanded = useCoreStore((state) => state.isNavbarExpanded);
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const darkMode = darkModeMediaQuery.matches;
  // console.log("darkMode", darkMode);

  return (
    <>
      <div className="main-app">
        <Navbar />
        <main className={isNavbarExpanded ? "navbar-expanded" : ""}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
