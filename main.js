window.onscroll = slideDown;
function slideDown() {
 // Votre code ici
 var nbar = document.getElementById('navbar');
 var winScroll = window.scrollY;

console.log(winScroll);

if (winScroll > 100 ) {
 nbar.setAttribute("style" , "top:0px");

}else {
    nbar.setAttribute("style" , "top:-56px");
}
}