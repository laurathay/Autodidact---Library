document.addEventListener("DOMContentLoaded", () => {
  const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const imgElement = entry.target;
      if ( entry.isIntersecting) {
        imgElement.classList.add("fadeIn");
      }
      else {
        console.log('SCROLL Y ' + window.scrollY);
        console.log('OFFSET TOP ' + imgElement.offsetTop);
   console.log(imgElement.classList.contains('fadeIn'));
        if ( window.scrollY + 300 > imgElement.offsetTop && imgElement.classList.contains('fadeIn') ) {
        imgElement.classList.add("fadeOut");
        imgElement.classList.remove("fadeIn");
        observer.unobserve(imgElement);
      }

      }
    })
  });
  document.querySelectorAll("img.image").forEach(imgElement => {
    imgObserver.observe(imgElement);
  });
});
