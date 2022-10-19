import styled from "styled-components";
import { accentColor } from "../../constants/colors";
import Week from "./Week";

export default function AddHabit() {
  return (
    <ContainerAddHabit>
      <input name="addHabit" type={"text"} placeholder="nome do hábito"></input>
      <Week />
      <div className="box-buttons">
        <button className="btn btn-cancel">Cancelar</button>
        <button className="btn btn-save">Salvar</button>
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
