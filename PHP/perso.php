<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="../IMG/Tintin_et_Milou_Logo_headshot.png" sizes="32x32">
    <link rel="stylesheet" href="../CSS/perso.css">
    <title>Les aventures de Tintin</title>
  </head>
  <body>
      
    <div id="contenu">
      <div id="en_tete">
        <h1> <br>Choisi ton pseudo pour aider Tintin à retrouver Milou </h1>
        </div>
        <p><br></p>
        <p><br></p>

        <div id="gif">
    <img class="generi" src="../IMG/generique.gif">
  </div>
  <p><br></p>

        <div class= "avatar">
          <form id="form" action="../PHP/carte.php" method="post">
        <input id="pseudo" type="text" name="pseudo" require minlength="1" placeholder="Choisi ton pseudo">
        <p><br></p>
        <input id="bouton" type="submit" value="Commencer à jouer">
        </form> 
 
</div>

       

      </div>
    <script src="../JS/perso.js"></script>
  </body>
</html>




