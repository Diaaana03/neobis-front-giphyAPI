const APIKEY = "dfBFNX1oXduOpIZYll5QxOSSmovt8dL6";

document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("search__btn").addEventListener("click", (ev) => {
    ev.preventDefault(); //to stop the page reload
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=6&q=`;
    let str = document.getElementById("search__input").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        //  data, pagination, meta
        console.log(content.data);
        console.log("META", content.meta);
        let fig = document.createElement("figure");
        let img = document.createElement("img");
        let fc = document.createElement("figcaption");
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fc.textContent = content.data[0].title;
        fig.appendChild(img);
        fig.appendChild(fc);
        let giphy = document.querySelector(".giphy");
        giphy.insertAdjacentElement("afterbegin", fig);
        document.querySelector("#search__input").value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
