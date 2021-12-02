let apiKey = `709cee6d37b86718550c6b0917bcc237`;

function showLocation(response) {
  document.querySelector("#current-city-id").innerHTML = response.data.name;
  document.querySelector(".temp-now").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#wind_speed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#humidity_percent").innerHTML =
    response.data.main.humidity;
  document.querySelector(".current-weather-condition").innerHTML =
    `${response.data.weather[0].main}`.toLowerCase();
}

function searchLocation(city) {
  let apiKey = `709cee6d37b86718550c6b0917bcc237`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showLocation);
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#weather-search-bar").value;
  searchLocation(city);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

let submitButton = document.querySelector("#submit-search");
submitButton.addEventListener("click", searchCity);

function currentLocation(position) {
  console.log(position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?wind=&lat=${latitude}&lon=${longitude}&&appid=${apiKey}&units=metric`;
  axios.get(url).then(showLocation);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(currentLocation);
}

//old
let button = document.querySelector(`#submit-current-location`);
button.addEventListener("click", getCurrentPosition);
function displayTemperatureInCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#current-temperature");
  temperature.innerHTML = 14;
}

function displayTemperatureInFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#current-temperature");
  temperature.innerHTML = 57;
}

function formatTime(currentTime) {
  let currentHours = currentTime.getHours();
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  let currentMinutes = currentTime.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[currentTime.getDay()];

  return `${currentDay}, ${currentHours}:${currentMinutes}`;
}

let formattedDate = document.querySelector(".DayandTime");
formattedDate.innerHTML = formatTime(new Date());

function showCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#weather-search-bar");
  let cityElement = document.querySelector("#current-city-id");
  cityElement.innerHTML = inputCity.value;
}
let cityForm = document.querySelector(".city-search-form");
cityForm.addEventListener("submit", showCity);

//function showCity(event) {
// event.preventDefault();
// let inputCity = document.querySelector("#city-input");
// let cityElement = document.querySelector("#city");
// cityElement.innerHTML = inputCity.value;
//}
//let cityForm = document.querySelector("#enter-city");
//cityForm.addEventListener("submit", showCity);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 60;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 15;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
