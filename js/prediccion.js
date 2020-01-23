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


// FUNCIÓN CAMBIO DE HORAS UNIX A 12H
      function unixToTime(unix) {
        unix *= 1000;
        var toTime = new Date(unix);
        var hour = ((toTime.getHours() % 12 || 12) < 10 ? '0' : '') + (toTime.getHours() % 12 || 12);
        var minute = (toTime.getMinutes() < 10 ? '0' : '') + toTime.getMinutes();
        timeFormatted = hour + ":" + minute;
        return timeFormatted;
      }

//FUNCIÓN LLUVIA
      if (respuesta.sys.rain == undefined) {
         $(".rainVol").html("no hubo lluvia la ultima hora");
      } else {
         $(".rainVol").html(respuesta.sys.rain["1h"]);
      }

//FUNCIÓN NIEVE
      if (respuesta.sys.snow == undefined) {
        $(".snowVol").html("no hubo nieve la ultima hora");
      } else {
        $(".snowVol").html(respuesta.sys.snow["1h"]);
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
 

$(document).ready(function () {
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?id=3117732&APPID=5134da6df3842f1a831f92efeeb782c1",
    datatype: "json",
    type: "GET",
    success: function (respuesta) {
      console.log(respuesta);
      today = new Date();
      today.setHours(0,0,0,0);
      $.each(respuesta.list, function (indice, forecast) {
          newDate = new Date(forecast.dt_txt);
          newDate.setHours(0, 0, 0, 0);
          DifInTime = newDate - today;
          DifInDays = DifInTime / (1000 * 3600 * 24);
          console.log(DifInDays);
        
          $(".weekDayWind" + DifInDays).html(forecast.wind.speed);
          $(".weekDayHumid" + DifInDays).html(forecast.main.humidity);
          $(".weekDayCloud" + DifInDays).html(forecast.clouds.all) 
          $(".weekDayTempMax" + DifInDays).html(((forecast.main.temp_max) - 273).toFixed(0));
          $(".weekDayTempMin" + DifInDays).html(((forecast.main.temp_min) - 273).toFixed(0));     

        /* var myProp = 'snow';
        if(myProp in respuesta){
            alert("yes, i have that property");
        }else{
          alert("no llueve");
        } */

       

        /* $(".weekDayTempMax1").html(Math.round(Math.max(forecast[0].main.temp_max, forecast[1].main.temp_max, forecast[2].main.temp_max, forecast[3].main.temp_max,
          forecast[4].main.temp_max, forecast[5].main.temp_max, forecast[6].main.temp_max, forecast[7].main.temp_max) - 273).toFixed(0));*/
          

      });
    }
  });
});


//FUNCIÓN DÍAS DE LA SEMANA

var fecha = new Date();

function diaSemana() {
  switch (fecha.getDay()) {
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

function proximosDias() {
  switch (fecha.getDay()) {
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