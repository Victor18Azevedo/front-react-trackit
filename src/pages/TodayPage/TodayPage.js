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

export default function TodayPage() {
  const { userData } = useContext(UserContext);
  const { progress, setProgress } = useContext(ProgressContext);
  const [habitsToday, setHabitsToday] = useState([]);

  const weekDayName = WEEK_DAYS_NAME[dayjs().day()];
  const monthDay = dayjs().date();
  const month = dayjs().month() + 1;

  // TODO:  bug 100%
  const refreshProgress = function () {
    const habitsDone = habitsToday.filter((h) => h.done).length;
    if (habitsToday.length > 0) {
      setProgress((habitsDone / habitsToday.length) * 100);
    } else {
      setProgress(0);
    }
  };
  useEffect(() => {
    refreshProgress();
  }, [habitsToday]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    axios
      .get(`${BASE_URL}/habits/today`, config)
      .then((res) => {
        setHabitsToday([...res.data]);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err.response.data);
      });
  }, []);

  const renderInfo = function () {
    return habitsToday.length > 0 ? (
      <p className="habits-goal">{progress}% dos hábitos concluídos</p>
    ) : (
      <p className="habits-goal--no">Nenhum hábito concluído ainda</p>
    );
  };

  // console.log(habitsToday);

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
          <TodayHabit key={h.id} habit={h} />
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
