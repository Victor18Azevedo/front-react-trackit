import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../../assets/images/check.svg";
import { checkColors, goalColor } from "../../constants/colors";

export default function TodayHabit() {
  return (
    <ContainerTodayHabit>
      <div className="box-text">
        <p className="habit-name">Ler 1 capítulo de livro</p>
        <p className="goal-text">
          Sequência atual: <span className="goal-accent">3 dias</span>
        </p>
        <p className="goal-text">
          Seu recorde: <span className="goal-accent">5 dias</span>
        </p>
      </div>
      <div className="box-check">
        <StyledCheckIcon />
      </div>
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
  .habit-name {
    font-size: 20px;
    word-wrap: break-all;
    line-height: 25px;
  }
  .goal-text {
    font-size: 13px;
    line-height: 16px;
  }
  .box-check {
    width: 69px;
    height: 69px;
    background-color: ${checkColors.unckecked.background};
    border: 1px solid ${checkColors.unckecked.border};
    border-radius: 5px;
    align-self: flex-end;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .goal-accent {
    color: ${goalColor};
  }
`;

const StyledCheckIcon = styled(CheckIcon)`
  height: 28px;
  path {
    fill: #fff;
    stroke-width: 48;
  }
`;
