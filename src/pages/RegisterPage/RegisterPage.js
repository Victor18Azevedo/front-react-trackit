import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { accentColor } from "../../constants/colors";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../contexts/UserContext";

export default function RegisterPage() {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  useEffect(() => {
    if (userData.isLogged) {
      navigate("/hoje");
    }
  }, [userData]);

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function register(e) {
    e.preventDefault();
    setIsLoading(true);
    const body = { ...form };
    axios
      .post(`${BASE_URL}/auth/sign-up`, body)
      .then((res) => {
        setForm({
          email: "",
          name: "",
          image: "",
          password: "",
        });
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setIsLoading(false);
      });
  }

  const renderButtonLabel = function () {
    return isLoading ? (
      <ThreeDots
        height="60"
        width="60"
        radius="7"
        color="#FFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    ) : (
      "Cadastro"
    );
  };

  return (
    <ContainerRegister>
      <img src={logo} className="logo" alt="Logo Track It" />
      <form onSubmit={register}>
        <input
          name="email"
          value={form.email}
          onChange={handleForm}
          type="email"
          placeholder="email"
          disabled={isLoading}
          required
          data-identifier="input-email"
        ></input>
        <input
          name="password"
          value={form.password}
          onChange={handleForm}
          type="password"
          placeholder="senha"
          disabled={isLoading}
          required
          data-identifier="input-password"
        ></input>
        <input
          name="name"
          value={form.name}
          onChange={handleForm}
          placeholder="nome"
          type="text"
          disabled={isLoading}
          required
          data-identifier="input-name"
        ></input>
        <input
          name="image"
          value={form.picture}
          onChange={handleForm}
          type="url"
          placeholder="foto"
          disabled={isLoading}
          required
          data-identifier="input-photo"
        ></input>
        <button className="btn" type="submit" disabled={isLoading}>
          {renderButtonLabel()}
        </button>
      </form>
      <Link to="/" data-identifier="back-to-login-action">
        <p className="text-accent">Já tem uma conta? Faça login!</p>
      </Link>
    </ContainerRegister>
  );
}

const ContainerRegister = styled.main`
  width: 100vw;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  .logo {
    width: 180px;
  }
  .text-accent {
    color: ${accentColor};
    font-size: 14px;
    line-height: 18px;
    text-decoration: underline;
  }
`;
