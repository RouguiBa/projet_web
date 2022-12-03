<?php
    include("connect.php");
$content = trim(file_get_contents("php://input"));
$data = json_decode($content, true);
if ($link->connect_error) {
  die("Connection failed: " . $link->connect_error);
}
  if (isset($data["temps"])){
    $pseudo = $data["pseudo"];
    $temps=$data["temps"];
    $points=$data["points"];
    $insertion1 = "INSERT INTO hall_of_fame (pseudo,temps,points) values ('$pseudo','$temps','$points') " ;
    $result=mysqli_query($link,$insertion1);

    if ($result){
      echo "works";
    }
    else {
      echo "....";
    }
  }
    
?>