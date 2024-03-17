function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement =
    losAngelesElement.querySelector(".time .time-text");
  let losAngelesCurrentAmPmElement =
    losAngelesElement.querySelector(".time .am-pm");
  let losAngelesTime = moment();
  let losAngelesCurrentDate = losAngelesTime.format("dddd, MMMM Do");
  let losAngelesCurrentTime = losAngelesTime.format("h:mm:ss");
  let losAngelesCurrentAmPm = losAngelesTime.format("A");
  losAngelesDateElement.innerHTML = losAngelesCurrentDate;
  losAngelesTimeElement.innerHTML = losAngelesCurrentTime;
  losAngelesCurrentAmPmElement.innerHTML = losAngelesCurrentAmPm;

  //Tokyo
  let tokyoTime = moment().tz("Asia/Tokyo");
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time .time-text");
  let tokyoCurrentAmPmElement = tokyoElement.querySelector(".time .am-pm");
  let tokyoCurrentDate = tokyoTime.format("dddd, MMMM Do");
  let tokyoCurrentTime = tokyoTime.format("h:mm:ss");
  let tokyoCurrentAmPm = tokyoTime.format("A");
  tokyoDateElement.innerHTML = tokyoCurrentDate;
  tokyoTimeElement.innerHTML = tokyoCurrentTime;
  tokyoCurrentAmPmElement.innerHTML = tokyoCurrentAmPm;
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "currentLocation") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(`#cities`);
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("dddd, MMMM Do")}</div>
    </div>
    <div class="time">
      <span class="time-text">${cityTime.format("h:mm:ss")}</span>
      <span class="am-pm">${cityTime.format("A")}</span>
    </div>
  </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#selected-city");

citiesSelectElement.addEventListener("change", updateCity);
