let show = true;
const menuHamburguer = document.querySelector(".content");
const menuToggle = menuHamburguer.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  menuHamburguer.classList.toggle("on", show);
  show = !show;
});

function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  section.scrollIntoView({
    behavior: "smooth",
  });
}
