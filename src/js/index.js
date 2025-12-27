const track = document.querySelector(".stock-track");

let scrollSpeed = 0.5;

function marqueeLoop() {
  track.scrollLeft += scrollSpeed;

  if (track.scrollLeft >= track.scrollWidth / 2) {
    track.scrollLeft = 0;
  }

  requestAnimationFrame(marqueeLoop);
}

if (track) marqueeLoop();

const marquee = document.querySelector(".stock-marquee");

if (marquee) {
  marquee.addEventListener("mouseenter", () => {
    scrollSpeed = 0;
  });

  marquee.addEventListener("mouseleave", () => {
    scrollSpeed = 0.5;
  });
}

const revealElements = document.querySelectorAll(
  ".hero-title, .hero-desc, .stock-card"
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const counters = document.querySelectorAll(".stock-gain");

counters.forEach(counter => {
  const target = parseInt(counter.innerText.replace(/[^0-9]/g, ""));
  let count = 0;

  const updateCounter = () => {
    if (count < target) {
      count += Math.ceil(target / 60);
      counter.innerText = `${count}%`;
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = counter.innerText;
    }
  };

  updateCounter();
});

const heroVideo = document.querySelector(".yt-hero");

if (heroVideo) {
  heroVideo.addEventListener("mouseenter", () => {
    heroVideo.classList.add("hovered");
  });

  heroVideo.addEventListener("mouseleave", () => {
    heroVideo.classList.remove("hovered");
  });
}