$(document).ready(function () {

	let lat, long, city, zipcode, time, date, day;
	let iconDict = {};
	let unit = '&units=metric';
	let apiURL = 'https://api.openweathermap.org/data/2.5/weather?';
	const apiKey = '&appid=ea859f4ebcd1310891754d1b05c9ebfe';
	
	let icons = new Skycons({
		"color": "white"
	});
	
	//iconDict[] = 
	let setIcon = (id) => {
		console.log(time)
		if(time.includes('am'))
			day = true;
		else
			day = false;

		if(day){
			icons.set("Clear", Skycons.CLEAR_DAY);
			icons.set("Partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
		}
		else{
			icons.set("Clear", Skycons.CLEAR_NIGHT);
			icons.set("Partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
		}
		icons.set("Clouds", Skycons.CLOUDY);
		icons.set("Drizzle", Skycons.RAIN);
		icons.set("Rain", Skycons.RAIN);
		icons.set("Sleet", Skycons.SLEET);
		icons.set("Snow", Skycons.SNOW);
		icons.set("Wind", Skycons.WIND);
		icons.set("Haze", Skycons.FOG);//Atmosphere
		
		icons.play();

	}

	let clear = () => document.querySelector("#city").value = '';

	let getAPI = async(api) => {
		fetch(api)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				let temperature = data.main.temp;
				let min_temperature = data.main.temp_min;
				let max_temperature = data.main.temp_max;
				let description = data.weather[0].description;
				let icon_id = data.weather[0].main;
				let location = data.name;

				// Set response into DOM
				document.querySelector(".temperature").textContent = Math.floor(temperature);
				document.querySelector(".description").textContent = description;
				document.querySelector(".location").textContent = location;
				document.querySelector(".icon").setAttribute('id', icon_id);

				if (document.querySelector("#city").value)
					document.querySelector("#city").value = location;
			})
			.then(data => {
				setIcon(icon_id);
			})
			.catch(err => console.log(err))
	}

	let useCity = () => {
		let city = document.querySelector("#city").value;
		if (city) {
			let param = apiURL + 'q=' + city + apiKey + unit;
			getAPI(param);
		}
		
	}

	let useGPS = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				let param; 
				lat = position.coords.latitude;
				long = position.coords.longitude;
				param = apiURL + 'lat=' + lat + '&lon=' + long + apiKey + unit;

				getAPI(param);
				clear();
			});
		}
		else alert("Geolation is not enabled!")
	}

	// Event Listener
	document.getElementById("button-gps").addEventListener("click", useGPS);
	document.getElementById("button-search").addEventListener("click", useCity);

	// Onload
	setInterval(() => {// We create a new Date object and assign it to a variable called "time".
		time = moment().format("h:mm a");
		date = moment().format("ddd, MMMM DD");

		document.querySelector('.clock').innerHTML = time;
		document.querySelector('.date').innerHTML = date;
	}, 1000);
	useGPS();
});