import React, { useState } from 'react';
import styled from 'styled-components'; // Importe o styled-components
import SubmitButton from './components/submit';
import Breakline from './components/breakline';
import InputSmallText from './components/InputSmallText'; // Certifique-se de usar o caminho correto
import { handleFormSubmit } from './components/handleFormSubmit'; // Importe a função

// Defina os estilos para os elementos desejados
const Container = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  font-family: 'Arial', sans-serif;
  font-size: 2rem;
  margin-bottom: 20px;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
`;

const Form = styled.form`
  display: inline-block;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  const [message, setMessage] = useState(''); // Estado para controlar a mensagem

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await handleFormSubmit(nome, idade, genero, setNome, setIdade, setGenero);
    
    if (response && response.ok) {
      setMessage('Dados salvos com sucesso!');
      console.log('Dados salvos com sucesso');
      setNome('');
      setIdade('');
      setGenero('');
    } else {
      setMessage('Erro ao salvar os dados.');
    }
  };;

  return (
    <Container>
      <Heading>Cadastro de Pessoa</Heading>
      <Form onSubmit={handleSubmit}>
        <InputSmallText
          label="Nome"
          value={nome}
          onChange={setNome}
        />
        <Breakline/>
        <Breakline/>
        <InputSmallText
          label="Idade"
          value={idade}
          onChange={setIdade}
        />
        <Breakline/>
        <Breakline/>
        <InputSmallText
          label="Gênero"
          value={genero}
          onChange={setGenero}
        />
        <Breakline/>
        <Breakline/>
        <SubmitButton value="Cadastrar"/>
      </Form>
      <p>{message}</p> {/* Exibir a mensagem */}
    </Container>
  );
}

export default App;
