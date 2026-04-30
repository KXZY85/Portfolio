const NiCOgdhImage = document.getElementById("NiCOgdh");
const NiCOgdhContainer = document.getElementById("NiCOgdh-container");

const pokoDescriptionHTML = `
  <div class="NiCOgdh-description">
    <h2>Poko – Le Tank Légendaire Français d’Overwatch</h2>
    <p>
      <b>Poko</b>, de son vrai nom Gael Gouzerch, est un joueur professionnel français 
      iconique de la scène Overwatch, connu pour ses performances spectaculaires en tant que 
      <b>tank</b>, notamment sur D.Va.
    </p>
    <p>
      Il est devenu célèbre pour ses <b>Poko Bombs</b> — des éliminations explosives 
      et millimétrées avec l’explosif de D.Va, qui ont marqué l’histoire de l’Overwatch League.
    </p>
    <p>
      Reconnu pour son intelligence de jeu, son sang-froid et son sens du spectacle, 
      Poko reste l’un des joueurs les plus appréciés de la communauté Overwatch.
    </p>
  </div>
`;


NiCOgdhImage.addEventListener("click", () => {
  NiCOgdhContainer.innerHTML = NiCOgdhDescriptionHTML;
});