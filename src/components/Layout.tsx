import { Link, Outlet } from "react-router-dom";
import "../App.css";

function Layout() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <div className="nav-left">
            {/* Стандартты <a> тегін қолдануға болмайды, тек <Link> */}
            <Link to="/" className="brand">StudentPortal</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="nav-right">
            <input className="nav-search" placeholder="Search courses..." aria-label="Search courses" />
            <Link to="/signin" className="btn btn--ghost">Sign in</Link>
            <Link to="/signup" className="btn">Get started</Link>
          </div>
        </div>
      </nav>
      <main className="container">
        {/* Балалар маршруттары осы жерде көрінеді */}
        <Outlet />
      </main>
      <footer className="footer">
        Student Portal 2026
      </footer>
    </>
  );
}

export default Layout;