
/*----PLAN DU SITE-----*/
$(document).ready(function() {
  $(".trigger").click(function () {
    $(".menu").toggleClass("active"); 
  });
});


/*FOOTER*/
$(function() {
            $('[data-toggle="popover"]').popover()
        })
    var menu = document.querySelector('footer');
        var dataFooter = [{
            url: "https://www.facebook.com",
        }, ];
        document.getElementById("slide-item-1").onclick = function() {
            location.href = "contact.html";
        };
        document.getElementById("slide-item-2").onclick = function() {
            location.href = "mentionslegales.html";
        };
        document.getElementById("slide-item-3").onclick = function() {
            location.href = "cgu.html";
        };
        document.getElementById("slide-item-4").onclick = function() {
            location.href = "plandusite.html";
        };
        document.getElementById("slide-item-5").onclick = function() {
            location.href = "https://www.facebook.com";
        };

/*FONCTION SCROLL*/
 $('.smoothscrolltop').click(function(){
        $('html, body').animate({scrollTop:-8000},'50');
    });
  $('.smoothscrolldown').click(function(){
        $('html, body').animate({scrollTop:8000},'50');
    });




