import styled from "styled-components";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import AddHabit from "./AddHabit";
import Habits from "./Habits";
import { baseColor } from "../../constants/colors";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";

export default function HabitsPage() {
  const { userData } = useContext(UserContext);
  const [habits, setHabits] = useState([]);
  const [addHabit, setAddHabit] = useState(false);

  const [habitText, setHabitText] = useState("");
  const [habitDays, setHabitDays] = useState([]);
  useEffect(() => {
    refreshHabits();
  }, []);

  const refreshHabits = function () {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    axios
      .get(`${BASE_URL}/habits`, config)
      .then((res) => {
        setHabits([...res.data]);
      })
      .catch((err) => {
        // alert(err.response.data)
        console.log(err.response.data);
      });
  };

  const renderAddHabit = function () {
    return addHabit ? (
      <AddHabit
        setAddHabit={setAddHabit}
        refreshHabits={refreshHabits}
        habitText={habitText}
        setHabitText={setHabitText}
        habitDays={habitDays}
        setHabitDays={setHabitDays}
      />
    ) : null;
  };

  const renderHabits = function () {
    return habits.length > 0 ? (
      <Habits
        habits={habits}
        setHabits={setHabits}
        refreshHabits={refreshHabits}
      />
    ) : (
      <p>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </p>
    );
  };

  return (
    <ContainerHabitsPage>
      <Header />
      <MainHabits>
        <MyHabits>
          <h2>Meus hábitos</h2>
          <button className="btn btn-add" onClick={() => setAddHabit(true)}>
            +
          </button>
        </MyHabits>
        {renderAddHabit()}
        {renderHabits()}
      </MainHabits>
      <Menu />
    </ContainerHabitsPage>
  );
}

const ContainerHabitsPage = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

const MainHabits = styled.main`
  min-height: 100vh;
  padding: 70px 19px;
  background-color: ${baseColor};
`;

const MyHabits = styled.div`
  margin: 22px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn-add {
    width: 40px;
    height: 35px;
    line-height: 35px;
    font-size: 27px;
  }
`;
