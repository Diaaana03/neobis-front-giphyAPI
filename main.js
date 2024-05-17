const APIKEY = "dfBFNX1oXduOpIZYll5QxOSSmovt8dL6";
const button = document.querySelector("#search__btn");
const giphyBox = document.querySelector(".giphy");

async function showGifs() {
  const input = document.querySelector("#search__input");
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${input}&limit=6`
  );
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    console.log("Error HTTP:" + response.status);
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  showGifs();
});

window.addEventListener("DOMContentLoaded", showGifs);

// const gif = await response.json();
// const array = gif.data;
// array.forEach((gif) => {
//   const giphyBox = `<div class="giphy"><img src= "${data.gif}"></div>`;
//   document.insertAdjacentElement("beforeend", giphyBox);
// });
