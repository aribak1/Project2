const btn = document.querySelectorAll(".show-modal");
const cross = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const click = document.querySelector(".click");

btn.forEach((element) => {
  element.addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

cross.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// const b = ["asi", 232, 343];
// b.forEach(function (elements, index, array) {
//   console.log(index);
// });

const c = [12, 3334, 45, "ariba", "hamza"];
c.forEach(function (elements, index, array) {
  console.log(elements);
});

function escapebtn(e) {
  console.log(e.key);
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
}

document.addEventListener("keydown", escapebtn);
