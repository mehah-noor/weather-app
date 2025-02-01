const ApiKey = '73f69b74e3768b6d9acbffe48a258ef8';
const ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');


async function checkWether(city){
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
    let data = await response.json();


    // console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "Km/h";

}

searchBtn.addEventListener('click', () => {
    checkWether(searchBox.value);
});

