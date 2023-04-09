// Taking an input value of a city and sending a request
function search() {
  // const key = "bc0f4a715b0f4da387a93332230204";
  const key = "9b81de7ae752c035dcdf31ce35d734cc";
  const city = document.getElementById("input");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}&units=metric`;
  fetch(url)
    .then((resp) => resp.json())
    .then((response) => {
      showWeather(response);
    })
    .catch(() => {
      showError();
    });
}

// Prossessing data and rendering it
function showWeather(response) {
  const result = document.getElementById("result");
  result.innerHTML = `
    <h2>${response.name}</h2>
    <h4 class='weather'>${response.weather[0].description}</h4>
    <img src='http://openweathermap.org/img/w/${response.weather[0].icon}.png'>
    <h1>${Math.round(response.main.temp)} &#176</h1>
    <div class="details-container">
    <div>
    <h4 class="title">wind</h4>
    <h4 class="details-value">${response.wind.speed} kph</h4>
    </div>
    <div>
    <h4 class="title">humidity</h4>
    <h4 class="details-value">${response.main.humidity} %</h4>
    </div>
    <div>
    <h4 class="title">pressure</h4>
    <h4 class="details-value">${response.main.pressure} hPa</h4>
    </div>
    </div>
    `;
}
function showError() {
  result.innerHTML = `<h2>City not found</h2>`;
}
// Getting geolocation to show start page
// function showWeatherInCurrentPlace(position) {
//   const latitude = position.coords.latitude;
//   const longtitude = position.coords.longitude;
//   const key = "9b81de7ae752c035dcdf31ce35d734cc";
//   const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longtitude}&appid=${key}&units=metric`;
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((response) => {
//       showWeather(response);
//     });
// }
// navigator.geolocation.getCurrentPosition(showWeatherInCurrentPlace);
