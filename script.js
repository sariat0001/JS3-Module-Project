const input = document.querySelector('#input');
let searchText = '';

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}
input.addEventListener('input', searchEpisode)

function searchEpisode() {
  searchText = input.value;
  const allEpisodes = getAllEpisodes();
  const filteredEpisodes = allEpisodes.filter((episode) =>
    episode.name.includes(searchText));

    clearCards();
  makePageForEpisodes(filteredEpisodes);

}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  episodeList.forEach((episode) => {
    const card = document.getElementById("tv-shows").content.cloneNode(true);
    // rootElem.innerHTML = "";

    card.querySelector("h2").textContent = `${episode.name} - S${String(episode.season).padStart(2, 0)}E${String(episode.number).padStart(2, 0)}`;
    card.querySelector("img").src = episode.image.medium;
    card.querySelector("p").innerHTML = episode.summary;

    rootElem.appendChild(card);

    return card;
  });
}
function clearCards() {
  document.querySelectorAll('#card').forEach((card) => {
    card.remove();
  })
}

window.onload = setup;

