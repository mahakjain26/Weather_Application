var inputBox=document.getElementById('inputValue');
var zone=document.getElementById('zone');
var outputCity=document.getElementById('city');
var outputTemperature=document.getElementById('currTempature');
var outputDateTime=document.getElementById('currDate');
var outputWeatherUpdate=document.getElementById('weather');
var outputWeatherUpdateImg=document.getElementById('img');
var outputWindDirection=document.getElementById('windDirection');
var outputWindSpeed=document.getElementById('windSpeed');
let MaxTemp = document.getElementById('max');
let humidity = document.getElementById('humidity');



APIKEY="f34800ead1ac408788883226232001";

inputBox.addEventListener('keypress',  (e)=> {
        if (e.key === "Enter") {
                fetch('https://api.weatherapi.com/v1/forecast.json?key=a6b17eeb828640a086d71334231901&q='+inputBox.value+'&appid='+APIKEY)
                .then(res=>res.json())
                .then(data=>{
                        var cityName=data.location.name
                        var outputZone=data.location.tz_id
                        var tempCity=data.current.temp_c
                        var DateTime=data.forecast.forecastday[0].date
                        var weatherUpdate=data.current.condition.text
                        var weatherUpdateIcon=data.current.condition.icon
                        var windDirec=data.current.wind_dir
                        var windSpd=data.current.wind_kph
                        var Max=data.forecast.forecastday[0].day.maxtemp_c
                        var min=data.forecast.forecastday[0].day.mintemp_c
                        var humid=data.current.humidity

                        // console.log(min);

                        outputCity.innerHTML    =`<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35px" height="34px" viewBox="0 0 395.71 395.71" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path> </g> </g></svg> ${cityName}`
                        zone.innerText=`${outputZone}`
                        outputTemperature.innerHTML = `${Math.round(tempCity)}&deg;C`
                        outputDateTime.innerText=`${DateTime}`
                        outputWeatherUpdate.innerText = `${weatherUpdate}`
                        outputWeatherUpdateImg.src = `${weatherUpdateIcon}`
                        outputWindDirection.innerHTML=`<b>WindDirection</b> <br>${windDirec}`
                        outputWindSpeed.innerHTML=`<b>WindSpeed</b> <br>${windSpd} km/h`
                        MaxTemp.innerHTML = `${Math.floor(min)}&deg;C / ${Math.ceil(Max)}&deg;C  `
                        humidity.innerHTML=`<b>Humidity</b><br>${humid}`


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
        
  
        















