"use strict";
const board = document.querySelector(".board");
const blackBtn = document.querySelector(".btn-dark");
const rainbowBtn = document.querySelector(".btn-info");
const promptBtn = document.getElementById("prompt");
const eraserBtn = document.querySelector(".btn-primary");

document.addEventListener("DOMContentLoaded", function () {
  createGrid(10);

  promptBtn.addEventListener("click", function () {
    const size = prompt("Enter a size,Eg:10,20,30");
    if (size <= 40) createGrid(size);
  });
});

const createGrid = function (size) {
  board.innerHTML = "";

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");

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
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
