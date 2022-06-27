 $(document).ready(function () {
 	
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
	$hamburger.toggleClass("is-active");
	$('#nav').toggleClass('active');
	
});

});

 /* var i = 0;
var txt = 'Style is a way to say who you are without having to speak'; The text 
var speed = 50;  The speed/duration of the effect in milliseconds 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  }
}*/