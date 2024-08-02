let countryCode = document.querySelector('.countryCode')
let citynamemain = document.querySelector('.citynamemain')
let mainTemp = document.querySelector('.mainTemp')
let tempMin = document.querySelector('.tempMin')
let tempMax = document.querySelector('.tempMax')
let windSpeed = document.querySelector('.windSpeed')
let degree = document.querySelector('.degree')

let sunrise = document.querySelector('.sunrise')
let sunset = document.querySelector('.sunset')
let pressure = document.querySelector('.pressure')
let humidity = document.querySelector('.humidity')
let seaLevel = document.querySelector('.seaLevel')
let input = document.querySelector('input')

let city = prompt("enter city name")

let fetching = async () => {
  let resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12a8706d052c4b8d12686a30a9542686`)
  let data = await resp.json()
  console.log(data)
   countryCode.textContent = data.sys.country
 citynamemain.textContent = data.name
  mainTemp.textContent = data.main.temp+"K"
  tempMin.textContent="tempMin:"+data.main.temp_min
  tempMax.textContent="tempMax:"+data.main.temp_max
   windSpeed.textContent= "wind:"+data.wind.speed
   degree.textContent="deg:"+ data.wind.deg
   sunrise.textContent="sunrise:"+ data.sys.sunrise
   sunset.textContent="sunset:"+data.sys.sunset
pressure.textContent="pressure:"+data.main.pressure
humidity.textContent="humidity:"+data.main.humidity

}


fetching()

