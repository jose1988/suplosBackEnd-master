<?php

//validacion y guardar el biene seleccionado por el usuario

if($_POST){
    require_once("conexion.php");

    $direccion = $_POST['Direccion'];
    $telefono = $_POST['Telefono'];
    $cp = $_POST['Cp'];
    $precio = $_POST['Precio'];
    $tipo = $_POST['Tipo'];
    $ciudad = $_POST['Ciudad'];
    
    
    try{
        $sqlTipo = "SELECT ID_TIPO FROM tipo WHERE DESCRIPCION='".$tipo."'";
        $oTipo = $conexion->query($sqlTipo);
        $oTipo = $oTipo->fetch_row();
        $idTipo = $oTipo['0'];

        $sqlCiudad = "SELECT ID_CIUDAD FROM ciudad WHERE NOMBRE='".$ciudad."'";
        $oCiudad = $conexion->query($sqlCiudad);
        $oCiudad = $oCiudad->fetch_row();
        $idCiudad = $oCiudad['0'];

        $sqlBien = "SELECT * FROM bien WHERE DIRECCION='".$direccion."'";
        $oBien = $conexion->query($sqlBien);
        if ($oBien->num_rows > 0) {
            echo "Bien ya esta guardado! no se permite repetir Bienes";
        }else{
            $sBien = $conexion->prepare("INSERT INTO bien (DIRECCION, TELEFONO, CODIGO_POSTAL, PRECIO, FK_ID_TIPO, FK_ID_CIUDAD) VALUES (?, ?, ?, ?, ?, ?)");
            $sBien->bind_param("ssssii", $direccion, $telefono, $cp, $precio, $idTipo, $idCiudad);
            $sBien->execute();
            echo "Bien Guardado!";
        }
        
        
    }catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
      
    $conexion->close();
}


?>