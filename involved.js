const maxHeight = window.innerHeight * 0.9; // 90% of the window height

// the percentage of the page scrolled
window.addEventListener('scroll', () => {

// Claude AI code assistant to transfer css animation-timeline to JavaScript  
  const scrollPosition = window.pageYOffset;
  const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = scrollPosition / documentHeight;
  
  document.getElementById("progress").style.width = `${scrollPercentage * 100}` + "%";

}, false);

$(".click1").click(function(){
    $(".light").toggleClass("dark");
    $(".turn").toggleClass("dark");
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
      containment: ".arrange"
    });
  } );
  