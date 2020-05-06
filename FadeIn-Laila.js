document.addEventListener("DOMContentLoaded", () => {
  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      console.log("> je rentre");
      if ( entry.isIntersecting) {
        const imgElement = entry.target;
        imgElement.classList.add("fadeIn");
        observer.unobserve(imgElement);
      }
    })
  });
  document.querySelectorAll("img.image").forEach(imgElement => {
    imgObserver.observe(imgElement);
  });
});
