let num = document.getElementById("num");
let nome = document.getElementById("name");

let displayNumeroNome = document.querySelector(".numero");

let lista = {
  11: "layza",
  20: "vitoria",
  3: "fraramis",
};

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
