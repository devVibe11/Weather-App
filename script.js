const cloudCover = document.getElementById('cloudCover');
const humidity = document.getElementById('humidity');
const temperature = document.getElementById('temperature');
const uvIndex = document.getElementById('uvIndex');
const windSpeed = document.getElementById('windSpeed');
const windDirection = document.getElementById('windDirection');
let windDirection11 = document.getElementById('windDirection11');
const dewPoint = document.getElementById('dewPoint');
const iceAccumulation = document.getElementById('iceAccumulation');
const rainIntensity = document.getElementById('rainIntensity');
const submitButton = document.getElementById('submit');
let cityName = document.getElementById('cityName');
let city = document.getElementById('city'); 

const url = 'https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=42.15%2C%2082%2C1&timesteps=1h&units=metric';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f2a4819fbamshfe3c4b645123068p116598jsnc5a5ca5f42a9',
    'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
  }
};

const getWeather=(city)=>{
	const locationParam=encodeURIComponent(city);
	const dynamicUrl = `https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=${locationParam}&timesteps=1h&units=metric`;
    cityName.innerHTML=city
fetch(dynamicUrl, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Log the parsed JSON response to the console for inspection
    console.log('Parsed JSON:', data);

    // Accessing values from the response structure
    const interval = data.timelines?.hourly?.[0]?.values;

    if (interval) {
      cloudCover.innerHTML = interval.cloudCover;
      humidity.innerHTML = interval.humidity;
      temperature.innerHTML = interval.temperature;
      uvIndex.innerHTML = interval.uvIndex;
      windSpeed.innerHTML = interval.windSpeed;
      windDirection.innerHTML = interval.windDirection;
      dewPoint.innerHTML = interval.dewPoint;
      iceAccumulation.innerHTML = interval.iceAccumulation;
      rainIntensity.innerHTML = interval.precipitationProbability;
    } else {
      console.error('Unable to extract values from the response');
    }
  })
  .catch(error => console.error(error));
}

submitButton.addEventListener("click", (e)=>{
	console.log("button click")
	e.preventDefault()
 	getWeather(city.value)
 })
getWeather("Delhi")

let degrees = windDirection; 

function degreesToDirection(degrees) {
  if (degrees >= 337.5 || degrees < 22.5) {
    return 'N';
  } else if (degrees >= 22.5 && degrees < 67.5) {
    return 'NE';
  } else if (degrees >= 67.5 && degrees < 112.5) {
    return 'E';
  } else if (degrees >= 112.5 && degrees < 157.5) {
    return 'SE';
  } else if (degrees >= 157.5 && degrees < 202.5) {
    return 'S';
  } else if (degrees >= 202.5 && degrees < 247.5) {
    return 'SW';
  } else if (degrees >= 247.5 && degrees < 292.5) {
    return 'W';
  } else {
    return 'NW';
  }
}

windDirection11.innerHTML = degreesToDirection(degrees);;
console.log(`Wind direction: ${degreesToDirection(degrees)}`);

let  delhi=new Promise((resolve,reject)=>{setTimeout(()=>{



const dynamicUrl1 = `https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=delhi&timesteps=1h&units=metric`;
   
fetch(dynamicUrl1, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Log the parsed JSON response to the console for inspection
    console.log('Parsed JSON:', data);

    // Accessing values from the response structure
    const interval = data.timelines?.hourly?.[0]?.values;

    if (interval) {
      cloudCover1.innerHTML = interval.cloudCover;
      humidity1.innerHTML = interval.humidity;
      temperature1.innerHTML = interval.temperature;
      uvIndex1.innerHTML = interval.uvIndex;
      windSpeed1.innerHTML = interval.windSpeed;
      windDirection1.innerHTML = interval.windDirection;
      dewPoint1.innerHTML = interval.dewPoint;
      iceAccumulation1.innerHTML = interval.iceAccumulation;
      rainIntensity1.innerHTML = interval.precipitationProbability;
    } else {
      console.error('Unable to extract values from the response');
    }
  })
  .catch(error => console.error(error));
},1000)})


