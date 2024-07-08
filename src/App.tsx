import { Outlet } from "@tanstack/react-router";
import Navbar from "./components/sidebar/Sidebar";
import { useCoreStore } from "./store/store";

function App() {
  const isNavbarExpanded = useCoreStore((state) => state.isNavbarExpanded);

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
