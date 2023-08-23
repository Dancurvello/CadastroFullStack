export async function handleFormSubmit(nome, idade, genero, setNome, setIdade, setGenero) {
    const formData = { nome, idade, genero };
  
    try {
      const response = await fetch('http://localhost:8080/api/salvarPessoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      return response; // Retorna a resposta completa
    } catch (error) {
      console.error('Erro de conexão:', error);
      return null; // Retorna null em caso de erro
    }
  }
  