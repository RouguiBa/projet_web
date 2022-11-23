<?php

    include("connect.php");

    $data=$_POST['id'];
	$query='SELECT coord_x_suivant,coord_y_suivant,type_objet from objets';
	$result=mysqli_query($link,$query);
	$arr=[];
    if(isset($result)){
        while($rows = mysqli_fetch_assoc($result)){
            $arr[] = $rows;
        } 
        echo json_encode($arr,JSON_NUMERIC_CHECK);
    }elseif(!isset($result)){
        echo 'jhbdjfn';
    }

   
    ?>