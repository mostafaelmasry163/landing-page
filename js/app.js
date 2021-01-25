/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sectionList = document.querySelector("#navbar__list");
const pageSection = document.querySelectorAll("section");
const totalSection = pageSection.length;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function activeSection(e) {
  for (i = 0; i < totalSection; i++) {
    if (pageSection[i].className === "your-active-class") {
      pageSection[i].removeAttribute("class");
    }
  }
}
function activeNavSection(e) {
  const lists = document.querySelectorAll("li");
  const totalLists = lists.length;
  for (i = 0; i < totalLists; i++) {
    if (lists[i].className === "active") {
      lists[i].removeAttribute("class");
    }
  }
}
/**
 * End Helper Functions
 */

 // build home btn
 const newHome = document.createElement("li");
  newHome.innerHTML= `<a href="#home"> Home</a>`;
  newHome.addEventListener("click",respondToTheClick);
  sectionList.appendChild(newHome);

// build the nav
for (let i = 0; i < totalSection; i++) {
  const newElement = document.createElement("li");
  const secNo = pageSection[i].attributes[0].nodeValue;
  newElement.innerHTML = `<a href='#${secNo}'> Section ${i + 1}</a>`;

  // Scroll to section on link click
  newElement.addEventListener("click", respondToTheClick);

  sectionList.appendChild(newElement);
}

/*
Begin Main Functions
*/

function respondToTheClick(e) {
  // Scroll to anchor ID using scrollTOP event
  $("#navbar__list a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      );
    }
  });
  activeSection();
  let target = e.path[0].attributes[0].nodeValue;
  const targetSection = document.querySelector(target);
  targetSection.classList.add("your-active-class");

  // Set sections as active
  activeNavSection();

  this.classList.add("active");
}
/*
 * End Main Functions
 */
