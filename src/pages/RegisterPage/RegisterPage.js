import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { accentColor } from "../../constants/colors";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function register(e) {
    e.preventDefault();
    setIsLoading(true);
    const body = { ...form };
    console.log(body);
    axios
      .post(`${BASE_URL}/auth/sign-up`, body)
      .then((res) => {
        console.log(res);
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
      <Form onSubmit={register}>
        <input
          name="email"
          value={form.email}
          onChange={handleForm}
          type="email"
          placeholder="email"
          disabled={isLoading}
          required
        ></input>
        <input
          name="password"
          value={form.password}
          onChange={handleForm}
          type="password"
          placeholder="senha"
          disabled={isLoading}
          required
        ></input>
        <input
          name="name"
          value={form.name}
          onChange={handleForm}
          placeholder="nome"
          type="text"
          disabled={isLoading}
          required
        ></input>
        <input
          name="image"
          value={form.picture}
          onChange={handleForm}
          type="url"
          placeholder="foto"
          disabled={isLoading}
          required
        ></input>
        <button className="btn" type="submit" disabled={isLoading}>
          {renderButtonLabel()}
        </button>
      </Form>
      <Link to="/">
        <p className="text-accent">Já tem uma conta? Faça login!</p>
      </Link>
    </ContainerRegister>
  );
}

const ContainerRegister = styled.main`
  width: 100%;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .logo {
    margin-top: 65px;
    width: 180px;
  }
  .text-accent {
    color: ${accentColor};
    font-size: 14px;
    line-height: 18px;
    text-decoration: underline;
  }
`;

const Form = styled.form`
  margin: 25px 0;
`;
