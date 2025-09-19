const express = require('express');
const app = express();
const port = 3000;


app.get('/soma/:numUm/:numDois', (req, res) => {
    const numUm = parseFloat(req.params.numUm);
    const numDois = parseFloat(req.params.numDois);

    if (isNaN(numUm) || isNaN(numDois)) {
        return res.status(400).send('Os parâmetros numUm e numDois devem ser números válidos.');
    }

    const resultado = numUm + numDois;
    return res.send(`Resultado da soma: ${resultado}`);
});


app.get('/subtrai/:numUm/:numDois', (req, res) => {
    const numUm = parseFloat(req.params.numUm);
    const numDois = parseFloat(req.params.numDois);

    if (isNaN(numUm) || isNaN(numDois)) {
        return res.status(400).send('Os parâmetros numUm e numDois devem ser números válidos.');
    }

    const resultado = numUm - numDois;
    return res.send(`Resultado da subtração: ${resultado}`);
});


app.get('/multiplica/:numUm/:numDois', (req, res) => {
    const numUm = parseFloat(req.params.numUm);
    const numDois = parseFloat(req.params.numDois);

    if (isNaN(numUm) || isNaN(numDois)) {
        return res.status(400).send('Os parâmetros numUm e numDois devem ser números válidos.');
    }

    const resultado = numUm * numDois;
    return res.send(`Resultado da multiplicação: ${resultado}`);
});


app.get('/divide/:numUm/:numDois', (req, res) => {
    const numUm = parseFloat(req.params.numUm);
    const numDois = parseFloat(req.params.numDois);

    if (isNaN(numUm) || isNaN(numDois)) {
        return res.status(400).send('Os parâmetros numUm e numDois devem ser números válidos.');
    }

    if (numDois === 0) {
        return res.status(400).send('Erro: Não é possível dividir por zero.');
    }

    const resultado = numUm / numDois;
    return res.send(`Resultado da divisão: ${resultado}`);
});



app.listen(port, () => {
    console.log(`Servidor a escutar na porta ${port}`);
});