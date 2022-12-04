# Projet Web 

## Escape-game - Les aventures de Tintin 

Bienvenue dans notre escape-game géographique, dont le but est de retrouver Milou, le fidèle compagnon de Tintin. Cet escape game à été réalisé dans le cadre d'un projet scolaire en Programmation Web Avancée

## Guide d'installation : 

Pour pouvoir jouer à notre escape-game, il vous faudra :
  - Télécharger le projet 
  - Dans MAMP, allez dans les Préférences puis dans l'onglet "Server" pour connaître le chemin vers lequel copier le dossier. Généralement, il s'agit du dossier htdocs de Mamp.
  - Créer une base de données se nommant : "tintin_objets" dans phpMyAdmin, et importer les trois tables : objets, objets_debloque, hall_of_fame
  - Le fichier de départ est index.html
  
## Utilisation du jeu 

Il existe 4 types d'objets : 
- Les objets bloqués par un code, pour les débloquer il faut rentrer le bon code. Un pop up va apparaître et automatiquement se refermer. Il faudra cliquer à nouveau l’objet débloqué pour afficher le nouveau message dans le po pup.

- Les objets bloqués par un autre objet, pour les débloquer il faut d'abord choisir l'objet dans l'inventaire puis cliquer sur "Débloquer" dans le pop-up de l'objet bloqué. 
 
- Les objets récupérables servent à déverrouiller les objets bloqués, ils peuvent être récupérés et conservés dans l'inventaire. 

- Les objets code, ils affichent une aide pour trouver le code d'un objet bloqué par un code.
  
Si un objet est de type récupérable, il s’ajoute dans l’inventaire lorsque vous cliquez dessus une première fois. Il faudra cliquer à nouveau dessus une seconde fois pour qu'il s'enlève de la carte.  
Si objet est bloqué par un autre objet, lorsque vous le débloquez avec le bon objet, son popup se referme automatiquement. Il faudra cliquer à nouveau sur l'objet avant de cliquer sur le nouvel objet débloqué qui apparaitra car ce dernier contiendra un nouveau message dans son popup.
  
## Solution du jeu 
Vous trouverez la solution du jeu dans le fichier Solution.pdf 

BA Rouguiatou et BURGIN Ana - ING2 
  
