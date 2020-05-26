window.addEventListener('load', ()=>{
 	let long;
 	let lat;
 
 	let temperature_description = document.querySelector('.temperature-description');
 	let temperature_degree = document.querySelector('.temperature-degree');
 	let timeZone = document.querySelector('.location-timezone');
 	let degreeSection= document.querySelector('.degree-section');
 	const degreeSpan = document.querySelector('.degree-section span')


 	if(navigator.geolocation){
 		navigator.geolocation.getCurrentPosition(position =>{
 			long = position.coords.longitude;
 			lat = position.coords.latitude;
 			

 			//const proxy = 'https://cors-anywhere.herokuapp.com/'
 			//const api = `${proxy}https://api.darksky.net/forecast/5e684b8febcb7a3e6e7e624a0d1eabda/${lat},${long}`;
 			const api = 'https://ipapi.co/json/';

 			fetch(api)
 			.then(function(response){
 				return response.json()
 			})
 			.then(function(data){
 				console.log(data)
 				const {temperature, summary} = data;

 				// fetch data from api to DOM element
 				temperature_degree.textContent =temperature;
 				temperature_description.textContent =summary;
 				timeZone.textContent = data.timezone;
 				// Formula for celsius
 				let celsius = (temperature -32 ) * (5 / 9)
 				// change temperature from farenheit to celsius
 				degreeSection.addEventListener('click', ()=>{
 					if (degreeSpan.textContent==='F') {
 						degreeSpan.textContent="C"
 						temperature_degree.textContent =Math.floor(celsius);
 					}else{
 						degreeSpan.textContent="F"
 						temperature_degree.textContent =temperature;
 					}
 				})

 			})
 		});

 	}
 })