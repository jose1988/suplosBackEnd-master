<?php
/* Conexion a la base de datos*/
    $host = "localhost";
    $usuario = "root";
    $contrasena = "";
    $basedatos = "suplosbackend";

    $conexion = @mysqli_connect($host, $usuario, $contrasena, $basedatos);

    if(!$conexion){
        echo "Error en la conexion";
    }


?>