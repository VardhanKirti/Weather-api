const content = document.querySelector('.content');
const box = document.querySelector('.box button');
const outer = document.querySelector('.outer');
const weather = document.getElementById('weather'); 



box.addEventListener('click', () => {
    const APIKey = '027e09ddff951af9b98e6d213c64319b';
    const city = document.querySelector('.box input').value;

    if (city == '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {
        console.log(json); // Log the JSON response to the console for debugging

        const image = document.querySelector('.outer img');
        const temperature = document.querySelector('.outer .temperature');
        const about = document.querySelector('.outer .about');
        const humidity = document.querySelector('.weather .humidity span');
        const wind = document.querySelector('.weather .windy .data span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'sun.png';
                break;
            case 'Clouds':
                image.src = 'weather-icon-png-8.png';
                break;
            case 'Rain':
                image.src = 'rain.png';
                break;
            case 'Snow':
                image.src = 'snow.png';
                break;
            case 'Mist':
                image.src = 'mist.png';
                break;
            default:
                image.src = 'sun.png';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        about.innerHTML = `${json.weather[0].description}`; 
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
    });

});