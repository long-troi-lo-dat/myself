document.addEventListener("DOMContentLoaded", function () {
  fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      const dataDisplay = document.getElementById("dataDisplay");

      const content = document.getElementById("content");
      content.innerHTML = data.content;

      const source = document.getElementById("source");
      source.innerHTML = data.source;
    })
    .catch((error) => console.error("Error fetching JSON data:", error));
});
