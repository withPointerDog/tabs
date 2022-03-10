const btns = document.querySelectorAll("button");
const blcksContent = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", (event) => {
  const id = event.target.dataset.id;

  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    event.target.classList.add("active");

    blcksContent.forEach((blck) => {
      blck.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
