const apiKey = "08a4d4d4c56166a515afc74454ba3c9f";

const btn = document.getElementById("searchBtn");

btn.onclick = async () => {
  const city = document.getElementById("cityInput").value;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  const data = await res.json();

  document.getElementById("placeholder").classList.add("hidden");
  document.getElementById("weather").classList.remove("hidden");

  document.getElementById("city").innerText = data.name;
  document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
  document.getElementById("condition").innerText = data.weather[0].main;
  document.getElementById("humidity").innerText = data.main.humidity + "%";
  document.getElementById("wind").innerText = data.wind.speed + " km/h";
};