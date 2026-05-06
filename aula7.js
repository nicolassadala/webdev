//Criamos uma váriavel para armazenar o valor contado//
let contador = 0;

//selecionamos os elementos do HTML que queremos manipular
//Usamos o ID que deinimos la no HTML
const display = document.getElementById("display");
const botao = document.getElementById("btnIncrementar");

//criamos uma função que sera executada no clique
function incrementar(){
    //aumenta o valor da variavel contador em 1
    contador = contador + 1;
    //atualiza o texto que aparece na tela(o paragrafo #display)
    display.innerText = contador;
    //Exibe no console do navegador para fins de depuração
    console.log("O valor atual é " + contador);
}

//adicionamos um "escutador de eventos" ao botão
//ele fica "ouvindo" quando o usuario clica e chama a função incrementar
botao.addEventListener("click", incrementar);