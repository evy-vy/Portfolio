
// retrait de la class clean-transition du body une fois le site chargé
window.addEventListener('load', () => {
  document.body.classList.remove("clean-transition");
});


const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navLinks__container");
const animSubtitle = document.querySelector(".home__subtitle");


//nav

const toggleNav = () => {
  hamburgerToggler.classList.toggle("open");

  const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
  hamburgerToggler.setAttribute("aria-expanded", ariaToggle);

  navLinksContainer.classList.toggle("open");
}

hamburgerToggler.addEventListener("click", toggleNav);

//gestion de l'apparition de la navbar au resize mobile - tablette/destop
new ResizeObserver(entries => {
  if (entries[0].contentRect.width <= 900) {
    navLinksContainer.style.transition = "transform 0.3s ease-out";
  } else {
    navLinksContainer.style.transition = "none";
  }
}).observe(document.body);

//typewriter
new Typewriter(animSubtitle, {
  loop: true,
  deleteSpeed: 20
})
  .changeDelay(20)
  .typeString('<strong><span style="color: #dd8a00">HTML</span> <span style="color: #f4c44e"><i class="fa-brands fa-html5"></i></span></strong>')
  .pauseFor(1000)
  .deleteChars(7)
  .typeString('<strong><span style="color: #089ee9">CSS</span> <span style="color: #0068ba"><i class="fa-brands fa-css3-alt"></i></span></strong>')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString(' <strong><span style="color: #edcede">SASS</span> <span style="color: #c76395"><i class="fa-brands fa-sass"></i></span></strong>')
  .pauseFor(1000)
  .deleteChars(7)
  .typeString(' <strong><span style="color: #6f10ee">Bootstrap</span> <span style="color: #9b85f6"><i class="fa-brands fa-bootstrap"></i></span></strong>')
  .pauseFor(1000)
  .deleteChars(11)
  .typeString(' <strong><span style="color: #fdd77a">JavaScript</span> <span style="color: #f4c44e"><i class="fa-brands fa-square-js"></i></span></strong>')
  .pauseFor(1000)
  .deleteChars(12)
  .typeString('<strong><span style="color: #9ada7e">Node</span> <span style="color: #6ab849"><i class="fa-brands fa-node-js"></i></span></strong>')
  .pauseFor(1000)
  .deleteChars(7)
  .typeString('<strong style="color: #a09e9b">Express </strong> <span style= "color: #dd8a00"><i class="fa-solid fa-gears"></i></span></strong>')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<strong><span style="color: #d4f9e3">MongoDB</span> <span style= "color: #27ae60"><i class="fa-solid fa-leaf"></i></span></strong>')
  .pauseFor(1000)
  .deleteChars(9)
  .typeString('<strong><span style="color:#005b87">My</span><span style="color:#dd8a00">SQL</span></strong> <span style="color:#abaaab"><i class="fa-solid fa-database"> </i></span></strong>')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<strong><span style="color:#4181ed">S</span><span style="color:#ea4235">E</span><span style="color:#fabc05">O</span> <span><i class="fa-solid fa-magnifying-glass"></i></span></strong>')
  .pauseFor(1000)
  .deleteChars(7)
  .start()