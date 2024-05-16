const apikey = "16791e2302213eb572f35634a4929883";
      const apiurl =
        "https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";
      const searchbox = document.querySelector(".search input");
      const searchbtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");

      async function checkweather(city) {
        const res = await fetch(apiurl + city + `&appid=${apikey}`);
        if (res.status == 404) {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
        } else {
          var data = await res.json();

          console.log(data);
          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "ºC";
          document.querySelector(".humidity").innerHTML =
            data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

          if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
          } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
          } else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
          } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
          } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
          }
          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";
        }
      }
      searchbtn.addEventListener("click", () => {
        checkweather(searchbox.value);
      });
