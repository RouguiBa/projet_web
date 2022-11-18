<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title id="titre">A toi de jouer</title>
   
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
    integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
    crossorigin=""/>

    <script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
    integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
    crossorigin=""></script>

    <link rel="stylesheet" href="../CSS/affichage_carte.css">
    <link rel="icon" type="image/png" href="../IMG/Tintin_et_Milou_Logo_headshot.png" sizes="32x32">
</head>
<body id="body">
    <div id="carte">
    <div id="titre">Retrouvons Milou!</div>
    <div id="inventaire" class="tintin"><p id="indices">Inventaire d'indices</p></div>
    <div id="map" class="tintin"></div>
    </div>
    <!-- <div id="message"><p id="texte"></p></div> -->
    <script src="../JS/perso.js"></script>
    <script src="../JS/carte.js"></script>
</body>
</html>