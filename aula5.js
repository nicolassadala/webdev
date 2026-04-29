//criando uma data com o momento atual
const dataAtual = new Date();

//Exibe a data completa no console
console.log(dataAtual);

//Mostra a data manipulada
console.log(dataAtual.getDate());

//Visualizar somente o mês
console.log(dataAtual.getMonth()+1);

//Pegando ano completo
console.log(dataAtual.getFullYear());

//Pegando horas, minutos e segundos
console.log(dataAtual.getHours());
console.log(dataAtual.getMinutes());
console.log(dataAtual.getSeconds());

const data = new Date();

//criando uma variavel formatada manualmente
const dataFormatada = data.getDate()+" / "+(data.getMonth()+1)+" / "+data.getFullYear();
console.log("Data formatada: ", dataFormatada);