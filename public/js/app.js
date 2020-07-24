const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.getElementById("message-one");
const messageTwo = document.getElementById("message-two");
const weatherCard = document.getElementsByClassName("static-card")[0];

const portlandCard = document.getElementById("portland");
const portlandCard1 = document.getElementById("portland1");
const portlandCard2 = document.getElementById("portland2");
const portlandCard3 = document.getElementById("portland3");
const portlandCard4 = document.getElementById("portland4");
const portlandCard5 = document.getElementById("portland5");

const minneapolisCard = document.getElementById("minneapolis");
const minneapolisCard1 = document.getElementById("minneapolis1");
const minneapolisCard2 = document.getElementById("minneapolis2");
const minneapolisCard3 = document.getElementById("minneapolis3");
const minneapolisCard4 = document.getElementById("minneapolis4");
const minneapolisCard5 = document.getElementById("minneapolis5");

const newYorkCard = document.getElementById("new-york");
const newYorkCard1 = document.getElementById("new-york1");
const newYorkCard2 = document.getElementById("new-york2");
const newYorkCard3 = document.getElementById("new-york3");
const newYorkCard4 = document.getElementById("new-york4");
const newYorkCard5 = document.getElementById("new-york5");
weatherCard.style.visibility = "hidden";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetch(`/weather?address=${search.value}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        weatherCard.style.visibility = "visible";
        messageOne.textContent = data.error;
        search.value = "";
      } else {
        weatherCard.style.visibility = "visible";
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
        document.getElementById("weatherIcon").src = data.img.img;
        search.value = "";
      }
    });
  });
});

fetch(`/weather/portland`).then((res) => {
  res.json().then((data) => {
    const {
      uv_index,
      feelslike,
      humidity,
      state,
      temperature,
      weather_icon,
      wind_speed,
    } = data.foreCastData;
    if (data.error) {
      portlandCard.textContent = data.error;
      search.value = "";
    } else {
      document.getElementById("portland-img").src = weather_icon;
      portlandCard.textContent = `State: ${state}`;
      portlandCard1.textContent = `Temp: ${temperature}`;
      portlandCard2.textContent = `Feels like: ${feelslike}`;
      portlandCard3.textContent = `Humidity: ${humidity}`;
      portlandCard4.textContent = `UV Index: ${uv_index}`;
      portlandCard5.textContent = `Wind Speed: ${wind_speed}`;
    }
  });
});

fetch(`/weather/minneapolis`).then((res) => {
  res.json().then((data) => {
    const {
      uv_index,
      feelslike,
      humidity,
      state,
      temperature,
      weather_icon,
      wind_speed,
    } = data.foreCastData;
    if (data.error) {
      minneapolisCard.textContent = data.error;
      search.value = "";
    } else {
      document.getElementById("minneapolis-img").src = weather_icon;
      minneapolisCard.textContent = `State: ${state}`;
      minneapolisCard1.textContent = `Temp: ${temperature}`;
      minneapolisCard2.textContent = `Feels like: ${feelslike}`;
      minneapolisCard3.textContent = `Humidity: ${humidity}`;
      minneapolisCard4.textContent = `UV Index: ${uv_index}`;
      minneapolisCard5.textContent = `Wind Speed: ${wind_speed}`;
    }
  });
});

fetch(`/weather/newyork`).then((res) => {
  res.json().then((data) => {
    const {
      uv_index,
      feelslike,
      humidity,
      state,
      temperature,
      weather_icon,
      wind_speed,
    } = data.foreCastData;
    if (data.error) {
      newYorkCard.textContent = data.error;
      search.value = "";
    } else {
      document.getElementById("new-york-img").src = weather_icon;
      newYorkCard.textContent = `State: ${state}`;
      newYorkCard1.textContent = `Temp: ${temperature}`;
      newYorkCard2.textContent = `Feels like: ${feelslike}`;
      newYorkCard3.textContent = `Humidity: ${humidity}`;
      newYorkCard4.textContent = `UV Index: ${uv_index}`;
      newYorkCard5.textContent = `Wind Speed: ${wind_speed}`;
    }
  });
});
