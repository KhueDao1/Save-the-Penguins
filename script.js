

// the percentage of the page scrolled
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);


$(".click1").click(function(){
  $(".light").toggleClass("dark");
});
$(".click2").click(function(){
  $(".dial").toggleClass("rotate");
});

$( function () {
  $(".draggable").draggable({ snap:true});
  $(".draggable").draggable({ containment:"parent"});
});

$( function() {
  $( "#resizable" ).resizable({
    animate: true,
    containment: "#container"
  });
} );