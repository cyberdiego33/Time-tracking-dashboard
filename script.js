`use strict`;

const container = document.querySelector(".container");

let dataJson;

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(element);

      let string = `<div class="text-sm bg-white border">
                        <p>${element.title}</p>
                        <p>${element.title}</p>
                        <p>${element.title}</p>
                        <p>${element.title}</p>
                    </div>`;

      container.insertAdjacentHTML("beforeend", string);
    });
  });
