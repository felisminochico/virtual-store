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
const corpoDaLoja = window.document.getElementsByTagName("tbody")[0];
const nomeDaLoja = window.document.getElementById("nome-da-loja");
const botaoSalvarEditarLoja = window.document.querySelector("#janela-editar-loja .btn-salvar");
const botaoSalvarAdicionarProduto = window.document.querySelector("#janela-adicionar-produto .btn-salvar");
const botaoSalvarEditarProduto = window.document.querySelector("#janela-editar-produto .btn-salvar");
const botoesSair = window.document.querySelectorAll(".btn-cancelar");
const inputNomeLoja = window.document.getElementById("nome-loja");
const inputNomeProdutoAdd = window.document.getElementById("nome-produto");
const inputPrecoProdutoAdd = window.document.getElementById("preco-produto");
const inputQuantidadeProdutoAdd = window.document.getElementById("quantidade-produto");
const inputNomeProdutoEdit = window.document.getElementById("novo-nome");
const inputQuantidadeProdutoEdit = window.document.querySelector("#nova-quantidade");
const inputPrecoProdutoEdit = window.document.getElementById("novo-preco");
const estadoEditarLoja = window.document.getElementById("estado-editar-loja");
const estadoAdicionarProduto = window.document.getElementById("estado-adicionar-produto");
const estadoEditarProduto = window.document.getElementById("estado-editar-produto");
const anoAtual = window.document.getElementById("ano-atual");
anoAtual.innerHTML = new Date().toLocaleString("pt-AO", {year: "numeric"});

nomeDaLoja.innerHTML = window.localStorage.getItem("nomeLoja") || "Sem Nome";

if((window.localStorage.getItem("vetorProduto") !== null) && (window.localStorage.getItem("vetorPreco") !== null && window.localStorage.getItem("vetorQuantidade") !== null)){
    const resProduto = JSON.parse(window.localStorage.getItem("vetorProduto"));
    const resPreco = JSON.parse(window.localStorage.getItem("vetorPreco"));
    const resQuantidade = JSON.parse(window.localStorage.getItem("vetorQuantidade"));
    const resPrecoTotal = JSON.parse(window.localStorage.getItem("precoTotal"));
    let id = 1;

    for(let c = 0; c < resProduto.length; c++){
        let linha = window.document.createElement("tr");
        const dadoID = window.document.createElement("td");
        id++;
        dadoID.innerHTML = id;
        const dadosProduto = window.document.createElement("td");
        dadosProduto.innerHTML = resProduto[c];
        const dadoPreco = window.document.createElement("td");
        dadoPreco.innerHTML = Number(resPreco[c]).toLocaleString("pt-AO", {style: "currency", currency: "AOA"});
        const dadosQuantidade = window.document.createElement("td");
        dadosQuantidade.innerHTML = resQuantidade[c];
        const dadosPrecoTotal = window.document.createElement("td");
        dadosPrecoTotal.innerHTML = Number(resPrecoTotal[c]).toLocaleString("pt-AO", {style: "currency", currency: "AOA"});
        
        linha.appendChild(dadoID);
        linha.appendChild(dadosProduto);
        linha.appendChild(dadoPreco);
        linha.appendChild(dadosQuantidade);
        linha.appendChild(dadosPrecoTotal);
        corpoDaLoja.appendChild(linha);
    }
}

//Função para fechar todas as janelas
botoesSair.forEach(function(botao){
    botao.addEventListener("click", ()=>{
        janelaEditarLoja.style.display = "none";
        janelaAdicionarProduto.style.display = "none";
        janelaEditarProduto.style.display = "none";
        estadoEditarLoja.innerHTML = "Estado...";
        estadoAdicionarProduto.innerHTML = "Estado...";
        estadoEditarProduto.innerHTML = "Estado...";
    })
})

//Função para mostrar Janela
function mostarJanela(janela, input){
    janela.style.display = "block";
    input.focus();
}

//Função para animação
function animarCaixa(caixa){
    caixa.style.animationName = "aparecer";
    caixa.style.animationDuration = ".5s";
    window.document.body.style.overflow = "hidden";
}

//Evento de clique do Botão Editar Loja
botaoEditarLoja.addEventListener("click", function(){
    mostarJanela(janelaEditarLoja, inputNomeLoja);
    animarCaixa(caixaEditarLoja);
})

//Evento de clique do Botão Adicionar Produto
botaoAdicionarProduto.addEventListener("click", function(){
    mostarJanela(janelaAdicionarProduto, inputNomeProdutoAdd);
    animarCaixa(caixaAdicionarProduto);
})

//Evento de clique do Botão Editar Produto
botaoEditarProduto.addEventListener("click", function(){
    mostarJanela(janelaEditarProduto, inputNomeProdutoEdit);
    animarCaixa(caixaEditarProduto);
})

