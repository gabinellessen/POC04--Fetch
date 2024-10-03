fetch('https://api.exemplo.com/dados')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Manipular os dados recebidos
})
.catch(error => {
    console.error('Erro:', error); // Lidar com erros
});
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
