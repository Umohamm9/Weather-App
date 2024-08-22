// // const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=Chicago';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': '19369fc15bmshf06125ba5cc0debp1ec144jsn7abe0846248f',
//         'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
//     }
// };

// const getWeather = (city) => {
//     cityName.innerHTML = city
// fetch('https://weather-api138.p.rapidapi.com/weather?city_name=' + city, options)
//     .then(response => response.json())
//     .then(response => {
//         console.log(response)
//         // visibility.innerHTML = response.visibility
//         temp.innerHTML = response.temp
//         timezone.innerHTML = response.timezone
//         temp2.innerHTML = response.temp2
//         feels_like.innerHTML = response.feels_like
//         humidity.innerHTML = response.humidity
//         humidity2.innerHTML = response.humidity2
//         temp_min.innerHTML = response.temp_min
//         temp_max.innerHTML = response.temp_max
//         speed.innerHTML = response.speed
//         speed2.innerHTML = response.speed2
//         deg.innerHTML = response.deg
//         sunrise.innerHTML = response.sunrise
//         sunset.innerHTML = response.sunset

//     })
//     .catch(err => console.error(err));
// }

// submit.addEventListener("click", (e)=>{
//     e.preventDefault()
//     getWeather(city.value)

// })

// getWeather("chicago")

const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '19369fc15bmshf06125ba5cc0debp1ec144jsn7abe0846248f',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

const getWeather = (city) => {
    cityName.innerHTML = city
fetch( 'https://open-weather13.p.rapidapi.com/city/landon/EN', options)
.then(response => response.json())
.then(response => {
    console.log(response)
    temp.innerHTML = response.temp
    timezone.innerHTML = response.timezone
    temp2.innerHTML = response.temp2
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity2
    temp_min.innerHTML = response.temp_min
    temp_max.innerHTML = response.temp_max
    speed.innerHTML = response.speed
    speed2.innerHTML = response.speed2
    deg.innerHTML = response.deg
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset

})
.catch(err => console.error(err));
};
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)

})
getWeather("chicago")
