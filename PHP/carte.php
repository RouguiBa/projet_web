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

    <link rel="stylesheet" href="../CSS/carte.css">
    <link rel="icon" type="image/png" href="../IMG/Tintin_et_Milou_Logo_headshot.png" sizes="32x32">
</head>
<body id="body">
    <!-- <div id="carte"> -->
    <!-- <div id="titre"><p>Retrouvons Milou!</p></div> -->
    <div id="entete">
		<h1>Enquetons sur la disparition de Milou!</h1>
	</div>
    <div class="chrono">
        <p id="chrono">00:00:00</p>
            <button id="strt">start</button>
            <button id="stp">stop</button>
            <button id="rst">reset</button>
    </div>
    <div id="inventaire" class="tintin"><h1 id="inv">Inventaire</h1></div>
    <div id="map" class="tintin"></div>
    <!-- <div id="footer">
	</div> -->
    <!-- </div> -->
    <!-- <div id="message"><p id="texte"></p></div> -->
    <script src="../JS/perso.js"></script>
    <script src="../JS/carte.js"></script>
</body>
</html>