botaoSalvarAdicionarProduto.addEventListener("click", function(){
    estadoAdicionarProduto.innerHTML = "Aguarde...";
    const promesa = new Promise(function(resolve, reject){
        if((inputNomeProdutoAdd.value.length === 0 || inputPrecoProdutoAdd.value.length === 0) || inputQuantidadeProdutoAdd.value.length === 0){
            reject("Preencha todos os campos.");
        }else if(((inputNomeProdutoAdd.value.length < 3 || inputNomeProdutoAdd.value.length > 14) || (Number(inputPrecoProdutoAdd.value) || Number(inputNomeProdutoAdd.value >= 5000))) < 0 || ((Number(inputQuantidadeProdutoAdd.value) < 0))){
            reject("Produto, Quantidade ou Preço inválido.");
        }else{
            resolve("Dados adicionados com sucesso.");
        }
    }).then((res) =>{
        const vetorID = [1];
        const vetorProduto = JSON.parse(window.localStorage.getItem("vetorProduto")) || [];
        const vetorPreco = JSON.parse(window.localStorage.getItem("vetorPreco")) || [];
        const vetorQuantidade = JSON.parse(window.localStorage.getItem("vetorQuantidade")) || [];
        const precoTotalProduto = JSON.parse(window.localStorage.getItem("precoTotal")) || [];
        vetorProduto.push(inputNomeProdutoAdd.value);
        vetorPreco.push(inputPrecoProdutoAdd.value);
        vetorQuantidade.push(inputQuantidadeProdutoAdd.value);
        precoTotalProduto.push((Number(inputPrecoProdutoAdd.value) * Number(inputQuantidadeProdutoAdd.value)));
        window.localStorage.setItem("vetorProduto", JSON.stringify(vetorProduto));
        window.localStorage.setItem("vetorPreco", JSON.stringify(vetorPreco));
        window.localStorage.setItem("vetorQuantidade", JSON.stringify(vetorQuantidade));
        window.localStorage.setItem("precoTotal", JSON.stringify(precoTotalProduto));
        let id = Number(vetorProduto.length);
        
        for(let c = 0; c < vetorProduto.length; c++){
            let linha = window.document.createElement("tr");
            id++;
            const dadoID = window.document.createElement("td");
            dadoID.innerHTML = id;
            const dadosProduto = window.document.createElement("td");
            dadosProduto.innerHTML = vetorProduto[c];
            const dadoPreco = window.document.createElement("td");
            dadoPreco.innerHTML = Number(vetorPreco[c]).toLocaleString("pt-AO", {style: "currency", currency: "AOA"});
            const dadosQuantidade = window.document.createElement("td");
            dadosQuantidade.innerHTML = vetorQuantidade[c];
            const dadosPrecoTotal = window.document.createElement("td");
            dadosPrecoTotal.innerHTML = Number(precoTotalProduto[c]).toLocaleString("pt-AO", {style: "currency", currency: "AOA"});

            linha.appendChild(dadoID);
            linha.appendChild(dadosProduto);
            linha.appendChild(dadoPreco);
            linha.appendChild(dadosQuantidade);
            linha.appendChild(dadosPrecoTotal);
            corpoDaLoja.appendChild(linha);
        }

        inputNomeProdutoAdd.value = "";
        inputPrecoProdutoAdd.value = "";
        inputQuantidadeProdutoAdd.value = "";

        estadoAdicionarProduto.innerHTML = "<strong style='color: green;'>Tudo certo:</strong> " + res;

    }).catch((erro) =>{
        estadoAdicionarProduto.innerHTML = "<strong style='color: red;'>ERRO:</strong> " + erro;
    })
})

botaoSalvarEditarLoja.addEventListener("click", ()=>{
    estadoEditarLoja.innerHTML = "Aguarde...";
    const promesa = new Promise(function(resolve, reject){
        if(inputNomeLoja.value.length < 3 || inputNomeLoja.value.length > 14){
            reject("Nome inválido");  
        }else{
            resolve("Nome adcionado com sucesso!");
        }  
    }).then((res) =>{
        window.localStorage.setItem("nomeLoja", inputNomeLoja.value);
        nomeDaLoja.innerHTML = window.localStorage.getItem("nomeLoja");
        inputNomeLoja.value = "";
        estadoEditarLoja.innerHTML = `<strong style='color: green;'>Tudo certo:</strong> ${res}`;
    }).catch((erro)=>{
        estadoEditarLoja.innerHTML = `<strong style='color: red;'>ERRO:</strong> ${erro}`;
    })
})

botaoSalvarEditarProduto.addEventListener("click", function(){
    alert("Função não disponível...");
})