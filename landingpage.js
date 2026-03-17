let mybutton = document.getElementById("btnTopo");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let currentIndex = 0;
const carousel = document.getElementById("carousel");
const totalSlides = carousel.children.length;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1;
  }
  updateCarousel();
}

function enviarReceita() {
  const textarea = document.getElementById("comentario");
  const mensagem = document.getElementById("mensagem");
  const texto = textarea.value.trim();

  if (texto === "") {
    alert("Escreva uma receita!");
    return;
  }

  let receitas = JSON.parse(localStorage.getItem("receitas")) || [];
  receitas.push(texto);
  localStorage.setItem("receitas", JSON.stringify(receitas));
  console.log("Receitas salvas:", receitas);
  mensagem.classList.remove("hidden");
  textarea.value = "";
}

function carregarReceitas() {
  const lista = document.getElementById("listaReceitas");
  let receitas = JSON.parse(localStorage.getItem("receitas")) || [];
  lista.innerHTML = "";
  receitas.forEach((receita, index) => {
    const item = document.createElement("div");
    item.className = "bg-white p-3 rounded shadow mb-2";
    item.innerHTML = `
      <strong>Receita ${index + 1}:</strong>
      <p>${receita}</p>
    `;
    lista.appendChild(item);
  });
}

window.onload = carregarReceitas;

carregarReceitas();
