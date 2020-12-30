/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}

/*
  Función para enlistar los bienes disponibles 
  data del json data-1
*/
function bienesDisponibles(){

  var html = '';
  var urlimag = "http://127.0.0.1/suplosBackEnd-master/img/home.jpg";
  var el = document.getElementById("busquedaresultado");
  let cont = 0;
  $.getJSON("http://127.0.0.1/suplosBackEnd-master/data-1.json", function(datos) {
    $.each(datos, function (key, val) {

      html += "<form method='post' id='formulario"+cont+"'><div id='lista'><div id='imagen'><img id='imagen' src=" + urlimag + "></div><div id='texto'>  <b>Dirección: </b><span id='direccion"+cont+"' >" + val.Direccion + "</span><br> <b>Ciudad: </b> <span id='ciudad"+cont+"' >" + val.Ciudad + "</span><br><b>Teléfono: </b> <span id='telefono"+cont+"' >" + val.Telefono + "</span><br> <b>Código Postal: </b> <span id='cp"+cont+"' >" + val.Codigo_Postal +"</span><br><b>Tipo: </b> <span id='tipo"+cont+"' >" + val.Tipo + "</span><br> <b>Precio: </b> <span id='precio"+cont+"' >" + val.Precio +"</span> <br><button class='boton btn' type='button' onclick='guardar(\"" +cont + "\")'>Guardar</button></div></div></form>";
      cont++;
    });
    el.innerHTML = html;
  });

}
/*
  Función para enlistar ciudades
*/
function listarCiudades(){

  var listaCiudades = [];
  var ciudad = document.getElementById("selectCiudad");
  $.getJSON("http://127.0.0.1/suplosBackEnd-master/data-1.json", function(datos) {
    $.each(datos, function (key, val) {
      
      if(!(listaCiudades.includes(val.Ciudad))){
        listaCiudades.push(val.Ciudad);
        $('#selectCiudad').append("<option value='"+val.Ciudad+"' >"+val.Ciudad+"</option>");
      }
    });

  });

}
/*
  Función para enlistar Tipos
*/
function listarTipos(){

  var listaTipos = [];
  var tipo = document.getElementById("selectTipo");
  $.getJSON("http://127.0.0.1/suplosBackEnd-master/data-1.json", function(datos) {
    $.each(datos, function (key, val) {
      
      if(!(listaTipos.includes(val.Tipo))){
        listaTipos.push(val.Tipo);
        $('#selectTipo').append("<option value='"+val.Tipo+"' >"+val.Tipo+"</option>");
      }
   });

  });

}
/*
mostrar los Bienes Guardados por el usuario 
*/
function listarbienesGuardados(){
  var guardados = document.getElementById("busquedaguardado");
  guardados.innerHTML = "";
    $.ajax({                        
      type: "post",                 
      url: "mostrar.php",                     
      success: function(data)             
    {
      guardados.innerHTML = data;               
    }
  });
}
inicializarSlider();
playVideoOnScroll();
bienesDisponibles();
listarCiudades();
listarTipos();
listarbienesGuardados();

