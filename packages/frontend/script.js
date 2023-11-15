document.addEventListener("DOMContentLoaded", function () {
  // Rimuovi l'overlay dopo un secondo e mezzo
  setTimeout(function () {
    var overlay = document.getElementById("overlay");
    overlay.parentNode.removeChild(overlay);

    // Rendi visibile il resto del contenuto
    document.querySelector("main").style.opacity = 1;
  }, 2000);
});
