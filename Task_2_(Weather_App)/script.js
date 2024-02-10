var inputvalue = document.querySelector('#search-field')
var submitButton = document.querySelector('button');
var city = document.querySelector('#cityResults')
var main = document.querySelector('#main')
var description = document.querySelector('#description')
var temperature = document.querySelector('#temperature')
var wind = document.querySelector('#wind')

apik = "cc7186ee70836961be05a0a8844c6de8"

function conversion(val) {
 
    return (val - 273).toFixed(1)

}

// function loader() {
//    document.getElementById("search-result-container").innerHTML =  `<div class="loader">
//     <span></span>
//     </div>`;
// }

submitButton.addEventListener('click', function() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data =>
        {

            // console.log(baseUrl);

    document.querySelector("#search-result-container").style.opacity = "1"; 

            let nameval = data['name']
            let descripOne = data['weather']['0']['main']
            // let descripTwo = data['weather']['0']['description']
            let temp = data['main']['temp']
            let windspeed = data['wind']['speed']
            city.innerHTML = `Weather of <span>${nameval}<span>`;
            // city.style.text-decoration = "dotted";
            main.innerHTML = `sky conditions: <span> ${descripOne}<span>`;
            // description.innerHTML = `Sky conditions: <span> ${descripTwo}<span>`;
            temperature.innerHTML = `Temperature: <span> ${conversion(temp)}°c</s<span>`;
            wind.innerHTML = `Wind speed: <span> ${windspeed} km/hr<span>`;
        })

        .catch(err => alert('Enter a City name !!!'))
})