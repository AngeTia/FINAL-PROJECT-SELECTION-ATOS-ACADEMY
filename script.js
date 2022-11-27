// La méthode querySelector() de l'interface Document retourne le premier Element dans le document correspondant au sélecteur 
// - ou groupe de sélecteurs - spécifié(s), ou null si aucune correspondance n'est trouvée.
var menu = document.querySelector(".menu");

// La méthode querySelector() de l'interface Document retourne le premier Element dans le document correspondant au sélecteur 
// ou groupe de sélecteurs - spécifié(s), ou null si aucune correspondance n'est trouvée.
var toggle_menu = document.querySelector(".toggle-menu");

// La propriété onclick, rattachée à l'interface Notification, définit un gestionnaire d'évènement
// à déclencher lorsque la notification recçoit un évènement click (qui se produit lorsqu'un utilisateur clique sur la notification).
toggle_menu.onclick = function(){
    // si "active" est défini, le supprimer, sinon, l'ajouter
    toggle_menu.classList.toggle('active');
    // si "responsive" est défini, le supprimer, sinon, l'ajouter
    menu.classList.toggle('responsive');
}