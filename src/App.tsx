import { Outlet } from "@tanstack/react-router";
import Sidebar from "./components/sidebar/Sidebar";
import { useCoreStore } from "./store/store";

function App() {
  const isSidebarExpanded = useCoreStore((state) => state.isSidebarExpanded);

  return (
    <>
      <div className="main-app">
        <Sidebar />
        <main className={isSidebarExpanded ? "sidebar-expanded" : ""}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
