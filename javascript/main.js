// alert("Olá, Mundo! JavaScript");
const janelaEditarLoja = window.document.getElementById("janela-editar-loja");
const janelaAdicionarProduto = window.document.getElementById("janela-adicionar-produto");
const janelaEditarProduto = window.document.getElementById("janela-editar-produto");
const caixaEditarLoja = window.document.querySelector("#janela-editar-loja .caixa");
const caixaAdicionarProduto = window.document.querySelector("#janela-adicionar-produto .caixa");
const caixaEditarProduto = window.document.querySelector("#janela-editar-produto .caixa");
const botaoEditarLoja = window.document.querySelector("#botao-editar-loja");
const botaoAdicionarProduto = window.document.querySelector("#botao-adicionar-produto");
const botaoEditarProduto = window.document.querySelector("#botao-editar-produto");
const nomeDaLoja = window.document.getElementById("nome-da-loja");
const botaoSalvarEditarLoja = window.document.querySelector("#janela-editar-loja .btn-salvar");
const botaoSalvarAdicionarProduto = window.document.querySelector("#janela-adicionar-produto .btn-salvar");
const botaoSalvarEditarProduto = window.document.querySelector("#janela-editar-produto .btn-salvar");
const inputNomeLoja = window.document.getElementById("nome-loja");
const inputNomeProdutoAdd = window.document.getElementById("nome-produto");
const inputPrecoProdutoAdd = window.document.getElementById("preco-produto");
const inputQuantidadeProdutoAdd = window.document.getElementById("quantidade-produto");
const inputNomeProdutoEdit = window.document.getElementById("novo-nome");
const inputQuantidadeProdutoEdit = window.document.querySelector("#nova-quantidade");
const inputPrecoProdutoEdit = window.document.getElementById("novo-preco");
const anoAtual = window.document.getElementById("ano-atual");
anoAtual.innerHTML = new Date().toLocaleString("pt-AO", {year: "numeric"});

//Função para mostrar Janela
function mostarJanela(janela){
    janela.style.display = "block";
}

//Função para animação
function animarCaixa(caixa){
    caixa.style.animationName = "aparecer";
    caixa.style.animationDuration = ".5s";
    window.document.body.style.overflow = "hidden";
}

//Evento de clique do Botão Editar Loja
botaoEditarLoja.addEventListener("click", function(){
    mostarJanela(janelaEditarLoja);
    animarCaixa(caixaEditarLoja);
})

//Evento de clique do Botão Adicionar Produto
botaoAdicionarProduto.addEventListener("click", function(){
    mostarJanela(janelaAdicionarProduto);
    animarCaixa(caixaAdicionarProduto);
})

//Evento de clique do Botão Editar Produto
botaoEditarProduto.addEventListener("click", function(){
    mostarJanela(janelaEditarProduto);
    animarCaixa(caixaEditarProduto);
})

botaoSalvarAdicionarProduto.addEventListener("click", function(){
    alert("Função de Salvar Adicionar Produto");
})

botaoSalvarEditarLoja.addEventListener("click", ()=>{
    window.localStorage.setItem("nomeLoja", inputNomeLoja.value);
    nomeDaLoja.innerHTML = window.localStorage.getItem("nomeLoja");
})

botaoSalvarEditarProduto.addEventListener("click", function(){
    alert("Função de Salvar Editar Produto");
})

// console.log(inputNomePro);