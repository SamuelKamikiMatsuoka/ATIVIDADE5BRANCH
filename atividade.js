const app = require('express')();
const PORT = 3000;

// exercício 4
app.get('/ano/:ano', (req, res) => {
    const ano = parseInt(req.params.ano, 10);
  
    if (isNaN(ano)) {
      return res.status(400).send('Erro: O ano fornecido não é um número válido.');
    }
  
    const anoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  
    if (anoBissexto) {
      return res.status(200).send(`O ano ${ano} é bissexto`);
    } else {
      return res.status(200).send(`O ano ${ano} não é bissexto`);
    }
  });

// rota para erro 404 quando a página não for encontrada em relação a URL
app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost na porta ${PORT}`);
});