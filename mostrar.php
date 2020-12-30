<?php

/*
muestra los bienes guardados por el usuario
*/

    require_once("conexion.php");
  
    
    try{
        $sql = "SELECT DIRECCION, TELEFONO , CODIGO_POSTAL, PRECIO, NOMBRE AS CIUDAD, DESCRIPCION AS TIPO FROM bien, tipo, ciudad WHERE FK_ID_TIPO = ID_TIPO AND FK_ID_CIUDAD = ID_CIUDAD ";
        $result = $conexion->query($sql);
        $urlimag = "http://127.0.0.1/suplosBackEnd-master/img/home.jpg";
        $html = "";
        if (mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_assoc($result)) {
              $html = $html."<div id='lista'><div id='imagen'><img id='imagen' src=".$urlimag."></div><div id='texto'> <b>Dirección: </b>".$row["DIRECCION"]."<br> <b>Ciudad: </b>".$row["CIUDAD"]."<br><b>Télefono: </b>".$row["TELEFONO"]."<br> <b>Código Postal: </b>".$row["CODIGO_POSTAL"]."<br><b>Tipo: </b>".$row["TIPO"]."<br> <b>Precio: </b>".$row["PRECIO"]."</div></div>";
        
            }
        }    
        
          echo $html;
    }catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
      
    $conexion->close();



?>