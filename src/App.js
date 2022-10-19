import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import GlobalStyle from "./assets/styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />;
        <Route path="/cadastro" element={<RegisterPage />} />;
        <Route path="/habitos" element={<HabitsPage />} />;
        <Route path="/hoje" element={<TodayPage />} />;
        <Route path="/historico" element={<HistoryPage />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
