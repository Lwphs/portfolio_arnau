const container = document.querySelector("#container");
const tile = document.querySelector(".tile");

const tileWidth = tile.offsetWidth;
const tileHeight = tile.offsetHeight;

const cols = Math.ceil(window.innerWidth / tileWidth);
const rows = Math.ceil(window.innerHeight / tileHeight);
const totalTiles = cols * rows;

container.style.gridTemplateColumns = `repeat(${cols}, ${tileWidth}px)`;
container.style.gridTemplateRows = `repeat(${rows}, ${tileHeight}px)`;

for (let i = 0; i < totalTiles; i++) {
  container.appendChild(tile.cloneNode(true));
}


window.addEventListener("load", () => {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(revealElements).indexOf(entry.target);
          const delay = index * 50;

          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));

  const navegador = document.getElementById("navigator");
  setTimeout(() => {
    navegador.classList.add("visible");
  }, 500);
});
