$(document).ready(function () {
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/find?q=Comunidad de Madrid&units=metric&APPID=5134da6df3842f1a831f92efeeb782c1",
    datatype: "json",
    type: "GET",
    success: function (respuesta) {
      console.log(respuesta);
      // $("#dia1").html(respuesta.name);
      $.each(respuesta.list, function (indice, valor) {
        $("#dia").html(valor.name + "<br>" + valor.id);
        $("#dia1").html("Temperatura Actual: " + valor.main.temp + "<br>" + "Temperatura Mínima: " + valor.main.temp_min + "<br>" + "Temperatura Maxima: " + valor.main.temp_max);

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
      $("#dia1").html(respuesta.name);
      $.each(respuesta.list, function (indice, valor) {

        $("#dia1").html(Math.round(Math.max(respuesta.list[0].main.temp_max, respuesta.list[1].main.temp_max, respuesta.list[2].main.temp_max, respuesta.list[3].main.temp_max,
          respuesta.list[4].main.temp_max, respuesta.list[5].main.temp_max, respuesta.list[6].main.temp_max, respuesta.list[7].main.temp_max)));

        $("#dia2").html(Math.round(Math.max(respuesta.list[8].main.temp_max, respuesta.list[9].main.temp_max, respuesta.list[10].main.temp_max, respuesta.list[11].main.temp_max,
          respuesta.list[12].main.temp_max, respuesta.list[13].main.temp_max, respuesta.list[14].main.temp_max, respuesta.list[15].main.temp_max)));

        $("#dia3").html(Math.round(Math.max(respuesta.list[16].main.temp_max, respuesta.list[17].main.temp_max, respuesta.list[18].main.temp_max, respuesta.list[19].main.temp_max,
          respuesta.list[20].main.temp_max, respuesta.list[21].main.temp_max, respuesta.list[22].main.temp_max, respuesta.list[23].main.temp_max)));

        $("#dia4").html(Math.round(Math.max(respuesta.list[24].main.temp_max, respuesta.list[25].main.temp_max, respuesta.list[26].main.temp_max, respuesta.list[27].main.temp_max,
          respuesta.list[28].main.temp_max, respuesta.list[29].main.temp_max, respuesta.list[30].main.temp_max, respuesta.list[31].main.temp_max)));

        $("#dia5").html(Math.round(Math.max(respuesta.list[32].main.temp_max, respuesta.list[33].main.temp_max, respuesta.list[34].main.temp_max, respuesta.list[35].main.temp_max,
          respuesta.list[36].main.temp_max, respuesta.list[37].main.temp_max, respuesta.list[38].main.temp_max, respuesta.list[39].main.temp_max)));

        //$("#dia3").html("Temperatura Actual: " + respuesta.list[0].main.temp + "<br>" + "Temperatura Mínima: " + valor.main.temp_min + "<br>" + "Temperatura Maxima: " + valor.main.temp_max);

      });
    }
    /* error: function(jqXHR, textStatus, errorThrown){
       console.log("ERROR MIO:  " + errorThrown);
     }*/

  });



});
