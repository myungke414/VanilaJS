const API_KEY = "228540e6e048fe7e3e104d75e077eb0a";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    // console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} `;
    }); //시간이 좀 걸린뒤에 일어나는 일 = promise
}
function onGeoError(){
    alert("Cant't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);