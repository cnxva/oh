document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 20, // Adjust for header height if necessary
          behavior: "smooth",
        });
      }
    });
  });

  // Toggle navigation menu on mobile
  const menuIcon = document.querySelector(".menu-icon");
  const navLinksContainer = document.querySelector(".top-nav .nav-links");

  if (menuIcon) {
    menuIcon.addEventListener("click", function () {
      navLinksContainer.classList.toggle("active");
    });
  }
});
