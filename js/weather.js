const API_KEY = "a7450dffa29a04308b7803c332533952";
function onGeoOk(position) {
  // make the space to make JS fill that space.
  // success function takes a geolocation object. need input parameter
  const lat = position.coords.latitude;
  const lon = position.coords.longitude; // GeolocationPosition에 있는 요소들. console.log(position)으로 확인해봐.
  // console.log("You live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //console.log(url); // units=metric 으로 온도의 화씨를 섭씨로 바꾼다. 이 정보는 날씨가져온 페이지에서 얻는다.
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
