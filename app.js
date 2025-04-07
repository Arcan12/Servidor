// 1. Importar o módulo express
const express = require('express');

// 2. Criar uma instância do aplicativo Express
const app = express();

// 3. Definir a porta em que o servidor irá escutar
const port = 3000;

// 4. Rota principal
app.get('/', (req, res) => {
    res.send('Olá Mundo!');
});

// 5. Rota para listar usuários
app.get('/usuarios', (req, res) => {
    res.send('Lista de usuários');
});

// 6. Rota para criar um usuário
app.post('/usuarios', (req, res) => {
    res.send('Usuário criado');
});

// 7. Rota para atualizar um usuário
app.put('/usuarios/:id', (req, res) => {
    res.send(`Usuário com ID ${req.params.id} atualizado`);
});

// 8. Rota para deletar um usuário
app.delete('/usuarios/:id', (req, res) => {
    res.send(`Usuário com ID ${req.params.id} deletado`);
});

// 9. Iniciar o servidor
app.listen(port, () => {
    console.log(`App ouvindo na porta ${port}!`);
});