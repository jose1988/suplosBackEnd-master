/*
  Función para buscar por Tipo o Ciudad
*/
function buscar(){

    let ciudad = $("#selectCiudad option:selected").val();
    let tipo =  $("#selectTipo option:selected").val();
    let urlimag = "http://127.0.0.1/suplosBackEnd-master/img/home.jpg";
    let result = document.getElementById("busquedaresultado");
    let contador = document.getElementById("contador");
    let html = "";
    let cont = 0;
    if(ciudad!=0 || tipo!=0){
         result.innerHTML = "";
            
            if(ciudad!=0 && tipo!=0){

                $.getJSON("http://127.0.0.1/suplosBackEnd-master/data-1.json", function(datos) {
                    $.each(datos, function (key, val) {
                        
                    if(val.Tipo == tipo && val.Ciudad == ciudad){
                        
                        html += "<form method='post' id='formulario"+cont+"'><div id='lista'><div id='imagen'><img id='imagen' src=" + urlimag + "></div><div id='texto'>  <b>Dirección: </b><span id='direccion"+cont+"' >" + val.Direccion + "</span><br> <b>Ciudad: </b> <span id='ciudad"+cont+"' >" + val.Ciudad + "</span><br><b>Teléfono: </b> <span id='telefono"+cont+"' >" + val.Telefono + "</span><br> <b>Código Postal: </b> <span id='cp"+cont+"' >" + val.Codigo_Postal +"</span><br><b>Tipo: </b> <span id='tipo"+cont+"' >" + val.Tipo + "</span><br> <b>Precio: </b> <span id='precio"+cont+"' >" + val.Precio +"</span> <br><button class='boton btn' type='button' onclick='guardar(\"" +cont + "\")'>Guardar</button></div></div></form>";
                        cont++;
                    }

                    });
                    contador.innerHTML = cont;
                    result.innerHTML = html;
                });
            }
            if(ciudad==0 && tipo!=0){
                $.getJSON("http://127.0.0.1/suplosBackEnd-master/data-1.json", function(datos) {
                    $.each(datos, function (key, val) {
                    if(val.Tipo == tipo){
                        
                        html += "<form method='post' id='formulario"+cont+"'><div id='lista'><div id='imagen'><img id='imagen' src=" + urlimag + "></div><div id='texto'>  <b>Dirección: </b><span id='direccion"+cont+"' >" + val.Direccion + "</span><br> <b>Ciudad: </b> <span id='ciudad"+cont+"' >" + val.Ciudad + "</span><br><b>Teléfono: </b> <span id='telefono"+cont+"' >" + val.Telefono + "</span><br> <b>Código Postal: </b> <span id='cp"+cont+"' >" + val.Codigo_Postal +"</span><br><b>Tipo: </b> <span id='tipo"+cont+"' >" + val.Tipo + "</span><br> <b>Precio: </b> <span id='precio"+cont+"' >" + val.Precio +"</span> <br><button class='boton btn' type='button' onclick='guardar(\"" +cont + "\")'>Guardar</button></div></div></form>";
                        cont++;
                    }

                    });
                    contador.innerHTML = cont;
                    result.innerHTML = html;
                });
            }
            if(tipo==0 && ciudad!=0){
                $.getJSON("http://127.0.0.1/suplosBackEnd-master/data-1.json", function(datos) {
                $.each(datos, function (key, val) {
                if(val.Ciudad == ciudad){
                    
                    html += "<form method='post' id='formulario"+cont+"'><div id='lista'><div id='imagen'><img id='imagen' src=" + urlimag + "></div><div id='texto'>  <b>Dirección: </b><span id='direccion"+cont+"' >" + val.Direccion + "</span><br> <b>Ciudad: </b> <span id='ciudad"+cont+"' >" + val.Ciudad + "</span><br><b>Teléfono: </b> <span id='telefono"+cont+"' >" + val.Telefono + "</span><br> <b>Código Postal: </b> <span id='cp"+cont+"' >" + val.Codigo_Postal +"</span><br><b>Tipo: </b> <span id='tipo"+cont+"' >" + val.Tipo + "</span><br> <b>Precio: </b> <span id='precio"+cont+"' >" + val.Precio +"</span> <br><button class='boton btn' type='button' onclick='guardar(\"" +cont + "\")'>Guardar</button></div></div></form>";
                    cont++;
                }

                });
                contador.innerHTML = cont;
                result.innerHTML = html;
            });
            }
            
            
        
    } 

}

