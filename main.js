"use strict";

const container = document.querySelector(".mainContainer");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");

  div.className = "gridElement";

  container.appendChild(div);
}
