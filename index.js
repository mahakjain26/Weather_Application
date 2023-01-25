var inputBox=document.getElementById('inputValue');
var outputCity=document.getElementById('city');
var outputTemperature=document.getElementById('currTempature');
var outputDateTime=document.getElementById('currDate');
var outputWeatherUpdate=document.getElementById('weather');
var outputWeatherUpdateImg=document.getElementById('img');
var outputWindDirection=document.getElementById('windDirection');
var outputWindSpeed=document.getElementById('windSpeed');
let MaxTemp = document.getElementById('max');


APIKEY="f34800ead1ac408788883226232001";

inputBox.addEventListener('keypress',  (e)=> {
        if (e.key === "Enter") {
                fetch('https://api.weatherapi.com/v1/forecast.json?key=a6b17eeb828640a086d71334231901&q='+inputBox.value+'&appid='+APIKEY)
                .then(res=>res.json())
                .then(data=>{
                        var cityName=data.location.name
                        var tempCity=data.current.temp_c
                        var DateTime=data.location.localtime
                        var weatherUpdate=data.current.condition.text
                        var weatherUpdateIcon=data.current.condition.icon
                        var windDirec=data.current.wind_dir
                        var windSpd=data.current.wind_kph
                        var Max=data.forecast.forecastday[0].day.maxtemp_c
                        var min=data.forecast.forecastday[0].day.mintemp_c

                        // console.log(min);

                        outputCity.innerText=`Weather of ${cityName}`
                        outputTemperature.innerHTML = `Temperature: ${Math.round(tempCity)}&deg;C`
                        outputDateTime.innerText=`Date & Time : ${DateTime}`
                        outputWeatherUpdate.innerText = `Sky Conditions: ${weatherUpdate}`
                        outputWeatherUpdateImg.src = `${weatherUpdateIcon}`
                        outputWindDirection.innerText=`Wind Direction:${windDirec}`
                        outputWindSpeed.innerText=`Wind Speed:${windSpd} km/h`
                        MaxTemp.innerHTML = `${Math.floor(min)}&deg;C (min) / ${Math.ceil(Max)}&deg;C (max) `

                        if(weatherUpdate=="haze" || weatherUpdate=="Haze"){
                                document.body.style.backgroundImage="url('haze.jpg ')";
                        }
                        else if(weatherUpdate =="Overcast" || weatherUpdate =="overcast"){              
                                document.body.style.backgroundImage="url('overcast.jpg')";       
                        }
                        else if(weatherUpdate=="Mist" || weatherUpdate=="mist"){              
                                document.body.style.backgroundImage="url('mist.jpg')";            
                        }
                        else if(weatherUpdate =="Sunny" || weatherUpdate =="sunny" ){                            
                                document.body.style.backgroundImage="url('sunny weather.jpg')";       
                        }
                        else if(weatherUpdate =="Clear" || weatherUpdate =="clear" ){                            
                                document.body.style.backgroundImage="url('clear weather.jpg')";       
                        }
                        else if(weatherUpdate =="rain" || weatherUpdate =="Rain" ){                            
                                document.body.style.backgroundImage="url('rain.jpg')";       
                        }
                        else if(weatherUpdate =="storm" || weatherUpdate =="storm" ){                            
                                document.body.style.backgroundImage="url('storm.jpg')";       
                        }

                })
                .catch((err) => {
                        alert("Enter the valid location");
                      });
                
            }
        });
        
  
        















