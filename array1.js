let cores = ["azul", "rosa"];
//adiciona elemento na array
cores.push("vermelho");
console.log(cores);
//Remove o ultimo elemento da array
cores.pop();
console.log(cores);

let numeros = [1,2,3,4];
//exercer função na array
numeros.forEach(numero => {
    console.log(numero);
});

//percorre array e retorna um novo array com os valores transformados
let dobrados = numeros.map(numero => numero * 2);
console.log(dobrados);

let numeros1 = [1,2,3,4,5,10,20,30,40,50];
//retorna apenas o que é filtrado da array
let maioresQueDez = numeros1.filter(numero => numero > 10);
console.log(maioresQueDez);

const numeros2 = [1,2,3];
//criando uma cópia usando o spread
const copia = [...numeros2];
console.log("original: " , numeros2);
console.log("Cópia: ",copia);

const lista1 = [1,2];
const lista2 = [3,4];

//unindo as arrays com spread

const listaCompleta = [...lista1,...lista2];

console.log(listaCompleta);


