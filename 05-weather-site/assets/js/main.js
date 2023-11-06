(() => {
    const inputCity = document.querySelector("#input-city");
    

    inputCity.addEventListener("keypress", (e) => {
        if(e.key == "Enter") {
            const city = inputCity.value;
            getWeather(city);
        }
    });

    function getWeather(city) {
        const urlWeatherApi = `https://goweather.herokuapp.com/weather/${city}`;

        console.log(fetch(urlWeatherApi).then(
            (e) => {e.json().then((response) => {
                    const res = response;
                    console.log(res);
                });
            }
        ));
    }
})();