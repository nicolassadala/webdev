let texto1 = "Bom";
let texto2 = "Dia";
let texto3 = texto1.concat("",texto2); //juntar variaveis
console.log(texto3);
let texto = "Maçã,Banana,Maracuja";
let parte1 = texto.slice(5,10);  //Recorte da string(cada caractere)
console.log(parte1);
let parte2 = texto.substring(7,13); //
console.log(parte2);
let parte3 = texto.substr(7);
let uper = texto.toUpperCase(5);
console.log(uper);
let lower = texto.toLowerCase();
console.log(lower);
let texto4 = "     Agora é com o trim...    ";//Remover espaços em branco de uma função qualquer
let trim1 = texto4.trim();
console.log(trim1);
let resultado = texto1.repeat(4); //repetição da variavel com numero desejado
console.log(resultado);
let textoAtual = "Faculdade  Fiap TDS";
let textoNovo= textoAtual.replace("Faculdade", "Curso");// alterar string, a primeira a que você quer tirar
console.log(textoNovo);
let texto5 = "Cachorro gato";
let textoNovo1 = texto5.replaceAll(texto5,"cachorro Gato");// altera todas as stings que você deseja
console.log(textoNovo1);
let texto6 = "Por favor, localize no texto";
let index = texto6.indexOf("localize"); //indica a posição que está localizada o começo da string
console.log(index);
let x = 9.656;
x.toExponential(6);    //numero de caracteres atras da virgula que é pedido
console.log(x);