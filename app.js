const gifsDiv = document.querySelector("#gifs-div");
const search = document.querySelector("#search");

document.querySelector(".search-btn").addEventListener("click", () => {
  event.preventDefault();
  searchGif(search.value);
  search.value = "";
});

document.querySelector(".remove-btn").addEventListener("click", () => {
  event.preventDefault();
  gifsDiv.innerHTML = "";
});


async function searchGif(search) {
  const url = "http://api.giphy.com/v1/gifs/search";
  const payload = {
    params: { q: search, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" }
  }
  const response = await axios.get(url, payload);
  const numOfResults = response.data.data.length;
  const index = Math.floor(Math.random() * numOfResults);
  const gif = response.data.data[index].url;
  const newGif = document.createElement("img");
  newGif.classList.add('gif');
  gifsDiv.append(newGif);
  newGif.setAttribute("src", gif);
}
