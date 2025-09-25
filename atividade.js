const app = require('express')();
const PORT = 3000;

//exercicio 6


//Altura ao quadrado: 1,60 m x 1,60 m = 2,56 m²
// IMC = 70 kg / 2,56 m² = 27,3 kg/m²
// IMC = peso (kg) / (altura (m) x altura (m))


app.get('/imc', (req, res) => {
    const peso = parseFloat(req.query.peso);
    const altura = parseFloat(req.query.altura);

    if (isNaN(peso) || isNaN(altura) || altura <=0){
        return res.status(400).send({erro: `a altura e o peso devem ser maior que zero!`})
}
  


const imc = peso / (altura*altura); 


//Classificação do IMC: APENAS MASSA CORPORAL
//Baixo peso: Menos de 18,5 kg/m².
//Peso normal: Entre 18,5 e 24,9 kg/m².
//Sobrepeso: Entre 25 e 29,9 kg/m².
//Obesidade: A partir de 30 kg/m².

 let classificacao;
  if (imc < 18.5) {
    classificacao = 'Baixo peso';
  } else if (imc >= 18.5 && imc < 25) {
    classificacao = 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    classificacao = 'Sobrepeso';
  } else if (imc >= 30 && imc > 30){
    classificacao = 'Obesidade';
  }

return res.send(${imc} tofixed(2))