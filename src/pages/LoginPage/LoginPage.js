import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { accentColor } from "../../constants/colors";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function login(e) {
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
    <ContainerLogin>
      <img src={logo} className="logo" alt="Logo Track It" />
      <Form onSubmit={login}>
        <input
          name="email"
          value={form.email}
          onChange={handleForm}
          placeholder="email"
          type="email"
        ></input>
        <input
          name="password"
          value={form.password}
          onChange={handleForm}
          type="password"
          placeholder="senha"
        ></input>
        <input className="btn" type="submit" value="Entrar"></input>
      </Form>
      <Link to="/cadastro">
        <p className="text-accent">Não tem uma conta? Cadastre-se!</p>
      </Link>
    </ContainerLogin>
  );
}

const ContainerLogin = styled.main`
  width: 100vw;
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
