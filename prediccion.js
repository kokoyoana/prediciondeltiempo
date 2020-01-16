$(document).ready(function () {
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/find?q=Comunidad de Madrid&units=metric&APPID=5134da6df3842f1a831f92efeeb782c1",
    datatype: "json",
    type: "GET",
    success: function (respuesta) {
      console.log(respuesta);
      // $("#ejemplo1").html(respuesta.name);
      $.each(respuesta.list, function (indice, valor) {
        $("#ejemplo").html(valor.name + "<br>" + valor.id);
        $("#ejemplo1").html("Temperatura Actual: " + valor.main.temp + "<br>" + "Temperatura Mínima: " + valor.main.temp_min + "<br>" + "Temperatura Mínima: " + valor.main.temp_max);

      });
    }
    /* error: function(jqXHR, textStatus, errorThrown){
       console.log("ERROR MIO:  " + errorThrown);
     }*/

  });



});
