import styled from "styled-components";
import { darkAccentColor } from "../constants/colors";
import logo from "../assets/images/logo-name.png";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Header() {
  const { userData } = useContext(UserContext);
  return (
    <ContainerHeader>
      <img src={logo} className="logo" alt="logo Track It" />
      <img
        src={userData.image}
        alt="Imagem de perfil"
        className="profile-img"
      />
    </ContainerHeader>
  );
}

const ContainerHeader = styled.header`
  width: 100vw;
  height: 70px;
  max-width: 600px;
  background-color: ${darkAccentColor};
  padding: 0 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  .logo {
    height: 28px;
  }
  .profile-img {
    object-fit: cover;
    border-radius: 50%;
    height: 51px;
    width: 51px;
  }
`;
