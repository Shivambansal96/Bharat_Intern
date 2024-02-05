var inputvalue = document.querySelector('#search-field')
var submitButton = document.querySelector('button');
var city = document.querySelector('#cityResults')
var description = document.querySelector('#description')
var temperature = document.querySelector('#temperature')
var wind = document.querySelector('#wind')

apik = "cc7186ee70836961be05a0a8844c6de8"

function convertion(val) {
 
    return (val - 273).toFixed(3)

}

submitButton.addEventListener('click', function() {

    // document.querySelector("#search-result-container").style.display = "block"; 
    

    // document.querySelector("#search-result-container").style.display = "block"; 

    function loader() {
        let loadingElement = document.createElement('div');
        let loadingSpan = document.createElement('span');

        loadingElement.setAttribute('class', 'loader');

        const searchContainer = document.getElementById("search-result-container");
        loadingSpan.append(loadingElement);
        
        searchContainer.append(loadingElement)



    }

    loader()


    // const searchResultbG = document.createElement('div');

    // searchResultbG.style.backgroundColor = "rgba(0, 0, 0, 0.4";

    // document.querySelector("search-result-container").appendChild(searchResultbG)
    // searchResultbG.append(city, description, temperature, wind)

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())
    .then(data =>
        {

    // document.querySelector("#search-result-container").style.display = "block"; 

            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temp = data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML = `Weather of <span>${nameval}<span>`
            temperature.innerHTML = `Temperature: <span> ${convertion(temp)} c</s<span>`
            description.innerHTML = `sky conditions: <span> ${descrip}<span>`
            wind.innerHTML = `wind speed: <span> ${wndspeed} km/h<span>`
        })

        .catch(err => alert('You entered wrong City name !!!'))
})