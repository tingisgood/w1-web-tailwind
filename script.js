

let index = 0;
const slides = document.querySelectorAll(".carousel-container img");
const container = document.querySelector(".carousel-container");

const offset = -slideIndex * 100;
carouselContainer.style.transform = `translateX(${offset}%)`;

function showSlide(n) {
  if (n >= slides.length) index = 0;
  else if (n < 0) index = slides.length - 1;
  else index = n;
  container.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => showSlide(index + 1));
document.querySelector(".prev").addEventListener("click", () => showSlide(index - 1));

// 自動播放
setInterval(() => showSlide(index + 1), 3000);
