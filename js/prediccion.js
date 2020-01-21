$(document).ready(function () {
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?id=3117732&APPID=5134da6df3842f1a831f92efeeb782c1",
    datatype: "json",
    type: "GET",
    success: function (respuesta) {
      console.log(respuesta);
      tempInC = (respuesta.main.temp - 273).toFixed(0);
      feelsLikeInF = (respuesta.main.feels_like - 273).toFixed(0);
      $(".locName").html(respuesta.name);
      $(".weatherCondition").html(respuesta.weather[0].main);
      $(".currentTemp").html(tempInC);
      $(".feelsLike").html(feelsLikeInF + " °C");

      $(".windSpeed").html(respuesta.wind.speed);
      $(".humidity").html(respuesta.main.humidity);
      $(".todaySummary").html(respuesta.weather[0].description);
      $(".tempMax").html(((respuesta.main.temp_max - 273).toFixed(0)) + " °C");
      $(".tempMin").html(((respuesta.main.temp_min - 273).toFixed(0)) + " °C");

      icons = new Skycons({
        "color": "white"
      });
      weatherI = (respuesta.weather[0].icon);
      if (weatherI == "02d") {
        
        icons.set("weatherIcon", Skycons.CLEAR_DAY);
      } /* else if (weatherI == "04d") {
        icons.set("weatherIcon", Skycons.CLEAR_NIGHT);
      } else if (weatherI == "02d" || weatherI == "03d") {
        icons.set("weatherIcon", Skycons.PARTLY_CLOUDY_DAY);
      } else if (weatherI == "02n" || weatherI == "03n") {
        icons.set("weatherIcon", Skycons.PARTLY_CLOUDY_NIGHT);
      }; */

      },
  })

});

//Días

var fecha = new Date();

function diaSemana(){
	switch(fecha.getDay()){
		case 0:
			return "Sunday";
			break;
		case 1:
			return "Monday";
			break;
		case 2:
			return "Tuesday";
			break;
		case 3:
			return "Wednesday";
			break;
		case 4:
			return "Thursday";
			break;
		case 5:
			return "Friday";
			break;
		case 6:
			return "Saturday";
			break;
	}
}

function proximosDias(){
	switch(fecha.getDay()){
		case 0:
			return "Monday,Tuesday,Wednesday,Thursday,Friday";
			break;
		case 1:
			return "Tuesday,Wednesday,Thursday,Friday,Saturday";
			break;
		case 2:
			return "Wednesday,Thursday,Friday,Saturday,Sunday";
			break;
		case 3:
			return "Thursday,Friday,Saturday,Sunday,Monday";
			break;
		case 4:
			return "Friday,Saturday,Sunday,Monday,Tuesday";
			break;
		case 5:
			return "Saturday,Sunday,Monday,Tuesday,Wednesday";
			break;
		case 6:
			return "Sunday,Monday,Tuesday,Wednesday,Thursday";
			break;
	}
}

var dias = proximosDias().split(",");

document.getElementByID("diaActual").innerHTML = diaSemana();


//Dias





     // icons.set("clear-day", Skycons.CLEAR_DAY);
      //skycons.set("expectIcon", weatherData.hourly.icon);
      //icons.play();

      /* date=(respuesta.sys.sunrise);
      hour=date.getUTCHours() + ":" + date.getUTCMinutes();
      $(".sunriseTime").html(hour + " AM");
 */


          
 

