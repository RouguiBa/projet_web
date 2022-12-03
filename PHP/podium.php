<?php
include("connect.php");
$podium=$_POST['id'];
$query='SELECT * FROM hall_of_fame ORDER BY temps DESC limit 5';
$retour=mysqli_query($link,$query);
$arr=[];
if(isset($retour)){
    while($rows = mysqli_fetch_assoc($retour)){
        $arr[] = $rows;
    } 
    echo json_encode($arr,JSON_NUMERIC_CHECK);
}elseif(!isset($retour)){
    echo 'jhbdjfn';
}
$link->close();
?>