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

      unixToTime(respuesta.sys.sunrise);
      var sunriseTimeFormatted = timeFormatted + " AM";
      $(".sunriseTime").html(sunriseTimeFormatted);

      unixToTime(respuesta.sys.sunset);
      var sunsetTimeFormatted = timeFormatted + " PM";
      $(".sunsetTime").html(sunsetTimeFormatted);



      function unixToTime(unix) {
        unix *= 1000;
        var toTime = new Date(unix);
        var hour = ((toTime.getHours() % 12 || 12) < 10 ? '0' : '') + (toTime.getHours() % 12 || 12);
        var minute = (toTime.getMinutes() < 10 ? '0' : '') + toTime.getMinutes();
        timeFormatted = hour + ":" + minute;
        return timeFormatted;
      }

     /* icons = new Skycons({
        "color": "white"
      });
      weatherI = (respuesta.weather[0].icon);
      if (weatherI == "02d") {
        $("#weatherIcon").attr('src="../img/sun-weather.gif"');
        

      }  else if (weatherI == "04d") {
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

document.getElementById("diaActual").innerHTML = diaSemana();

document.getElementById("siguiente1").innerHTML = dias[0];
document.getElementById("siguiente2").innerHTML = dias[1];
document.getElementById("siguiente3").innerHTML = dias[2];
document.getElementById("siguiente4").innerHTML = dias[3];
document.getElementById("siguiente5").innerHTML = dias[4];

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
      today = new Date();
      actualDate = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
      console.log(actualDate);
      $.each(respuesta.list, function (indice, forecast) {
        if (forecast.dt_txt.substr(0, 10) != actualDate) {
          newDate = new Date(forecast.dt_txt.substr(0, 10));
          console.log(newDate);
          Difference_In_Time = newDate.getTime() - today.getTime();
          Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
          /*console.log(Difference_In_Days);*/
          for (i=0; Difference_In_Days>=0; i++){
            console.log(Difference_In_Days);
            $(".weekDayWind1"+i).html(forecast.wind.speed);

          }
/* 
          $(".weekDayWind1").html(forecast.wind.speed);
          $(".weekDayWind2").html(forecast[1].wind.speed);
          $(".weekDayWind3").html(forecast[2].wind.speed);
          $(".weekDayWind4").html(forecast[3].wind.speed);
          $(".weekDayWind5").html(forecast[4].wind.speed);
          $(".weekDayHumid1").html(forecast[0].main.humidity);
          $(".weekDayHumid2").html(forecast[1].main.humidity);
          $(".weekDayHumid3").html(forecast[2].main.humidity);
          $(".weekDayHumid4").html(forecast[3].main.humidity);
          $(".weekDayHumid5").html(forecast[4].main.humidity);
          $(".weekDayCloud1").html(forecast[0].clouds.all);
          $(".weekDayCloud2").html(forecast[1].clouds.all);
          $(".weekDayCloud3").html(forecast[2].clouds.all);
          $(".weekDayCloud4").html(forecast[3].clouds.all);
          $(".weekDayCloud5").html(forecast[4].clouds.all); */

        }

        
        /* $(".weekDayName1").html(unixToWeekday(forecast[1].dt));
        $(".weekDayName2").html(unixToWeekday(forecast[4].dt));
        $(".weekDayName3").html(unixToWeekday(forecast[12].dt));
        $(".weekDayName4").html(unixToWeekday(forecast[9].dt));
        $(".weekDayName5").html(unixToWeekday(forecast[11].dt));
          */
        

        /* for (i = 1; i < 7; i++) {
        $(".weekDayName" + i).html(unixToWeekday(forecast[i].dt));
        }
 
        function unixToWeekday(unix) {
          unix *= 1000;
          var toWeekday = new Date(unix);
          var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          var weekday = days[toWeekday.getDay()];
          return weekday;
        } */
       

    

        /* $(".weekDayTempMax1").html(Math.round(Math.max(forecast[0].main.temp_max, forecast[1].main.temp_max, forecast[2].main.temp_max, forecast[3].main.temp_max,
          forecast[4].main.temp_max, forecast[5].main.temp_max, forecast[6].main.temp_max, forecast[7].main.temp_max) - 273).toFixed(0));
        $(".weekDayTempMax2").html(Math.round(Math.max(forecast[8].main.temp_max, forecast[9].main.temp_max, forecast[10].main.temp_max, forecast[11].main.temp_max,
          forecast[12].main.temp_max, forecast[13].main.temp_max, forecast[14].main.temp_max, forecast[15].main.temp_max) - 273).toFixed(0));
        $(".weekDayTempMax3").html(Math.round(Math.max(forecast[16].main.temp_max, forecast[17].main.temp_max, forecast[18].main.temp_max, forecast[19].main.temp_max,
          forecast[20].main.temp_max, forecast[21].main.temp_max, forecast[22].main.temp_max, forecast[23].main.temp_max) - 273).toFixed(0));
        $(".weekDayTempMax4").html(Math.round(Math.max(forecast[24].main.temp_max, forecast[25].main.temp_max, forecast[26].main.temp_max, forecast[27].main.temp_max,
          forecast[28].main.temp_max, forecast[29].main.temp_max, forecast[30].main.temp_max, forecast[31].main.temp_max) - 273).toFixed(0));
        $(".weekDayTempMax5").html(Math.round(Math.max(forecast[32].main.temp_max, forecast[33].main.temp_max, forecast[34].main.temp_max, forecast[35].main.temp_max,
          forecast[36].main.temp_max, forecast[37].main.temp_max, forecast[38].main.temp_max, forecast[39].main.temp_max) - 273).toFixed(0));

        $(".weekDayTempMin1").html(Math.round(Math.min(forecast[0].main.temp_min, forecast[1].main.temp_min, forecast[2].main.temp_min, forecast[3].main.temp_min,
          forecast[4].main.temp_min, forecast[5].main.temp_min, forecast[6].main.temp_min, forecast[7].main.temp_min) - 273).toFixed(0));
        $(".weekDayTempMin2").html(Math.round(Math.min(forecast[8].main.temp_min, forecast[9].main.temp_min, forecast[10].main.temp_min, forecast[11].main.temp_min,
          forecast[12].main.temp_min, forecast[13].main.temp_min, forecast[14].main.temp_min, forecast[15].main.temp_min) - 273).toFixed(0));
        $(".weekDayTempMin3").html(Math.round(Math.min(forecast[16].main.temp_min, forecast[17].main.temp_min, forecast[18].main.temp_min, forecast[19].main.temp_min,
          forecast[20].main.temp_min, forecast[21].main.temp_min, forecast[22].main.temp_min, forecast[23].main.temp_min) - 273).toFixed(0));
        $(".weekDayTempMin4").html(Math.round(Math.min(forecast[24].main.temp_min, forecast[25].main.temp_min, forecast[26].main.temp_min, forecast[27].main.temp_min,
          forecast[28].main.temp_min, forecast[29].main.temp_min, forecast[30].main.temp_min, forecast[31].main.temp_min) - 273).toFixed(0));
        $(".weekDayTempMin5").html(Math.round(Math.min(forecast[32].main.temp_min, forecast[33].main.temp_min, forecast[34].main.temp_min, forecast[35].main.temp_min,
          forecast[36].main.temp_min, forecast[37].main.temp_min, forecast[38].main.temp_min, forecast[39].main.temp_min) - 273).toFixed(0)); */


      });
    }


  });

});

