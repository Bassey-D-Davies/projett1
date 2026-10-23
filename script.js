window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");

  // Check if page has scrolled more than 50 pixels
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
