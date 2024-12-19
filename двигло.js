const button = document.querySelector("button");
button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("новая кликуха");
  const paragraph = document.querySelector("p.r");
  paragraph.textContent = `Меня кличат ${name}`;
}
