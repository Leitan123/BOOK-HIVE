import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Help from "./help";

export default function Layout() {
  const location = useLocation();
  const hideHeaderPaths = ["/register", "/login", "/landing"]; // Hide header for these paths

  return (
    <div className="flex flex-col min-h-screen relative">
      {!hideHeaderPaths.includes(location.pathname) && <Header />}

      <main className="flex-grow flex flex-col">
        <div className="flex-grow">
          <Outlet />
        </div>
      </main>

      {!hideHeaderPaths.includes(location.pathname) && (
        <Footer className="mt-auto" />
      )}

      {/* Persistent Feedback Component */}
      <Help />
    </div>
  );
}
