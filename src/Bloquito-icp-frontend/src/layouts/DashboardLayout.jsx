import { Outlet, Link } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <nav style={{ width: "250px", padding: "20px", background: "#f4f4f4" }}>
        <h2>Dashboard</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Meus servers</Link></li>
          <li><Link to="/dashboard/configbot">Configurar bot</Link></li>
          <li><Link to="/logout">Sair</Link></li>
        </ul>
      </nav>

      {/* Conteúdo da página */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}