


    async function getWeather() {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=84f0fb1b9f95672b4ac8058f301b9c23', {mode: 'cors'});
        const catData = await response.json();
        console.log(catData);
    
    };
    
    getWeather();