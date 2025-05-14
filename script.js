// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.querySelector(".profile-img");
  const page = window.location.pathname.split("/").pop(); 

  if (profileImg) {
    // Always show the image
    if (profileImg.complete) {
      if (page === "about.html") {
        profileImg.classList.add("loaded"); 
      } else {
        profileImg.style.opacity = 1; 
      }
    } else {
      profileImg.onload = () => {
        if (page === "about.html") {
          profileImg.classList.add("loaded");
        } else {
          profileImg.style.opacity = 1;
        }
      };
    }
  }

  // Dynamic footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});


// Fade-in effect for project images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".project-img");
  images.forEach(img => {
    img.style.opacity = 0;
    if (img.complete) {
      img.style.transition = "opacity 1s ease-in";
      img.style.opacity = 1;
    } else {
      img.onload = () => {
        img.style.transition = "opacity 1s ease-in";
        img.style.opacity = 1;
      };
    }
  });

  // Dynamic year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// Back to top button
const btn = document.getElementById("backToTop");
if (btn) {
  window.onscroll = function () {
    requestAnimationFrame(() => {
      btn.style.display = window.scrollY > 200 ? "block" : "none";
    });
  };
  btn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
