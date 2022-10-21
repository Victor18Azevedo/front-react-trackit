import styled from "styled-components";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import TodayHabit from "./TodayHabit";
import { baseColor, lightTextColor, goalColor } from "../../constants/colors";
import { useEffect, useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import ProgressContext from "../../contexts/ProgressContext";
import dayjs from "dayjs";
import { WEEK_DAYS_NAME } from "../../constants/weekDays";
import { useNavigate } from "react-router-dom";

export default function TodayPage() {
  const { userData, localUser } = useContext(UserContext);
  const { progress, setProgress } = useContext(ProgressContext);
  const [habitsToday, setHabitsToday] = useState([]);

  const weekDayName = WEEK_DAYS_NAME[dayjs().day()];
  const monthDay = dayjs().date();
  const month = dayjs().month() + 1;

  useEffect(() => {
    refreshPage();
  }, []);

  const refreshPage = function () {
    const config = {
      headers: {
        Authorization: `Bearer ${localUser.token}`,
      },
    };
    axios
      .get(`${BASE_URL}/habits/today`, config)
      .then((res) => {
        setHabitsToday([...res.data]);
        refreshProgress(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err.response.data);
      });
  };

  const refreshProgress = function (habits) {
    const habitsDone = habits.filter((h) => h.done).length;
    if (habits.length > 0) {
      setProgress(parseInt((habitsDone / habits.length) * 100));
    } else {
      setProgress(0);
    }
  };

  const renderInfo = function () {
    return habitsToday.length > 0 ? (
      <p className="habits-goal">{progress}% dos hábitos concluídos</p>
    ) : (
      <p className="habits-goal--no">Nenhum hábito concluído ainda</p>
    );
  };

  return (
    <ContainerTodayPage>
      <Header />
      <MainToday>
        <BoxDay>
          <h2>
            {weekDayName}, {monthDay}/{month}
          </h2>
          {renderInfo()}
        </BoxDay>
        {habitsToday.map((h) => (
          <TodayHabit key={h.id} habit={h} refreshPage={refreshPage} />
        ))}
      </MainToday>
      <Menu />
    </ContainerTodayPage>
  );
}

const ContainerTodayPage = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

const MainToday = styled.main`
  min-height: 100vh;
  padding: 70px 19px;
  background-color: ${baseColor};
`;

const BoxDay = styled.div`
  margin: 22px 0 20px;
  .habits-goal--no {
    color: ${lightTextColor};
  }
  .habits-goal {
    color: ${goalColor};
  }
`;
