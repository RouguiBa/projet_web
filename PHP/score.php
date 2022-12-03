<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="../IMG/Tintin_et_Milou_Logo_headshot.png" sizes="32x32">
    <link rel="stylesheet" href="../CSS/score.css">
    <title>Les aventures de Tintin</title>
  </head>
  <body>    
      <div id="contenu">
        <div id="en_tete">
          <h1> Bravo! tu as réussi à retrouver Milou et tu as ainsi terminé le jeu ! </h1>
        </div>

        <h2> <br> Voici la liste des joueurs avec leur temps et score !  </h2>
        <h2> <br> Hall of fame : <h2>
        <div id="resultats">
         
        <table> <br> 
          <tr>
              <td>PSEUDO</td>
              <td>TEMPS</td>
              <td>SCORE</td>
          </tr>
                
          <?php
           // Affichage du "Hall of fame" 
        include("connect.php");
        $query = "SELECT * FROM hall_of_fame ORDER BY points DESC limit 10";
        $resultat =mysqli_query($link,$query);
          while($ligne = mysqli_fetch_assoc($resultat)){
          echo '<tr>';
          echo '<td>'.$ligne['pseudo'].'</td>';
          echo '<td>'.$ligne['temps'].'</td>';
          echo '<td>'.$ligne['points'].'</td>';
          echo '</tr>';   
          }
          $link->close();           
          ?>
        </table>

        </div>
        <div id="rejouer">
  <button class="bouton"><a href="../index.html">Rejouer!</a></button>
  </div>
      </div>
    <script src="../JS/podium.js"></script>
  </body>
</html>