let  banglore=new Promise((resolve,reject)=>{setTimeout(()=>{
const dynamicUrl2 = `https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=banglore&timesteps=1h&units=metric`;
   
fetch(dynamicUrl2, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Log the parsed JSON response to the console for inspection
    console.log('Parsed JSON:', data);

    // Accessing values from the response structure
    const interval = data.timelines?.hourly?.[0]?.values;

    if (interval) {
      cloudCover2.innerHTML = interval.cloudCover;
      humidity2.innerHTML = interval.humidity;
      temperature2.innerHTML = interval.temperature;
      uvIndex2.innerHTML = interval.uvIndex;
      windSpeed2.innerHTML = interval.windSpeed;
      windDirection2.innerHTML = interval.windDirection;
      dewPoint2.innerHTML = interval.dewPoint;
      iceAccumulation2.innerHTML = interval.iceAccumulation;
      rainIntensity2.innerHTML = interval.precipitationProbability;
    } else {
      console.error('Unable to extract values from the response');
    }
  })
  .catch(error => console.error(error));
},2000)})


let  kolkata=new Promise((resolve,reject)=>{setTimeout(()=>{
const dynamicUrl3 = `https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=kolkata&timesteps=1h&units=metric`;
   
fetch(dynamicUrl3, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Log the parsed JSON response to the console for inspection
    console.log('Parsed JSON:', data);

    // Accessing values from the response structure
    const interval = data.timelines?.hourly?.[0]?.values;

    if (interval) {
      cloudCover3.innerHTML = interval.cloudCover;
      humidity3.innerHTML = interval.humidity;
      temperature3.innerHTML = interval.temperature;
      uvIndex3.innerHTML = interval.uvIndex;
      windSpeed3.innerHTML = interval.windSpeed;
      windDirection3.innerHTML = interval.windDirection;
      dewPoint3.innerHTML = interval.dewPoint;
      iceAccumulation3.innerHTML = interval.iceAccumulation;
      rainIntensity3.innerHTML = interval.precipitationProbability;
    } else {
      console.error('Unable to extract values from the response');
    }
  })
  .catch(error => console.error(error));
},3000)})

let  shangai=new Promise((resolve,reject)=>{setTimeout(()=>{
const dynamicUrl4 = `https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=shangai&timesteps=1h&units=metric`;
   
fetch(dynamicUrl4, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Log the parsed JSON response to the console for inspection
    console.log('Parsed JSON:', data);

    // Accessing values from the response structure
    const interval = data.timelines?.hourly?.[0]?.values;

    if (interval) {
      cloudCover4.innerHTML = interval.cloudCover;
      humidity4.innerHTML = interval.humidity;
      temperature4.innerHTML = interval.temperature;
      uvIndex4.innerHTML = interval.uvIndex;
      windSpeed4.innerHTML = interval.windSpeed;
      windDirection4.innerHTML = interval.windDirection;
      dewPoint4.innerHTML = interval.dewPoint;
      iceAccumulation4.innerHTML = interval.iceAccumulation;
      rainIntensity4.innerHTML = interval.precipitationProbability;
    } else {
      console.error('Unable to extract values from the response');
    }
  })
  .catch(error => console.error(error));
},4000)})

let  tokyo=new Promise((resolve,reject)=>{setTimeout(()=>{
const dynamicUrl5 = `https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?location=tokyo&timesteps=1h&units=metric`;
   
fetch(dynamicUrl5, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Log the parsed JSON response to the console for inspection
    console.log('Parsed JSON:', data);

    // Accessing values from the response structure
    const interval = data.timelines?.hourly?.[0]?.values;

    if (interval) {
      cloudCover5.innerHTML = interval.cloudCover;
      humidity5.innerHTML = interval.humidity
      temperature5.innerHTML = interval.temperature;
      uvIndex5.innerHTML = interval.uvIndex;
      windSpeed5.innerHTML = interval.windSpeed;
      windDirection5.innerHTML = interval.windDirection;
      dewPoint5.innerHTML = interval.dewPoint;
      iceAccumulation5.innerHTML = interval.iceAccumulation;
      rainIntensity5.innerHTML = interval.precipitationProbability;
    } else {
      console.error('Unable to extract values from the response');
    }
  })
  .catch(error => console.error(error));
},4000)})

let loc=promise.all([delhi,banglore,kolkata,shangai,tokyo])
.then(
   loc()
)
