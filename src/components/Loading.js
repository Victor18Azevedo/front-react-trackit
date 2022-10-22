import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { accentColor } from "../constants/colors";

export default function Loading() {
  return (
    <ContainerLoading>
      <div>
        <ThreeDots
          height="100"
          width="100"
          radius="10"
          color={accentColor}
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </ContainerLoading>
  );
}

const ContainerLoading = styled.main`
  width: 100px;
  margin: 0 auto;
`;