$(document).ready(function () {
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?id=3117732&APPID=5134da6df3842f1a831f92efeeb782c1",
    datatype: "json",
    type: "GET",
    success: function (respuesta) {
      console.log(respuesta);
      $.each(respuesta.list, function (indice, valor) {

        $(".weekDayWind1").html(respuesta.list[0].wind.speed);
        $(".weekDayWind2").html(respuesta.list[1].wind.speed);
        $(".weekDayWind3").html(respuesta.list[2].wind.speed);
        $(".weekDayWind4").html(respuesta.list[3].wind.speed);
        $(".weekDayWind5").html(respuesta.list[4].wind.speed);
        $(".weekDayHumid1").html(respuesta.list[0].main.humidity);
        $(".weekDayHumid2").html(respuesta.list[1].main.humidity);
        $(".weekDayHumid3").html(respuesta.list[2].main.humidity);
        $(".weekDayHumid4").html(respuesta.list[3].main.humidity);
        $(".weekDayHumid5").html(respuesta.list[4].main.humidity);
        $(".weekDayCloud1").html(respuesta.list[0].clouds.all);
        $(".weekDayCloud2").html(respuesta.list[1].clouds.all);
        $(".weekDayCloud3").html(respuesta.list[2].clouds.all);
        $(".weekDayCloud4").html(respuesta.list[3].clouds.all);
        $(".weekDayCloud5").html(respuesta.list[4].clouds.all);
       

    

        $(".weekDayTempMax1").html(Math.round(Math.max(respuesta.list[0].main.temp_max, respuesta.list[1].main.temp_max, respuesta.list[2].main.temp_max, respuesta.list[3].main.temp_max,
          respuesta.list[4].main.temp_max, respuesta.list[5].main.temp_max, respuesta.list[6].main.temp_max, respuesta.list[7].main.temp_max) - 273).toFixed(0));

        $(".weekDayTempMax2").html(Math.round(Math.max(respuesta.list[8].main.temp_max, respuesta.list[9].main.temp_max, respuesta.list[10].main.temp_max, respuesta.list[11].main.temp_max,
          respuesta.list[12].main.temp_max, respuesta.list[13].main.temp_max, respuesta.list[14].main.temp_max, respuesta.list[15].main.temp_max) - 273).toFixed(0));

        $(".weekDayTempMax3").html(Math.round(Math.max(respuesta.list[16].main.temp_max, respuesta.list[17].main.temp_max, respuesta.list[18].main.temp_max, respuesta.list[19].main.temp_max,
          respuesta.list[20].main.temp_max, respuesta.list[21].main.temp_max, respuesta.list[22].main.temp_max, respuesta.list[23].main.temp_max) - 273).toFixed(0));

        $(".weekDayTempMax4").html(Math.round(Math.max(respuesta.list[24].main.temp_max, respuesta.list[25].main.temp_max, respuesta.list[26].main.temp_max, respuesta.list[27].main.temp_max,
          respuesta.list[28].main.temp_max, respuesta.list[29].main.temp_max, respuesta.list[30].main.temp_max, respuesta.list[31].main.temp_max) - 273).toFixed(0));

        $(".weekDayTempMax5").html(Math.round(Math.max(respuesta.list[32].main.temp_max, respuesta.list[33].main.temp_max, respuesta.list[34].main.temp_max, respuesta.list[35].main.temp_max,
          respuesta.list[36].main.temp_max, respuesta.list[37].main.temp_max, respuesta.list[38].main.temp_max, respuesta.list[39].main.temp_max) - 273).toFixed(0));



        $(".weekDayTempMin1").html(Math.round(Math.min(respuesta.list[0].main.temp_min, respuesta.list[1].main.temp_min, respuesta.list[2].main.temp_min, respuesta.list[3].main.temp_min,
          respuesta.list[4].main.temp_min, respuesta.list[5].main.temp_min, respuesta.list[6].main.temp_min, respuesta.list[7].main.temp_min) - 273).toFixed(0));

        $(".weekDayTempMin2").html(Math.round(Math.min(respuesta.list[8].main.temp_min, respuesta.list[9].main.temp_min, respuesta.list[10].main.temp_min, respuesta.list[11].main.temp_min,
          respuesta.list[12].main.temp_min, respuesta.list[13].main.temp_min, respuesta.list[14].main.temp_min, respuesta.list[15].main.temp_min) - 273).toFixed(0));

        $(".weekDayTempMin3").html(Math.round(Math.min(respuesta.list[16].main.temp_min, respuesta.list[17].main.temp_min, respuesta.list[18].main.temp_min, respuesta.list[19].main.temp_min,
          respuesta.list[20].main.temp_min, respuesta.list[21].main.temp_min, respuesta.list[22].main.temp_min, respuesta.list[23].main.temp_min) - 273).toFixed(0));

        $(".weekDayTempMin4").html(Math.round(Math.min(respuesta.list[24].main.temp_min, respuesta.list[25].main.temp_min, respuesta.list[26].main.temp_min, respuesta.list[27].main.temp_min,
          respuesta.list[28].main.temp_min, respuesta.list[29].main.temp_min, respuesta.list[30].main.temp_min, respuesta.list[31].main.temp_min) - 273).toFixed(0));

        $(".weekDayTempMin5").html(Math.round(Math.min(respuesta.list[32].main.temp_min, respuesta.list[33].main.temp_min, respuesta.list[34].main.temp_min, respuesta.list[35].main.temp_min,
          respuesta.list[36].main.temp_min, respuesta.list[37].main.temp_min, respuesta.list[38].main.temp_min, respuesta.list[39].main.temp_min) - 273).toFixed(0));


      });
    }


  });

});

