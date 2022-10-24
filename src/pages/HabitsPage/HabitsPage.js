import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AddHabit from "./AddHabit";
import Habits from "./Habits";
import { baseColor } from "../../constants/colors";
import UserContext from "../../contexts/UserContext";
import { useContext, useEffect, useRef, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import Loading from "../../components/Loading";

export default function HabitsPage() {
  const { userData } = useContext(UserContext);
  const [habits, setHabits] = useState([]);
  const [addHabit, setAddHabit] = useState(false);

  const [habitText, setHabitText] = useState("");
  const [habitDays, setHabitDays] = useState([]);

  const [isLoadingPage, setIsLoadingPage] = useState(true);

  useEffect(() => {
    refreshHabits();
  }, []);

  const refreshHabits = function () {
    axios
      .get(`${BASE_URL}/habits`, userData.requestConfig)
      .then((res) => {
        setHabits([...res.data]);
        setIsLoadingPage(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err.response);
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
    if (isLoadingPage) return <Loading />;
    else
      return habits.length > 0 ? (
        // TODO: refact do .map in this component
        <Habits
          habits={habits}
          setHabits={setHabits}
          refreshHabits={refreshHabits}
        />
      ) : (
        <p data-identifier="no-habit-message">
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
          <button
            className="btn btn-add"
            onClick={() => setAddHabit(true)}
            data-identifier="create-habit-btn"
          >
            +
          </button>
        </MyHabits>
        {renderAddHabit()}
        {renderHabits()}
      </MainHabits>
      <Footer />
      {/* <Footer ref={footerRef} /> */}
    </ContainerHabitsPage>
  );
}

const ContainerHabitsPage = styled.div`
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
`;

const MainHabits = styled.main`
  height: 100vh;
  background-color: ${baseColor};
  padding: 70px 19px 95px;
  overflow-y: auto;
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
