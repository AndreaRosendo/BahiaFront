function BotonDark() {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.color = "#FFF";
  document.querySelector("header").style.backgroundColor = "black";
  document.querySelector("header").style.color = "#FFF";
  document.querySelector("nav").style.backgroundColor = "#FFF";
  document.querySelector("nav").style.color = "black";
  document.querySelectorAll("a").forEach((a) => {
    a.style.color = "black";
  });
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "#FFF";
  });
  document.querySelectorAll("label").forEach((label) => {
    label.style.color = "black";
  });
  document.querySelectorAll("input").forEach((input) => {
    input.style.color = "black";
  });
  document.querySelectorAll("li").forEach((li) => {
    li.style.color = "#FFF";
  });
  document.querySelector("h1").style.color = "#FFE0B2";
  document.querySelectorAll("h2").forEach((h2) => {
    h2.style.color = "#E8F5E9";
  });
  document.querySelectorAll("h3").forEach((h3) => {
    h3.style.color = "#CC0000";
  });
  document.querySelectorAll("h4").forEach((h4) => {
    h4.style.color = "#FFF";
  });
  document.querySelectorAll("h5").forEach((h5) => {
    h5.style.color = "#FFF";
  });

  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.style.backgroundColor = "black";
    card.style.color = "#FFF"; //
    card.style.borderColor = "#CC0000";
  });
  
  document.querySelector("footer").style.backgroundColor = "#FFF";
  document.querySelector("footer").forEach((p) => {
    p.style.color = "black";
  });

  }


function BotonWhite() {

document.querySelector("body").style.backgroundColor = "#FFFF99";
document.querySelector("body").style.color = "black";
document.querySelector("header").style.backgroundColor = "#FF9933";
document.querySelector("header").style.color = "#A93226";
document.querySelector("nav").style.backgroundColor = "black";
document.querySelector("nav").style.color = "#FFF";
document.querySelectorAll("a").forEach((a) => {
  a.style.color = "#FFF";
});
document.querySelectorAll("p").forEach((p) => {
  p.style.color = "black";
});
document.querySelectorAll("label").forEach((label) => {
  label.style.color = "black";
});
document.querySelectorAll("input").forEach((input) => {
  input.style.color = "black";
});
document.querySelectorAll("li").forEach((li) => {
  li.style.color = "black";
});
document.querySelector("h1").style.color = "#A93226";
document.querySelectorAll("h2").forEach((h2) => {
  h2.style.color = "#196F3D";
});
document.querySelectorAll("h3").forEach((h3) => {
  h3.style.color = "#CC0000";
});
document.querySelectorAll("h4").forEach((h4) => {
  h4.style.color = "black";
});
document.querySelectorAll("h5").forEach((h5) => {
  h5.style.color = "black";
});

let cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.style.backgroundColor = "#FFFFCC";
  card.style.color = "black";
  card.style.borderColor = "#CC0000";
});

document.querySelector("footer").style.backgroundColor = "black";
document.querySelector("footer").forEach((p) => {
  p.style.color = "#FFF";
});

}

function Cartelito() {alert("Creado por Andrea Rosendo - Para el proyecto de Potrero Digital Bahía Blanca - Buenos Aires - Argentina")}
