import styled from "styled-components";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { baseColor } from "../../constants/colors";
import React, { useContext, useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import UserContext from "../../contexts/UserContext";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import Loading from "../../components/Loading";

export default function HistoryPage() {
  const { localUser } = useContext(UserContext);
  const [value, setValue] = useState(new Date());
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [history, setHistory] = useState([]);
  const [progressPerDay, setProgressPerDay] = useState([]);
  const habitsDays = useRef([]);

  const calcProgress = function (history) {
    return history.map((d) => {
      const habitsNumber = d.habits.length;
      const habitsDoneNumber = d.habits.filter((h) => h.done).length;
      const dayProgress = parseInt((habitsDoneNumber / habitsNumber) * 100);
      return {
        day: d.day,
        progress: dayProgress,
      };
    });
  };

  useEffect(() => {
    if (history.length > 0) {
      const newProgressPerDay = calcProgress(history);
      setProgressPerDay([...newProgressPerDay]);
      habitsDays.current = newProgressPerDay.map((d) => d.day);
    }
  }, [history]);

  useEffect(() => {
    setIsLoadingPage(true);
    const config = {
      headers: {
        Authorization: `Bearer ${localUser.token}`,
      },
    };
    axios
      .get(`${BASE_URL}/habits/history/daily`, config)
      .then((res) => {
        setHistory([...res.data]);
        setIsLoadingPage(false);
      })
      .catch((err) => {
        alert(err.response.data);
        console.log(err.response);
      });
  }, []);

  function onChange(nextValue) {
    setValue(nextValue);
  }

  function tileClassName({ date, view }) {
    const calendarDate = dayjs(date).format("DD/MM/YYYY");
    if (view === "month") {
      if (habitsDays.current?.includes(calendarDate)) {
        const matchDay = progressPerDay.filter(
          (d) => d.day === calendarDate
        )[0];
        return matchDay.progress === 100 ? "complete" : "incomplete";
      }
    }
    return "";
  }

  return (
    <ContainerHistoryPage>
      <Header />
      <MainHistory>
        <div className="box-title">
          <h2>Histórico</h2>
        </div>
        <section>
          {isLoadingPage ? (
            <Loading />
          ) : (
            <Calendar
              className="calendar"
              onChange={onChange}
              value={value}
              minDate={new Date(2020, 0)}
              maxDate={new Date(2029, 0)}
              minDetail={"year"}
              tileClassName={tileClassName}
            />
          )}
        </section>
      </MainHistory>
      <Menu />
    </ContainerHistoryPage>
  );
}

const ContainerHistoryPage = styled.div`
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
`;

const MainHistory = styled.main`
  height: 100vh;
  background-color: ${baseColor};
  padding: 70px 19px 95px;
  overflow-y: auto;
  .box-title {
    margin: 22px 0 20px;
  }
  .calendar {
    margin: 10vh auto 0;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    /* box-shadow: 0 5px 10px #333; */
  }
  .complete {
    background-color: #8cc654;
    color: #111;
    border-radius: 50%;
  }

  .incomplete {
    background-color: #ea5766;
    color: #111;
    border-radius: 50%;
  }
`;
