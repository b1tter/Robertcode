$(document).ready(function(){
  if (window.location.pathname === '/www.griskbarber.esy.es' , '/index.php'){
      $('.navbar').css({'background-color' : 'rgba(0,0,0,0.1)'});}
});

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 100) {
         $('.navbar').css({'background-color' : 'rgba(0,0,0,1)'});
     }
     else {
         $('.navbar').css({'background-color' : 'rgba(0,0,0,0.8)'});
     }
});

// smoothscroll
$(document).ready(function(){
$("a").on('click', function(event) {

if (this.hash !== "") {
  var hash = this.hash;
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function(){
    window.location.hash = hash;
});
}
});
});