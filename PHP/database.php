<?php

    include("connect.php");

    $data=$_POST['id'];
	$query='SELECT * FROM objets where id='.$_POST['id'];
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
$link->close();
    ?>