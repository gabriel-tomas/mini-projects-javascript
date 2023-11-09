(() => {
    const inputCity = document.querySelector("#input-city");
    

    inputCity.addEventListener("keypress", (e) => {
        if(e.key == "Enter") {
            const city = inputCity.value;
            getWeather(city, createWeatherCard);
        }
    });

    function getWeather(city, callback) {
        const urlWeatherApi = `https://goweather.herokuapp.com/weather/${city}`;
        
        fetch(urlWeatherApi).then(
            (e) => {e.json().then((response) => {
                    const res = response;
                    console.log(res);
                    if(callback) callback(res).createCard();
                });
            }
        );
    }

    //{
    //            "temperature": "+28 °C",
    //            "wind": "17 km/h",
    //            "description": "Partly cloudy",
    //            "forecast": [
    //                {
    //                    "day": "1",
    //                    "temperature": "+29 °C",
    //                    "wind": "19 km/h"
    //                },
    //                {
    //                    "day": "2",
    //                    "temperature": "31 °C",
    //                    "wind": "22 km/h"
    //                },
    //                {
    //                    "day": "3",
    //                    "temperature": " °C",
    //                    "wind": "21 km/h"
    //                }
    //            ]
    //        }

    function createWeatherCard(args) {
        return {
            city: inputCity.value,
            temperature: args["temperature"],
            wind: args["wind"],
            description: args["description"],
            forecast: args["forecast"],

            createCard() {
                const card = this.createTreeEl();
                this.addToContainerResults(card);
            },

            createEl(el = "div", content, className) {
                el = document.createElement(el);
                
                if(content) el.innerText = content;
                if(className) el.classList.add(className);

                return el;
            },

            createTreeEl() {
                const IndexForecastDay = function*() {
                    yield 0;
                    yield 1;
                    yield 2;
                }

                const getIndexForecastDay = IndexForecastDay();

                const parentWeatherCardInfos = this.createEl(undefined, undefined, className="container-weather-card-infos");

                const header = this.createEl("header", undefined, "container-city");
                header.appendChild(this.createEl("h2", this.city));

                const h2Description = this.createEl("h3", this.description, "title2");

                const parentTempWind = this.createEl(undefined, undefined, "container-temp-wind");
                parentTempWind.appendChild(this.createEl("span", `Temperatura: ${this.temperature}`, "span-0"));
                parentTempWind.appendChild(this.createEl("span", `Vento: ${this.wind}`, "span-0"));

                const parentForecast = this.createEl(undefined, undefined, "container-forecast");
                parentForecast.appendChild(this.createEl("button", "Previsão", "btn-show-forecast"));
                const parentDays = this.createEl("ul", undefined, "container-days");
                const parentDayItemInfos = this.createEl("li", undefined, "day-item-infos");
                parentDayItemInfos.appendChild(this.createEl("span", `Dia: ${this.forecast[getIndexForecastDay.next().value].day}` ,"day"));
                const parentTempWind2 = this.createEl(undefined, undefined, "container-temp-wind");
                parentTempWind2.appendChild(this.createEl("span", `Temperatura: ${this.forecast[getIndexForecastDay.next().value].temperature}` ,"span-1"));
                parentTempWind2.appendChild(this.createEl("span", `Temperatura: ${this.forecast[getIndexForecastDay.next().value].wind}` ,"span-1"));
                parentDayItemInfos.appendChild(parentTempWind2);
                parentDays.appendChild(parentDayItemInfos);
                parentForecast.appendChild(parentDays);
                
                parentWeatherCardInfos.appendChild(header);
                parentWeatherCardInfos.appendChild(h2Description);
                parentWeatherCardInfos.appendChild(parentTempWind);
                parentWeatherCardInfos.appendChild(parentForecast);

                return parentWeatherCardInfos;
            },

            addToContainerResults(card) {
                const containerResults = document.querySelector(".container-search-results");

                containerResults.appendChild(card);
            }
        }
    }
})();