import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { accentColor } from "../../constants/colors";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    picture: "",
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function register(e) {
    e.preventDefault();
    // axios.post(`${BASE_URL}/seats/book-many`, body)
    //     .then(res => {
    //         setSuccessInfo(info)
    //         setSelectedSeats([])
    //         navigate("/sucesso")
    //     })
    //     .catch(err => alert(err.response.data))
  }

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
        ></input>
        <input
          name="password"
          value={form.password}
          onChange={handleForm}
          type="password"
          placeholder="senha"
        ></input>
        <input
          name="name"
          value={form.name}
          onChange={handleForm}
          placeholder="nome"
          type="text"
        ></input>
        <input
          name="picture"
          value={form.picture}
          onChange={handleForm}
          type="url"
          placeholder="foto"
        ></input>
        <input className="btn" type="submit" value="Cadastrar"></input>
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
