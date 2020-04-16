
document.querySelector('.bouton-afficher').addEventListener('click', function(){
  var paragraphes = document.querySelectorAll("p.infos-description");
  paragraphes.forEach((p) => {
    p.style.display = "block";
  });
}); 