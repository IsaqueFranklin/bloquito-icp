import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import BotConfig from "./pages/BotConfig";
import BotAccount from "./pages/bot-account";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/notfound";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Dashboard Layout persistente */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<BotAccount />} />
          <Route path="configbot" element={<BotConfig />} />
        </Route>

        {/* Página de erro */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}