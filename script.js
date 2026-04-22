// Fake weather database
const weatherData = {
    delhi: { temp: 32, condition: "Sunny ☀" },
    mumbai: { temp: 28, condition: "Cloudy ☁" },
    hyderabad: { temp: 30, condition: "Partly Cloudy 🌤" },
    chennai: { temp: 34, condition: "Hot 🔥" },
    bangalore: { temp: 25, condition: "Rainy 🌧" },
    visakhapatnam: { temp: 31, condition: "Humid 🌊" }
};

function getWeather() {
    const city = document.getElementById("cityInput").value.toLowerCase();

    if (weatherData[city]) {
        document.getElementById("cityName").innerText = city.toUpperCase();
        document.getElementById("temperature").innerText =
            "Temperature: " + weatherData[city].temp + "°C";
        document.getElementById("condition").innerText =
            "Condition: " + weatherData[city].condition;
        } else {
            alert("City not found in database!");
        }
    }