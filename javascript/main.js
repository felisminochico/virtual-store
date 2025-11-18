//localStorage.clear()
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
const inputIDProdutoEdit = window.document.getElementById("id");
const inputNomeProdutoEdit = window.document.getElementById("novo-nome");
const inputQuantidadeProdutoEdit = window.document.querySelector("#nova-quantidade");
const inputPrecoProdutoEdit = window.document.getElementById("novo-preco");
const estadoEditarLoja = window.document.getElementById("estado-editar-loja");
const estadoAdicionarProduto = window.document.getElementById("estado-adicionar-produto");
const estadoEditarProduto = window.document.getElementById("estado-editar-produto");
const todosInputs = window.document.querySelectorAll(".inputs input");
const valorTotalProdutos = window.document.getElementById("valor-total-produtos");
const anoAtual = window.document.getElementById("ano-atual");
anoAtual.innerHTML = new Date().toLocaleString("pt-AO", {year: "numeric"});

nomeDaLoja.innerHTML = window.localStorage.getItem("nomeLoja") || "Sem Nome";

const vetorID = JSON.parse(window.localStorage.getItem("vetorIDProdutos")) || [1];
const vetorProduto = JSON.parse(window.localStorage.getItem("vetorProduto")) || ["Produto"];
const vetorPreco = JSON.parse(window.localStorage.getItem("vetorPreco")) || [0];
const vetorQuantidade = JSON.parse(window.localStorage.getItem("vetorQuantidade")) || [0];
const precoTotalProduto = JSON.parse(window.localStorage.getItem("precoTotal")) || [0];
valorTotalProdutos.innerHTML = Number(window.localStorage.getItem("valorTotalProdutos")) || 0;

if((window.localStorage.getItem("vetorProduto") !== null && window.localStorage.getItem("valorTotalProdutos") !== null) && (window.localStorage.getItem("vetorPreco") !== null && window.localStorage.getItem("vetorQuantidade") !== null)){
    const resProduto = JSON.parse(window.localStorage.getItem("vetorProduto"));
    const resPreco = JSON.parse(window.localStorage.getItem("vetorPreco"));
    const resQuantidade = JSON.parse(window.localStorage.getItem("vetorQuantidade"));
    const resPrecoTotal = JSON.parse(window.localStorage.getItem("precoTotal"));
    const vetorID = JSON.parse(window.localStorage.getItem("vetorIDProdutos"));
    let valorTotalProd = Number(window.localStorage.getItem("valorTotalProdutos"));

    for(let c = 0; c < resProduto.length; c++){
        let linha = window.document.createElement("tr");
        const dadoID = window.document.createElement("td");
        dadoID.innerHTML = vetorID[c];
        const dadosProduto = window.document.createElement("td");
        dadosProduto.innerHTML = resProduto[c];
        const dadoPreco = window.document.createElement("td");
        dadoPreco.innerHTML = Number(resPreco[c]).toLocaleString("pt-AO") + " Kzs";
        const dadosQuantidade = window.document.createElement("td");
        dadosQuantidade.innerHTML = resQuantidade[c];
        const dadosPrecoTotal = window.document.createElement("td");
        dadosPrecoTotal.innerHTML = Number(resPrecoTotal[c]).toLocaleString("pt-AO") + " Kzs";
        
        linha.appendChild(dadoID);
        linha.appendChild(dadosProduto);
        linha.appendChild(dadoPreco);
        linha.appendChild(dadosQuantidade);
        linha.appendChild(dadosPrecoTotal);
        corpoDaLoja.appendChild(linha);
    }
    valorTotalProdutos.innerHTML = Number(valorTotalProd).toLocaleString("pt-AO") + " Kzs";
}else{
    for(let c = 0; c < vetorProduto.length; c++){
        let linha = window.document.createElement("tr");
        const dadoID = window.document.createElement("td");
        dadoID.innerHTML = vetorID[c];
        const dadosProduto = window.document.createElement("td");
        dadosProduto.innerHTML = vetorProduto[c];
        const dadoPreco = window.document.createElement("td");
        dadoPreco.innerHTML = Number(vetorPreco[c]).toLocaleString("pt-AO") + " Kzs";
        const dadosQuantidade = window.document.createElement("td");
        dadosQuantidade.innerHTML = vetorQuantidade[c];
        const dadosPrecoTotal = window.document.createElement("td");
        dadosPrecoTotal.innerHTML = (Number(vetorPreco[c]) * Number(vetorQuantidade[c])).toLocaleString("pt-AO") + " Kzs";

        linha.appendChild(dadoID);
        linha.appendChild(dadosProduto);
        linha.appendChild(dadoPreco);
        linha.appendChild(dadosQuantidade);
        linha.appendChild(dadosPrecoTotal);
        corpoDaLoja.appendChild(linha);
    }
    valorTotalProdutos.innerHTML = (Number(vetorPreco[0]) * Number(vetorQuantidade[0])).toLocaleString("pt-AO") + " Kzs"
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
        window.document.body.style.overflow = "auto";
    })
})

