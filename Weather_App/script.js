// here we create two variable to store API keys and another for Api Url
const apiKeys = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=varanasi";
        
// now here we create async function and name for this function that is checkWeather
async function checkWeather() {
    const responce = await fetch(apiUrl + `&appid=&{apiKeys}`); // in this fetch() function we wil add apiUrl variable 
    // and apiKeys variable.
    var data = await responce.json();
    // for displaying data we use console
    console.log(data);
    

    // select Data(city) from html and it will update from here 
    document.querySelector(".city").innerHTML = data.name;
    // it will update the temp data from here.
    document.querySelector(".temp").innerHTML = data.main.temp;   // temp is inside the main see in console
    // and for Humidity 
    document.querySelector(".humidity").innerHTML = data.main.humidity;  // humidity is inside the main see in console
    // and from here we will update the wind information
    document.querySelector(".wind").innerHTML = data.wind.speed;
            
}
checkWeather(); // here we call the function