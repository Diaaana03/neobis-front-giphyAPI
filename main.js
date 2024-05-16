const APIKEY = "dfBFNX1oXduOpIZYll5QxOSSmovt8dL6";
const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q&limit=6`;

const button = document.querySelector("#search__btn");

async function showGif() {
  const inputText = document.querySelector("#input__search");
  const response = await fetch(url);
  const data = response.json();
}

button.addEventListener("click", function (e) {
  e.preventDefault();
  showGif();
});

window.addEventListener("DOMContentLoaded", () => {
  showGif(url);
});
