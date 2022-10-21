import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import GlobalStyle from "./assets/styles/GlobalStyle";
import UserContext from "./contexts/UserContext";
import ProgressContext from "./contexts/ProgressContext";

function App() {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    image: "",
    email: "",
    password: "",
    token: "",
  });
  const [progress, setProgress] = useState(0);

  const localUser = JSON.parse(localStorage.getItem("localUser"));

  useEffect(() => {
    if (localUser) {
      setUserData(localUser);
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContext.Provider value={{ userData, setUserData, localUser }}>
        <ProgressContext.Provider value={{ progress, setProgress }}>
          <Routes>
            <Route path="/" element={<LoginPage />} />;
            <Route path="/cadastro" element={<RegisterPage />} />;
            <Route path="/habitos" element={<HabitsPage />} />;
            <Route path="/hoje" element={<TodayPage />} />;
            <Route path="/historico" element={<HistoryPage />} />;
          </Routes>
        </ProgressContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
