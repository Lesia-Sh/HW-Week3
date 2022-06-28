let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 19.7,
    humidity: 80
  },
  lisbon: {
    temp: 19.7,
    humidity: 80
  },
  "san francisco": {
    temp: 19.7,
    humidity: 80
  },
  kyiv: {
    temp: 19.7,
    humidity: 80
  }
};
let city = prompt("Enter a city");
city = city.toLowerCase();
city = city.trim();

if (weather[city] !== undefined) {
  let temp = weather[city].temp;
  let celsiusTemp = Math.round(temp);
  let fahrenheitTemp = Math.round(temp * 1.8 + 38);
  alert(
    `It is currently ${celsiusTemp}ºC (${fahrenheitTemp}ºF) in ${city} with a humidity of ${weather[city].humidity}%.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
