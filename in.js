//Atividade Prática: Criando uma página web simples - JavaScript

//Comandos de interação com botão
let botao = document.querySelector("#botao");
botao.addEventListener("click",e =>
{
    document.getElementById("texto").innerHTML = "Boas Vindas!!"; 
});