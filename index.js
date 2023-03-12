const weather= {
	"apiKey":"ed70c62d4b74ab6e22caf6c4076cc4d5",
	fetchWeather: function(city){
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey
        ).then((response)=>response.json())
	 .then((data)=> {
	const {name}= data;
	const {icon,description}= data.weather[0];
	const {temp,humidity} =data.main;
	const {speed}=data.wind;
	console.log(name,icon,description,temp,humidity,speed);		
	document.querySelector(".city").innerText= "weather in " + name;
	document.querySelector(".temp").innerText=temp+"°c";
	document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";	
	document.querySelector(".discription").innerText=description;
	document.querySelector(".humidity").innerText="humidity : "+humidity+"%";
	document.querySelector(".wind").innerText="wind speed : "+ speed +" km/hours";
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?"+ name +"')"
})
.catch(()=>{alert("invalid City Name...");})

},

// to get value frome user and pass it to the 
// weather functin as an argument
search: function(){ 
this.fetchWeather(document.querySelector(".search-bar").value);	
},
};

// when user click on search button
document.querySelector(".search button").addEventListener("click",function() {
	weather.search();
})

//when user press enter
document.querySelector(".search-bar").addEventListener("keyup",function(event){
 if(event.key == "Enter"){
	weather.search();
 }

 })

// to show real time data when page load
weather.fetchWeather("pune");