import UserContext from "../../contexts/UserContext";
import { BASE_URL } from "../../constants/urls";
import {
  sequenceTextColor,
  checkColors,
  uncheckColors,
} from "../../constants/colors";
import { ReactComponent as CheckIcon } from "../../assets/images/check.svg";
import { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function HabitTodayCard({
  habit,
  refreshPage,
  isLoadingList,
  setIsLoadingList,
}) {
  const { userData } = useContext(UserContext);
  const [isDone, setIsDone] = useState(habit.done);

  const handleCheck = function () {
    if (!isLoadingList) {
      setIsLoadingList(true);
      setIsDone(!habit.done);
      const body = {};
      const URL = `${BASE_URL}/habits/${habit.id}/${
        habit.done ? "uncheck" : "check"
      }`;
      axios
        .post(URL, body, userData.requestConfig)
        .then((res) => {
          refreshPage();
        })
        .catch((err) => {
          alert(err.response.data.message);
          console.log(err.response.data);
        });
    }
  };

  const checkSequenceAccent = function () {
    if (
      (habit.highestSequence !== 0) &
      (habit.currentSequence === habit.highestSequence)
    ) {
      return "sequence-accent";
    }
    return "";
  };

  return (
    <ContainerTodayHabit>
      <div className="box-text" data-identifier="today-infos">
        <p className="habit-name">{habit.name}</p>
        <p className="sequence-text">
          Sequência atual:{" "}
          <span className={habit.done ? "sequence-accent" : ""}>
            {habit.currentSequence} dias
          </span>
        </p>
        <p className="sequence-text">
          Seu recorde:{" "}
          <span className={checkSequenceAccent()}>
            {habit.highestSequence} dias
          </span>
        </p>
      </div>
      <CheckBox
        styleIsDone={isDone}
        onClick={handleCheck}
        data-identifier="done-habit-btn"
        disabled={isLoadingList}
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
  .sequence-text {
    font-size: 13px;
    line-height: 16px;
  }
  .sequence-accent {
    color: ${sequenceTextColor};
  }
`;

const CheckBox = styled.button`
  width: 69px;
  height: 69px;
  background-color: ${(props) =>
    props.styleIsDone ? checkColors.background : uncheckColors.background};
  border: 1px solid
    ${(props) =>
      props.styleIsDone ? checkColors.border : uncheckColors.border};
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
