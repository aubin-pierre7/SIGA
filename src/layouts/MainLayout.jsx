import { Link } from "react-router-dom";

function MainLayout({ children }) {
  return (
    <div>
      <header style={{ padding: "10px", background: "#eee" }}>
        <h2>Système d’Archive Numérique</h2>

        <nav>
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/documents">Documents</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
