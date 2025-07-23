`use strict`;

const container = document.querySelector("#container");
let dataJson;

const insertHtml = function (data, format = "weekly") {
  data.forEach((element) => {
    // console.log(element);

    let mode;

    if (format === "weekly") mode = "Last Week";
    else {
      mode = format === "monthly" ? "Last Month" : "Daily";
    }

    const StringDiv = `
      <div class="card-item relative rounded-2xl overflow-y-hidden" style="background:${element.bgColor}">
        <div class="relative h-8 overflow-hidden">
          <img
            class="size-12 right-2 block absolute -top-1"
            src="${element.icon}"
            alt=""
          />
        </div>
        <div class="p-4 bg-[#1c1f4a] rounded-2xl ">
          <div class="flex justify-between items-center">
            <p class="text-white">${element.title}</p>
            <img
              class="h-1 cursor-pointer"
              src="images/icon-ellipsis.svg"
              alt=""
            />
          </div>
          <div
            class="mt-4 flex-1 flex justify-between items-center md:flex-col md:items-start text-white"
          >
            <p class="text-xl font-light md:mb-3 md:text-3xl">${element.timeframes[format].current}hrs</p>
            <span class="text-sm font-light text-gray-400">${mode} - ${element.timeframes[format].previous}hrs</span>
          </div>
        </div>
      </div>
`;
    container.insertAdjacentHTML("beforeend", StringDiv);
  });
};

const filterHtml = function () {
  const AllCards = document.querySelectorAll(".card-item");

  AllCards.forEach((card) => {
    card.remove();
  });
};

const FetchData = async function () {
  const getData = await fetch("data.json");
  // console.log(getData);

  const data = await getData.json();

  insertHtml(data, "weekly");

  document.querySelector("#sorting").addEventListener("click", function (e) {
    if (!e.target.closest("p")) return;

    const arrayDates = document.querySelectorAll(".date")

    arrayDates.forEach(div => {
      if (div === e.target) div.classList.add("text-white")
      else {div.classList.remove("text-white")}
    })

    const format = `${e.target.textContent}`.toLocaleLowerCase();
    filterHtml();
    insertHtml(data, format);
  });
};

FetchData();
