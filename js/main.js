document.documentElement.classList.add("js");

const header = document.querySelector(".site-header");
const syncHeader = () => {
  header.classList.toggle("is-stuck", window.scrollY > 8);
};
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");

if (!motionOk || !("IntersectionObserver" in window)) {
  reveals.forEach((el) => el.classList.add("is-in"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );
  reveals.forEach((el) => observer.observe(el));
}

const dialog = document.querySelector(".lightbox");
if (dialog) {
  const preview = dialog.querySelector("img");
  const close = dialog.querySelector("button");

  document.querySelectorAll(".gallery img").forEach((img) => {
    img.addEventListener("click", () => {
      preview.src = img.currentSrc || img.src;
      preview.alt = img.alt;
      dialog.showModal();
    });
  });

  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    preview.removeAttribute("src");
  });
}
