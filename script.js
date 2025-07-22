`use strict`;

const container = document.querySelector("#container");
let dataJson;

const FetchData = async function () {
  const getData = await fetch("data.json");
  console.log(getData);

  const changed = getData.json();
  changed
    .then((res) => {
      dataJson = res;
      return dataJson;
    })
    .then((data) => {
      data.forEach((element) => {

        console.log(element);

        const StringDiv = `
      <div class="relative bg-[#f1c65b] rounded-2xl overflow-y-hidden">
        <div class="relative h-8 overflow-hidden">
          <img
            class="size-12 right-2 block absolute -top-1"
            src="${element.icon}"
            alt=""
          />
        </div>
        <div class="p-4 bg-[#1c1f4a] rounded-2xl">
          <div class="flex justify-between items-center">
            <p class="font-semibold text-white">${element.title}</p>
            <img
              class="h-1 cursor-pointer"
              src="images/icon-ellipsis.svg"
              alt=""
            />
          </div>
          <div
            class="flex-1 flex justify-between items-center md:flex-col md:items-start text-white"
          >
            <p class="text-xl">${element.timeframes["weekly"].current}hrs</p>
            <span class="text-sm">Last Week - ${element.timeframes["weekly"].previous}hrs</span>
          </div>
        </div>
      </div>
`;
        container.insertAdjacentHTML("beforeend", StringDiv)
        
      });
    });
};

FetchData();