todosInputs.forEach((input) =>{
    input.addEventListener("input", () =>{
        estadoAdicionarProduto.innerHTML = "Estado...";
        estadoEditarLoja.innerHTML = "Estado...";
        estadoEditarProduto.innerHTML = "Estado...";
    })
})

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
    estadoAdicionarProduto.innerHTML = "Aguarde...";
    const promesa = new Promise(function(resolve, reject){
        if((inputNomeProdutoAdd.value.length === 0 || inputPrecoProdutoAdd.value.length === 0) || inputQuantidadeProdutoAdd.value.length === 0){
            reject("Preencha todos os campos.");
        }else if(((inputNomeProdutoAdd.value.length < 3 || inputNomeProdutoAdd.value.length > 14) || (Number(inputPrecoProdutoAdd.value) < 50 || Number(inputPrecoProdutoAdd.value > 5000))) || ((Number(inputQuantidadeProdutoAdd.value) < 0 || Number(inputQuantidadeProdutoAdd.value) > 100))){
            reject("Produto, Quantidade ou Preço inválido.");
        }else{
            resolve(`Produto ${inputNomeProdutoAdd.value} adicionado com sucesso`);
        }
    }).then((res) =>{
        // const vetorID = JSON.parse(window.localStorage.getItem("vetorIDProdutos")) || [1];
        // const vetorProduto = JSON.parse(window.localStorage.getItem("vetorProduto")) || [];
        // const vetorPreco = JSON.parse(window.localStorage.getItem("vetorPreco")) || [];
        // const vetorQuantidade = JSON.parse(window.localStorage.getItem("vetorQuantidade")) || [];
        // const precoTotalProduto = JSON.parse(window.localStorage.getItem("precoTotal")) || [];
        // let valorTotalProdutos = Number(window.localStorage.getItem("valorTotalProdutos")) || 0;
        vetorProduto.push(inputNomeProdutoAdd.value);
        vetorID.push((Number(vetorProduto.length)));
        vetorPreco.push(inputPrecoProdutoAdd.value);
        vetorQuantidade.push(inputQuantidadeProdutoAdd.value);
        precoTotalProduto.push((Number(inputPrecoProdutoAdd.value) * Number(inputQuantidadeProdutoAdd.value)));
        let valorTotalProdutos = Array.from(precoTotalProduto).reduce((acc, valor) =>{
            return acc += valor;
        });
        window.localStorage.setItem("vetorProduto", JSON.stringify(vetorProduto));
        window.localStorage.setItem("vetorPreco", JSON.stringify(vetorPreco));
        window.localStorage.setItem("vetorQuantidade", JSON.stringify(vetorQuantidade));
        window.localStorage.setItem("vetorIDProdutos", JSON.stringify(vetorID));
        window.localStorage.setItem("precoTotal", JSON.stringify(precoTotalProduto));
        window.localStorage.setItem("valorTotalProdutos", valorTotalProdutos);

        inputNomeProdutoAdd.value = "";
        inputPrecoProdutoAdd.value = "";
        inputQuantidadeProdutoAdd.value = "";

        estadoAdicionarProduto.innerHTML = `<span style='color: rgb(21, 88, 86);'>${res}</span>`;

    }).catch((erro) =>{
        estadoAdicionarProduto.innerHTML = `<span style='color: red;'>${erro}</span>`;
    })
})

