import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as C from './styles';
import useAuth from '../../hooks/userAuth'


const Singin = () => {

  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
      if (!email | !senha) {
          setError("Preencha todos os campos");
          return;
      }

      const res = signin(email, senha);
      if (res) {
          setError(res);
          return
      }

      navigate("/home")
  }

  return (
   <C.Container>
      <C.Label>Sistema de Login</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value),setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value),setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button  text="Entrar" onClick={handleLogin}/>
        <C.labelSingin>
          Não tem uma conta?
            <C.Strong>
              <Link to="/siginup"> Registre-se</Link>
            </C.Strong>
        </C.labelSingin>
      </C.Content>
   </C.Container>
  )
}

export default Singin