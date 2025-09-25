const app = require('express')();
const PORT = 3000;

//exercicio 6


//Altura ao quadrado: 1,60 m x 1,60 m = 2,56 m²
// IMC = 70 kg / 2,56 m² = 27,3 kg/m²
// IMC = peso (kg) / (altura (m) x altura (m))


//Classificação do IMC: APENAS MASSA CORPORAL
//Baixo peso: Menos de 18,5 kg/m².
//Peso normal: Entre 18,5 e 24,9 kg/m².
//Sobrepeso: Entre 25 e 29,9 kg/m².
//Obesidade: A partir de 30 kg/m².




async function calculoIMC(peso, altura) {
  const imc = peso / (altura * altura);
  try {

    if (imc < 18.5) {
      return `${imc} Baixo peso`;
    } else if (imc >= 18.5 && imc < 25) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc > 30) {
      return 'Obesidade';
    }
  } catch (error) {
    throw new error(`parametros estão invalidos! Informe numeros ${error}`)
  }
}

app.get('/imc/', async (req, res) => {
  try {
    const { peso, altura } = req.query;
    const resultado = await calculoIMC(peso, altura)
    return res.send(resultado)
  } catch (error) {
    res.status(500)({ erro: error.message });
  }
})

app.use((req, res) => {
  res.status(400).send(`Página não encontrada!`)
})

app.listen(PORT, () => {
  console.log(`Servidor executando em localhost na porta ${PORT}`);
})





