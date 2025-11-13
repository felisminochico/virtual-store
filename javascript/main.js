// alert("Olá, Mundo! JavaScript");

const anoAtual = window.document.getElementById("ano-atual");
anoAtual.innerHTML = new Date().toLocaleString("pt-AO", {year: "numeric"});