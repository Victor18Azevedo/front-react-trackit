import styled from "styled-components";
import { accentColor } from "../../constants/colors";
import Week from "./Week";
import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { ThreeDots } from "react-loader-spinner";

export default function AddHabit({ setAddHabit, habits, setHabits }) {
  const { userData } = useContext(UserContext);
  const [habitText, setHabitText] = useState("");
  const [habitDays, setHabitDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const postHabit = function () {
    const body = {
      name: habitText,
      days: habitDays,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/habits`, body, config)
      .then((res) => {
        setHabits([...habits, res.data]);
        setAddHabit(false);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        setIsLoading(false);
      });
  };

  const renderButtonLabel = function () {
    return isLoading ? (
      <ThreeDots
        height="40"
        width="40"
        radius="7"
        color="#FFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    ) : (
      "Salvar"
    );
  };

  return (
    <ContainerAddHabit>
      <input
        name="habitText"
        value={habitText}
        onChange={(e) => setHabitText(e.target.value)}
        type={"text"}
        placeholder="nome do hábito"
      ></input>
      <Week habitDays={habitDays} setHabitDays={setHabitDays} />
      <div className="box-buttons">
        <button className="btn btn-cancel" onClick={() => setAddHabit(false)}>
          Cancelar
        </button>
        <button className="btn btn-save" onClick={postHabit}>
          {renderButtonLabel()}
        </button>
      </div>
    </ContainerAddHabit>
  );
}

const ContainerAddHabit = styled.div`
  width: 100%;
  padding: 18px;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 29px;
  input {
    width: 100%;
  }
  .box-buttons {
    margin-top: 29px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
  }
  .btn-cancel {
    width: 84px;
    height: 35px;
    background-color: #fff;
    color: ${accentColor};
    font-size: 16px;
  }
  .btn-save {
    width: 84px;
    height: 35px;
    font-size: 16px;
  }
`;
