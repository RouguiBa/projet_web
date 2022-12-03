</html><!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title id="titre">A toi de jouer</title>
   
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
    integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
    crossorigin=""/>

    <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
    integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
    crossorigin=""></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.6/underscore-min.js" integrity="sha512-2V49R8ndaagCOnwmj8QnbT1Gz/rie17UouD9Re5WxbzRVUGoftCu5IuqqtAM9+UC3fwfHCSJR1hkzNQh/2wdtg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>    <link rel="stylesheet" href="../CSS/carte.css">
    <link rel="icon" type="image/png" href="../IMG/Tintin_et_Milou_Logo_headshot.png" sizes="32x32">
</head>
<body id="body">
    <!-- <div id="carte"> -->
    <!-- <div id="titre"><p>Retrouvons Milou!</p></div> -->
    <div id="entete">
		<h1 id="nom_joueur">C'est parti <?php echo $_POST['pseudo'];?> :  Enquetons sur la disparition de Milou! </h1>
        <div class="chrono">
        <p id="chrono">00:00:00</p>
    </div>
    </div>
    
    <div id="inventaire" class="tintin"><h1 id="inv">Inventaire</h1></div>
    <div id="map" class="tintin"></div>
    <div id="footer">
        <p id="pseudo"><?php echo $_POST['pseudo']; ?> </p>
	</div>
    <?php
    include("connect.php");
    $pseudo=$_POST['pseudo'];
    if (!$link) {
      die('Erreur de connexion');
    }
    else {
    echo 'Succès... ';
     }

    $insert = "INSERT INTO hall_of_fame (pseudo,temps) values ('$pseudo','00:00:00') " ;
    $result=mysqli_query($link,$insert);

    echo json_encode($result);
    ?>
    <script src="../JS/carte.js"></script>
</body>
</html>
