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
  const localUser = JSON.parse(localStorage.getItem("localUser"));

  const [userData, setUserData] = useState({
    requestConfig: localUser ? { ...localUser.requestConfig } : undefined,
  });

  useEffect(() => {
    console.log("App");
    if (localUser) {
      setUserData({
        ...localUser,
      });
    }
  }, []);

  const [progress, setProgress] = useState(0);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContext.Provider value={{ userData, setUserData }}>
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
