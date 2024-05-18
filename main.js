const APIKEY = "dfBFNX1oXduOpIZYll5QxOSSmovt8dL6";
const button = document.querySelector("#search__btn");
const giphyBox = document.querySelector(".giphy");

//const trendingUrl = `http://api.giphy.com/v1/gifs/trending&limit=6`;

///// Search gifs

async function showGifs() {
  const input = document.querySelector("#search__input").value.trim();
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${input}&limit=9&offset=0&rating=g&lang=en`
  );
  if (response.ok) {
    const content = await response.json();
    //console.log(content.data);
    const giphy = document.querySelector(".giphy");
    giphy.innerHTML = "";
    const array = content.data;
    array.forEach((element) => {
      const giphy = `<div class="giphy"><img src="${element.images.downsized.url}"></div>`;
      giphyBox.insertAdjacentHTML("beforeend", giphy);
      document.querySelector("#search__input").value = "";
    });
  } else {
    console.log("Error HTTP:" + response.status);
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  showGifs();
});

window.addEventListener("DOMContentLoaded", showGifs);
