"use strict";
const board = document.querySelector(".board");

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

    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = "black";
    });
  }
};
