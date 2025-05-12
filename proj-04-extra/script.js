let num = document.getElementById("num");
let nome = document.getElementById("name");

const lista = {
  1: "Joel Laurentino",
  2: "Joel Laurentino",
  3: "Mercia",
  4: "Felipe da Silva (Amigo de Fernanda)",
  6: "Tia Charliane",
  7: "Gleicielly",
  8: "Eduardo (Ufersa)",
  12: "Mercia",
  15: "Tia Charliane",
  16: "Neide (Amiga de mãe)",
  17: "Fernanda (Ufersa)",
  22: "Waldir",
  24: "Felipe (amigo de Fernanda)",
  25: "Wilson (padrinho)",
  27: "Waldir",
  28: "Neide (Amiga de mãe)",
  30: "Eduardo (da arte)",
  34: "Mercia",
  38: "Waldir",
  40: "Milena",
  44: "Luzinete",
  46: "Waldir",
  48: "Mariana",
  50: "Luziane (amiga de mãe)",
  51: "Mazilene",
  56: "Madrinha",
  57: "Mercia",
  60: "Josilene (mãe de Joel)",
  62: "Mercia",
  69: "Ruan Túlio",
  70: "Josilene (mãe de Joel)",
  73: "Mercia",
  77: "Mariana",
  97: "Fernanda (Ufersa)",
  100: "Kailany",
  111: "Lainnara (Falar com Joel)",
  113: "Ayslla (Falar com Joel)",
  143: "Fernanda (Ufersa)",
  151: "Aparecida (filha de Luzinete)",
  157: "Andro (Falar com Joel)",
  200: "Eloize (neta de Luzinete)",
  201: "Dulcilene (Falar com Joel)",
  204: "Antonia (Falar com Joel)",
  228: "Deuzilene (Falar com Joel)",
  243: "Wesley",
  271: "Ceicinha",
  286: "Rodrigo (cunhado de Luzinete)",
  300: "Wesley",
};

let displayNumeroNome = document.querySelector(".numero");

function sortear() {
  let chaves = Object.keys(lista);

  let indiceAleatorio = Math.floor(Math.random() * chaves.length);
  let numAleatorio = chaves[indiceAleatorio];

  console.log(numAleatorio);

  let nomeDoNumero = lista[numAleatorio];

  console.log(nomeDoNumero);

  num.innerText = numAleatorio;
  nome.innerText = nomeDoNumero;

  displayNumeroNome.style.display = "flex";

  setTimeout(() => {
    displayNumeroNome.classList.add("visible");
  }, 10);
}
