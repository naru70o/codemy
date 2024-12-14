// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const btnOUutline = document.querySelector(".btn--outline");
btnOUutline.addEventListener("click", function (e) {
  e.scrollIntoView({ behavior: "smooth" });
});

const mainnav = document.querySelector(".main-nav-link");

mainnav.addEventListener("click", function (e) {
  e.preventDefault();
  const link = e.target;
  const src = link.dataset.src;

  if (!e.target.classList.contains("main-nav-links")) return;

  const section = document.getElementById(`section--${src}`);
  console.log(section);
  section.scrollIntoView({ behavior: "smooth" });
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

//coockie message
const header = document.querySelector(".header");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `start your career and be sucussfull <a class="arrow-link" href="#" data-src="5">&rarr;</a>`;

// const messageDelay = setTimeout(() => {
//   header.prepend(message);
// }, 3000);
