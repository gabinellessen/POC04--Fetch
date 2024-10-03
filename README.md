# POC04-Fetch
## Resumo: 
 Essa POC têm como finalidade explicar como usar de forma plena o método assíncrono Fetch do JavaScript.
 O método assíncrono fetch em JavaScript é usado para fazer requisições HTTP de forma simples e eficiente. Ele retorna uma Promise que resolve para a resposta da requisição. Aqui está um resumo de como utilizá-lo:
# Passos Básicos para Usar `fetch`

## Fazer uma Requisição
Use o método `fetch` passando a URL do recurso que você deseja buscar.

```javascript
fetch('https://api.exemplo.com/dados')
  .then(response => {
    // Processar a resposta
  })
  .catch(error => {
    // Lidar com erros
  });
```

## Processar a Resposta
A resposta da requisição é um objeto `Response`. Para obter os dados, você pode usar métodos como `response.json()` para converter a resposta em JSON.

```javascript
fetch('https://api.exemplo.com/dados')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Manipular os dados recebidos
  })
  .catch(error => {
    console.error('Erro:', error); // Lidar com erros
  });
```

## Verificar a Resposta
É importante verificar se a resposta foi bem-sucedida antes de processar os dados.

```javascript
fetch('https://api.exemplo.com/dados')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Manipular os dados recebidos
  })
  .catch(error => {
    console.error('Erro:', error); // Lidar com erros
  });
```

# Usando `async/await`
Você também pode usar `async/await` para tornar o código mais legível:

```javascript
async function buscarDados() {
  try {
    const response = await fetch('https://api.exemplo.com/dados');
    if (!response.ok) {
      throw new Error('Erro na requisição: ' + response.statusText);
    }
    const data = await response.json();
    console.log(data); // Manipular os dados recebidos
  } catch (error) {
    console.error('Erro:', error); // Lidar com erros
  }
}

buscarDados();
```

# Conclusão
 O método `fetch` é uma maneira poderosa e flexível de fazer requisições HTTP em JavaScript, facilitando a comunicação com APIs e a manipulação de dados de forma assíncrona.
 
- **`fetch(url)`**: Faz a requisição para a URL especificada.
- **`.then(response => response.json())`**: Converte a resposta para JSON.
- **`.catch(error => console.error('Erro:', error))`**: Lida com erros na requisição.

