
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const url_key = "391fdadd0040b0af6b8e01c9b5e0f5c5";

const input = document.getElementsByClassName("search_input")[0];
const button = document.getElementsByClassName("search_icon")[0];
const image = document.getElementsByClassName("img_1")[0];

// const value = input.value;
// console.log(input);
// // const upperCase = value.charAT(0).toUpperCase() + value.slice(1);



async function weather(city){
    
    const a = await fetch(url + city +"&appid=" + url_key);
    if(a.status!=404){
    let data = await a.json();

console.log(data)
document.querySelector("h2").innerHTML=Math.floor(data.main.temp) +"°C";
document.querySelector("h4").innerHTML=data.name;
document.querySelector("#wind_value").innerHTML=Math.floor(data.wind.speed) +" km/h";
document.querySelector("#humidity_value").innerHTML=Math.floor(data.main.humidity) +" %";


let e = document.getElementById("info");
    e.style.display="block"
    let d = document.getElementsByClassName("invaild")[0];
    d.style.display="none"   

    if(data.weather[0].main=="Thunderstorm"){
        
        image.src="rain.png";
    }
    else if(data.weather[0].main=="Clouds"){
        
        image.src="clouds.png";
        
        
    }
    else{
        
        image.src="sun_icon.png";
       

    }
}
else{
    let e = document.getElementById("info");
    e.style.display="none"
    let d = document.getElementsByClassName("invaild")[0];
    d.style.display="block"

}
}


button.addEventListener("click",()=>{
    weather(input.value);
    
})

input.addEventListener("keypress",(event)=>{
    if(event.key == "Enter"){
        weather(input.value);
    }
    
})
