<?php

    include("connect.php");
    // mysqli_set_charset($link,"utf8");
    $data=$_POST['id'];
	$query='SELECT * FROM objets where id='.$_POST['id'];
	$result=mysqli_query($link,$query);
	$arr=[];
    if(isset($result)){
        while($rows = mysqli_fetch_assoc($result)){
            $arr[] = $rows;
            // echo '<option value="'.$rows["x"].'" >'.$rows["y"].'</option>';
        } 
        echo json_encode($arr,JSON_NUMERIC_CHECK);
    }elseif(!isset($result)){
        echo 'jhbdjfn';
    }

   
    ?>