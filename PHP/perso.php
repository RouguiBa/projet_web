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
        <h1> Choisi ton personnage pour aider Tintin à retrouver Milou </h1>
        </div>

        <h2> Choisi d'abord ton pseudo : </h2>
        <div class= "avatar">
        <p>
          <form id="form" action="../PHP/carte.php" method="post">
          <p>
          <p id="input_pseudo">
        <input id="pseudo" type="text" name="pseudo" require minlength="1" placeholder="Choisi ton pseudo">
        </p>
        
        <input type="image" id="1" class="btn" src="../IMG/loupe.jpeg">
        </p>

        </form> 
        </p>
 
        </div>

        <h2>Et maintenant ton pseudo : </h2>

        <div id="Joueur"></div>

        <?php
        //Ajout valeur pseudo dans la BDD
        include("connect.php");
        if(isset($_POST['pseudo'])){
          echo "Identifiant: ";
          echo $_POST['pseudo'];
          $link->set_charset("utf8");
        $requete = "INSERT INTO hall_of_fame VALUES('','".$_POST['pseudo']."','00:24:12','150')";
        $resultat = $link->query($requete);
        if ($resultat)
            echo "<p>Le contact a été ajouté</p>";
        else
            echo "<p>Erreur</p>";
        $link->close();
      }
      else{echo "error";}
        ?>

      </div>
    <script src="../JS/perso.js"></script>
    <script src="../JS/carte.js"></script>
  </body>
</html>




