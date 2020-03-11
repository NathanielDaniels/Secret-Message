const { hash } = window.location;

const message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-form").classList.add("hidden");
  document.querySelector("#message-show").classList.remove("hidden");
  document.querySelector("h2").innerHTML = message;
}
const input = document.querySelector("#message-input");
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  const encrypted = btoa(input.value);

  const inputLink = document.querySelector("#link-input");
  inputLink.value = `${window.location}#${encrypted}`;
  inputLink.select();

  const card1 = document.querySelector(".card1");
  const card2 = document.querySelector(".card2");
  card1.classList.add("hidden");
  card2.classList.remove("hidden");
});

// Decode Button
// const decodeBtn = document.querySelector("#decodeBtn");
// decodeBtn.addEventListener("click", () => {
//   const newEl = document.createElement("div");
//   newEl.classList.add("card-panel", "z-depth-4");
//   newEl.innerHTML = `${input.value}`;
//   newEl.style =
//     "position: absolute;display: flex; justify-content: center; align-items: center; font-size: 2rem; background: white; color: black; padding: 100px 150px";
//   closeX = document.createElement("div");
//   closeX.innerHTML = "X";
//   closeX.style = "position: absolute; top: 0; right: 15px; cursor: pointer";
//   closeX.addEventListener("click", () => {
//     newEl.classList.add("hidden");
//   });
//   console.log(closeX);
//   newEl.append(closeX);
//   document.body.appendChild(newEl);
// });

//================================================
// const change1 = btoa("Nathan");
// console.log(change1);

// const changeBack = atob(change1);
// console.log(changeBack);
