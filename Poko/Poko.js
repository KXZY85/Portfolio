const pokoImage = document.getElementById("Poko");
const pokoContainer = document.getElementById("Poko-container");

const pokoDescriptionHTML = `
  <div class="Poko-description">
    <h3>Poko – Le Choc Français du Tanking</h3>
    <p>
      <b>Poko</b>, de son vrai nom <b>Gael Gouzerch</b>, est l'un des joueurs français les plus emblématiques 
      de la scène Overwatch. Connu pour ses <b>bombes de D.Va légendaires</b>, il est devenu une véritable 
      icône de la Overwatch League.
    </p>
    <p>
      Ancien joueur des <b>Philadelphia Fusion</b>, il a marqué l’histoire grâce à son style agressif, 
      sa régularité, et sa capacité à retourner une partie en un instant grâce à ses ultimes parfaitement placés.
    </p>
    <p>
      Considéré comme l’un des meilleurs joueurs D.Va au monde, Poko reste une inspiration pour de nombreux joueurs francophones.
    </p>
    <a href="https://overwatchleague.com/en-us/players/gael-poko-gouzerch" target="_blank" class="poko-button">Voir Profil OWL</a>
    <button id="back-button" class="poko-button" style="margin-left:10px;">Retour</button>
  </div>
`;

pokoImage.addEventListener("click", () => {
  pokoContainer.innerHTML = PokoDescriptionHTML;
  pokoContainer.classList.add("show");
  pokoContainer.scrollIntoView({ behavior: "smooth" });

  
  const backButton = document.getElementById("back-button");
  if (backButton) {
    backButton.addEventListener("click", () => {
      history.back(); 
    });
  }
});
