$(".").click(function(){
    $(".").toggleClass("");
  });

$( function() {
    $( ".draggable" ).draggable({
      containment: ".container"
    });
  } );

  

// the percentage of the page scrolled
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);


$(".click1").click(function(){
  $(".light").toggleClass("dark");
});