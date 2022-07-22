import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import * as C from './styles';
import useAuth from '../../hooks/userAuth'

const Singup = () => {

  const [email, setEmail] = useState('');
  const [emailConf, setEmailConf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSingup = () => {
      if (!email | !emailConf | !senha) {
        setError("Preencha todos os campos!");
        return;
      } else if (email !== emailConf) {
          setError("Os e-mails não são iguais!");
          return;
      }

      const res = signup(email,senha);

      if (res) {
          setError(res);
          return;
      }

      alert("Usuário cadastrado com sucesso!")
      navigate("/");
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
          type="email"
          placeholder="Digite seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value),setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua"
          value={senha}
          onChange={(e) => [setSenha(e.target.value),setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button text="Inscrever-se" onClick={handleSingup} />
        <C.labelSingin>
          Já tem uma conta? 
          <C.Strong>
            <Link to="/"> Entre</Link>
          </C.Strong>
        </C.labelSingin>
      </C.Content>
    </C.Container>
  )
}

export default Singup