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
      $(".windSpeed").html((respuesta.wind.Speed));
      $(".todaySummary").html(respuesta.weather[0].description);
      $(".weekDayTempMin1").html(respuesta.);
      /* $.each(respuesta, function (indice, valor) {
        
        $(".currentTemp").html(valor.temp);
        $(".weatherCondition").html(valor.weather);
        $(".feelsLike").html(valor.main.feels_like + " °C");
        $(".humidity").html((valor.main.humidity * 100).toFixed(0));
        $(".windSpeed").html((valor.wind.Speed / 0.6213).toFixed(2));

        $(".todaySummary").html(valor.weather);
        $(".tempMin").html(valor.main.temp_min + " °C");
        $(".tempMax").html(valor.main.temp_max + " °C");

        switch (weather.main) {
          case 'Clear':
            $("i").addClass("wi-day-sunny");
            break;
          case 'Clouds':
            $("i").addClass("wi-cloud");
            break;
          case 'Rain':
            $("i").addClass("wi-rain");
            break;
          case 'Snow':
            $("i").addClass("wi-snow");
            break;
          case 'Drizzle':
            $("i").addClass("wi-raindrops");
            break;
          case 'Thunderstom':
            $("i").addClass("wi-thunderstorm");
            break;
          case 'Mist':
            $("i").addClass("wi-fog");
            break;
          default:
            $("i").addClass("wi-na");
        }

        var skycons = new Skycons({
          "color": "white"
        });

        //Skycon Icons
        skycons.set("weatherIcon", weatherData.currently.icon);
        skycons.set("expectIcon", weatherData.hourly.icon);
        skycons.play();
          
      }); */
    }
    /* error: function(jqXHR, textStatus, errorThrown){
       console.log("ERROR MIO:  " + errorThrown);
     }*/

  });

});


$(document).ready(function () {
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?id=3117732&APPID=5134da6df3842f1a831f92efeeb782c1",
    datatype: "json",
    type: "GET",
    success: function (respuesta) {
      console.log(respuesta);
      $.each(respuesta.list, function (indice, valor) {

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

        //$("#dia3").html("Temperatura Actual: " + respuesta.list[0].main.temp + "<br>" + "Temperatura Mínima: " + valor.main.temp_min + "<br>" + "Temperatura Maxima: " + valor.main.temp_max);

      });
    }
    /* error: function(jqXHR, textStatus, errorThrown){
       console.log("ERROR MIO:  " + errorThrown);
     }*/

  });


});

$(document).ready(function () {
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?id=3117732&APPID=5134da6df3842f1a831f92efeeb782c1",
    datatype: "json",
    type: "GET",
    success: function (respuesta) {
      console.log(respuesta);
      $.each(respuesta.list, function (indice, valor) {


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
        //$("#dia3").html("Temperatura Actual: " + respuesta.list[0].main.temp + "<br>" + "Temperatura Mínima: " + valor.main.temp_min + "<br>" + "Temperatura Maxima: " + valor.main.temp_max);

      });
    }
    /* error: function(jqXHR, textStatus, errorThrown){
       console.log("ERROR MIO:  " + errorThrown);
     }*/

  });

});