botaoSalvarEditarLoja.addEventListener("click", ()=>{
    estadoEditarLoja.innerHTML = "Aguarde...";
    const promesa = new Promise(function(resolve, reject){
        if(inputNomeLoja.value.length < 3 || inputNomeLoja.value.length > 14){
            reject("Nome inválido");  
        }else{
            resolve("Nome alterado com sucesso");
        }  
    }).then((res) =>{
        window.localStorage.setItem("nomeLoja", inputNomeLoja.value);
        nomeDaLoja.innerHTML = window.localStorage.getItem("nomeLoja");
        inputNomeLoja.value = "";
        estadoEditarLoja.innerHTML = `<span style='color: rgb(21, 88, 86);'>${res}</span>`;
    }).catch((erro)=>{
        estadoEditarLoja.innerHTML = `<span style='color: red;'>${erro}</span>`;
    })
})

botaoSalvarEditarProduto.addEventListener("click", function(){
    estadoEditarProduto.innerHTML = "Aguarde...";
    const promise = new Promise((resolve, reject) =>{
      if((inputIDProdutoEdit.value.length === 0 || inputNomeProdutoEdit.value.length === 0) || (inputPrecoProdutoEdit.value.length === 0 || inputQuantidadeProdutoEdit.value.length === 0)){
        reject("Preencha todos os campos.");
        }else if(Number(inputIDProdutoEdit.value)  === 0 || inputIDProdutoEdit.value > JSON.parse(window.localStorage.getItem("vetorIDProdutos")).length){
            reject("ID inválido.")
        }else if(((inputNomeProdutoEdit.value.length < 3 || inputNomeProdutoEdit.value.length > 14) || (Number(inputPrecoProdutoEdit.value) < 50 || Number(inputPrecoProdutoEdit.value) > 5000)) || ((Number(inputQuantidadeProdutoEdit.value) < 0 || Number(inputQuantidadeProdutoEdit.value > 100)))){
            reject("Produto, Quantidade ou Preço inválido.");
        }else{
            resolve(`Produto atualizado com sucesso`);
        }
    }).then((res) =>{
        vetorProduto[(Number(inputIDProdutoEdit.value) - 1)] = inputNomeProdutoEdit.value;
        vetorPreco[(Number(inputIDProdutoEdit.value) - 1)] = Number(inputPrecoProdutoEdit.value);
        vetorQuantidade[(Number(inputIDProdutoEdit.value) - 1)] = Number(inputQuantidadeProdutoEdit.value);
        precoTotalProduto[(Number(inputIDProdutoEdit.value) - 1)] = Number(vetorPreco[(Number(inputIDProdutoEdit.value) - 1)]) * Number(vetorQuantidade[(Number(inputIDProdutoEdit.value) - 1)]);
        valorTotalProdutos.innerHTML = Array.from(precoTotalProduto).reduce((acc, valor) =>{
            return acc += valor;
        });

        window.localStorage.setItem("vetorProduto", JSON.stringify(vetorProduto));
        window.localStorage.setItem("vetorPreco", JSON.stringify(vetorPreco));
        window.localStorage.setItem("vetorQuantidade", JSON.stringify(vetorQuantidade));
        window.localStorage.setItem("precoTotal", JSON.stringify(precoTotalProduto));
        window.localStorage.setItem("valorTotalProdutos", valorTotalProdutos.innerHTML);

        estadoEditarProduto.innerHTML = `<span style='color: rgb(21, 88, 86);'>${res}</span>`;
    }).catch((erro) =>{
        estadoEditarProduto.innerHTML = `<span style='color: red;'>${erro}</span>`;
    })
})
