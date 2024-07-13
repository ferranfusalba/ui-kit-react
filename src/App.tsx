import { Outlet } from "@tanstack/react-router";
import { useCoreStore } from "./store/store";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";

function App() {
  const isSidebarExpanded = useCoreStore((state) => state.isSidebarExpanded);

  return (
    <>
      <Header />
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
