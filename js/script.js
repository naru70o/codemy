// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

btnNavEl.addEventListener("touchstart", function () {
  headerEl.classList.toggle("nav-open");
});

// Cta
const scrollTocta = document.querySelector(".scroll-clicker--cta");
scrollTocta.addEventListener("click", function (e) {
  e.preventDefault();
  const link = e.target;
  const src = link.dataset.src;
  console.log(src);

  if (!e.target.classList.contains("atr-clicker")) return;
  const section = document.getElementById(`section--${src}`);
  section.scrollIntoView({ behavior: "smooth" });
});
// Cta
const scrollTolearn = document.querySelector(".scroll-clicker--learn");
scrollTolearn.addEventListener("click", function (e) {
  e.preventDefault();
  const link = e.target;
  const src = link.dataset.src;
  console.log(src);

  if (!e.target.classList.contains("atr-clicker")) return;
  const section = document.getElementById(`section--${src}`);
  section.scrollIntoView({ behavior: "smooth" });
});
// Pricing
const scrollToPrice = document.querySelector(".scroll-clicker--Pricing");
scrollToPrice.addEventListener("click", function (e) {
  e.preventDefault();
  const link = e.target;
  const src = link.dataset.src;
  console.log(src);

  if (!e.target.classList.contains("atr-clicker")) return;
  const section = document.getElementById(`section--${src}`);
  section.scrollIntoView({ behavior: "smooth" });
});

const mainnav = document.querySelector(".main-nav-link");

mainnav.addEventListener("click", function (e) {
  e.preventDefault();
  const link = e.target;
  const src = link.dataset.src;

  if (!e.target.classList.contains("main-nav-links")) return;

  const section = document.getElementById(`section--${src}`);
  section.scrollIntoView({ behavior: "smooth" });
  headerEl.classList.remove("nav-open");
});

// ///////////////////////////////////////////////////////////
// // Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

const date = new Date();
const year = date.getFullYear();
document.querySelector(
  ".copy-text"
).textContent = `©Codemy ${year} the best way to learn code`;
