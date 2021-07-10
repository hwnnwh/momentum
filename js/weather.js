const API_KEY = "c092dc1572f7c3d2f35253d39c373416";

function onGeoOk(position) {
  //JS gives you an argument 'position' by default, which is an object.
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((coord) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = coord.weather[0].main;
      city.innerText = `${coord.main.temp}°C ${coord.name}`;
    });
}

function onGerErr() {
  alert("Cannot find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGerErr);
