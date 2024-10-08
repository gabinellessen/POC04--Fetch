# POC04-Fetch
## Resumo
Esta POC tem como objetivo explicar o uso do método assíncrono `fetch` em JavaScript, que permite fazer requisições HTTP de forma simples e eficiente, retornando uma **Promise** para o processamento da resposta.

## Passos Básicos para Usar `fetch`

### Fazer uma Requisição
Chame o método `fetch`, passando a URL do recurso que você deseja buscar:

```javascript
fetch('https://api.exemplo.com/dados')
  .then(response => {
    // Processar a resposta
  })
  .catch(error => {
    // Lidar com erros
  });
```

### Processar a Resposta
A resposta da requisição é um objeto `Response`. Para obter os dados, você pode usar métodos como `response.json()` para convertê-los em JSON:

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

### Verificar a Resposta
É importante verificar se a resposta foi bem-sucedida antes de processar os dados:

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

### Usando `async/await`
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

## Exemplo Prático Usando `fetch`

Suponha que você queira buscar dados de uma API pública, como a [JSONPlaceholder](https://jsonplaceholder.typicode.com/), que simula dados de usuários:

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) { 
      throw new Error('Erro na requisição: ' + response.status);
    }
    return response.json();  
  })
  .then(data => {
    console.log(data); // Exibe os dados no console
  })
  .catch(error => {
    console.error('Erro:', error); // Exibe um erro no console se algo falhar
  });
```

Este exemplo realiza uma requisição GET, converte a resposta para JSON, manipula os dados obtidos e lida com possíveis erros.

## Conclusão
O `fetch` é uma maneira poderosa e flexível de fazer requisições HTTP em JavaScript, facilitando a comunicação com APIs e a manipulação de dados de forma assíncrona. Para resumir:
- **`fetch(url)`**: Faz a requisição para a URL especificada.
- **`.then(response => response.json())`**: Converte a resposta para JSON.
- **`.catch(error => console.error('Erro:', error))`**: Lida com erros na requisição.
