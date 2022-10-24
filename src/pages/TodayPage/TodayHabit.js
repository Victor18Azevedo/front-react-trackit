import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../../assets/images/check.svg";
import { goalColor } from "../../constants/colors";
import { BASE_URL } from "../../constants/urls";
import UserContext from "../../contexts/UserContext";

export default function TodayHabit({ habit, refreshPage }) {
  const { userData } = useContext(UserContext);
  const [isDone, setIsDone] = useState(habit.done);

  const handleCheck = function () {
    setIsDone(!habit.done);
    const body = {};
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const URL = `${BASE_URL}/habits/${habit.id}/${
      habit.done ? "uncheck" : "check"
    }`;
    axios
      .post(URL, body, config)
      .then((res) => {
        refreshPage();
        // console.log(res);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const checkAccent = function () {
    if (
      (habit.highestSequence !== 0) &
      (habit.currentSequence === habit.highestSequence)
    ) {
      return "goal-accent";
    }
    return "";
  };

  return (
    <ContainerTodayHabit>
      <div className="box-text" data-identifier="today-infos">
        <p className="habit-name">{habit.name}</p>
        <p className="goal-text">
          Sequência atual:{" "}
          <span className={habit.done ? "goal-accent" : ""}>
            {habit.currentSequence} dias
          </span>
        </p>
        <p className="goal-text">
          Seu recorde:{" "}
          <span className={checkAccent()}>{habit.highestSequence} dias</span>
        </p>
      </div>
      <CheckBox
        styleIsDone={isDone}
        onClick={handleCheck}
        data-identifier="done-habit-btn"
      >
        <StyledCheckIcon />
      </CheckBox>
    </ContainerTodayHabit>
  );
}

const ContainerTodayHabit = styled.div`
  width: 100%;
  padding: 13px 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  .habit-name {
    font-size: 20px;
    word-wrap: break-all;
    line-height: 25px;
  }
  .goal-text {
    font-size: 13px;
    line-height: 16px;
  }
  .goal-accent {
    color: ${goalColor};
  }
`;

const CheckBox = styled.button`
  width: 69px;
  height: 69px;
  // TODO: change colors using dictionary. put conde in component
  background-color: ${(props) => (props.styleIsDone ? "#8FC549" : "#EBEBEB")};
  border: 1px solid ${(props) => (props.styleIsDone ? "#8FC549" : "#E7E7E7")};
  border-radius: 5px;
  align-self: flex-end;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCheckIcon = styled(CheckIcon)`
  height: 28px;
  path {
    fill: #fff;
    stroke-width: 48;
  }
`;
