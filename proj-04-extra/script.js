let num = document.getElementById("num");

function sortear() {
  let lista = [20, 99, 10, 2, 3, 4, 5];

  let indiceAleatorio = Math.floor(Math.random() * lista.length);
  let numAleatorio = lista[indiceAleatorio];

  console.log(numAleatorio);

  num.innerText = numAleatorio;
}
