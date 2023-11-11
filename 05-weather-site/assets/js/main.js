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
                setTimeout(() => this.styleAddClass(card, "opcty-1"), 1);
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
                const btnShowForecast = this.createEl("button", "Previsão", "btn-show-forecast");
                parentForecast.appendChild(btnShowForecast);
                const parentDays = this.createEl("ul", undefined, "container-days");
                for(let i = 0; i < 3; i++){
                    parentDays.appendChild(this.createDayItemInfo(getIndexForecastDay.next().value));
                }
                this.hideAndShowForecast(btnShowForecast, parentDays);

                parentForecast.appendChild(parentDays);
                parentWeatherCardInfos.appendChild(header);
                parentWeatherCardInfos.appendChild(h2Description);
                parentWeatherCardInfos.appendChild(parentTempWind);
                parentWeatherCardInfos.appendChild(parentForecast);

                return parentWeatherCardInfos;
            },

            createDayItemInfo(getIndexForecastDay) {
                const parentDayItemInfos = this.createEl("li", undefined, "day-item-infos");
                parentDayItemInfos.appendChild(this.createEl("span", `Dia: ${this.forecast[getIndexForecastDay].day}` ,"day"));
                const parentTempWind2 = this.createEl(undefined, undefined, "container-temp-wind");
                parentTempWind2.appendChild(this.createEl("span", `Temperatura: ${this.forecast[getIndexForecastDay].temperature}` ,"span-1"));
                parentTempWind2.appendChild(this.createEl("span", `Vento: ${this.forecast[getIndexForecastDay].wind}` ,"span-1"));
                parentDayItemInfos.appendChild(parentTempWind2);

                return parentDayItemInfos;
            },

            addToContainerResults(card) {
                const containerResults = document.querySelector(".container-search-results");

                containerResults.appendChild(card);
            },
            
            styleAddClass(el, attributeName) {
                el.classList.add(attributeName);
            },

            hideAndShowForecast(el, containerDays) {
                el.addEventListener("click", () => {
                    const computedStyleDisplay = getComputedStyle(containerDays).display;
            
                    computedStyleDisplay === "none"? containerDays.style.display = "block" : containerDays.style.display = "none";
                });
            }
        }
    }
})();