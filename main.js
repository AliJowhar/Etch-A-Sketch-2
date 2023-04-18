"use strict";
const board = document.querySelector(".board");
const blackBtn = document.querySelector(".btn-dark");
const rainbowBtn = document.querySelector(".btn-info");
let popupBtn = document.getElementById("popup");
const eraserBtn = document.querySelector(".btn-primary");

document.addEventListener("DOMContentLoaded", function () {
  createGrid(16);
});

const createGrid = function (size) {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");

    div.style.border = "groove";
    board.appendChild(div);

    blackBtn.addEventListener("click", () => {
      div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "black";
      });
    });

    rainbowBtn.addEventListener("click", () => {
      div.addEventListener("mouseover", function () {
        div.style.backgroundColor = getRandomColor();
      });
    });

    eraserBtn.addEventListener("click", () => {
      div.addEventListener("mouseover", function () {
        div.style.backgroundColor = "white";
      });
    });
  }
};

// create random colors for rainbow button
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
