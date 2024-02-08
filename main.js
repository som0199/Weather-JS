let qoute = document.querySelector(".h1")
let form = document.querySelector("form")
let input = document.querySelector("input")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let p= document.querySelector("p")
let img= document.querySelector("#img1")
let h5 =  document.querySelector("h5")
let h52 = document.getElementById("second")
let cards = document.querySelector(".card")
let body = document.querySelector("body")
body.style.backgroundImage = "url(https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHx3ZWF0aGVyJTIwYXBwfGVufDB8fDB8fHww)"
body.style.backgroundPosition = "start"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundSize = "cover"
body.style.objectFit = "cover"




const fetchData = async(e) =>{
    e.preventDefault();
    try{
    const respon = await fetch(`https://api.weatherapi.com/v1/current.json?key=79e3902ab96d4464bfd85005240401&q=${input.value}&aqi=yes`)
    const data = await respon.json();
    // console.log(data)
     
    h1.innerText = data.current.temp_c+ "°C";
    h2.innerText = data.location.name;
    img.setAttribute('src', data.current.condition.icon)
    p.innerText = data.current.condition.text;
    h5.innerText = `Humidity: ${data.current.humidity}%`;
    h52.innerText =  `Wind Speed: ${data.current.wind_kph}km/h`;
    if(data.current.condition.text === "Sunny" ){
        cards.style.backgroundColor = "lightyellow"
        cards.style.color="black"
    }else if(data.current.condition.text === "Fog"){
        cards.style.backgroundColor = "lavender"
        cards.style.color = "gray"
    }else if(data.current.condition.text === "Mist") {
        cards.style.backgroundColor = "lightgray"
        cards.style.color = "rgb(50, 50, 50)"
    }else if(data.current.condition.text === "Clear"){
        cards.style.backgroundColor = "lightskyblue"
    }else{
        cards.style.backgroundColor = "gray"
        cards.style.color = "aliceBlue"
    }
    

    }
    catch{
        window.alert("Invalid City Name")
    }
    form.reset();
};
form.addEventListener("submit",fetchData);
