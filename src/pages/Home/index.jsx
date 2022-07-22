import React from 'react'
import * as C from './styles';
import {useNavigate} from 'react-router-dom'
import Button from "../../components/Button";
import useAuth from "../../hooks/userAuth";

const Home = () => {

  const { signout } = useAuth();
  const navigate = useNavigate();


  return (
    <C.Container>
      <C.Title>
        Home
      </C.Title>
      <Button text="Sair" onClick={() => [signout(), navigate("/")]} >Sair</Button>
    </C.Container>
  )
}

export default Home