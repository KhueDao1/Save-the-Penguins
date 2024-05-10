
const water = document.getElementById('water');
const shrink = document.querySelectorAll('.shrink');
const maxHeight = window.innerHeight * 0.9; // 90% of the window height
const button = document.getElementById('button');

function easeOutCubic(t) {
  return 1- Math.pow(1- t, 3);
}
function easeInSine(t) {
  return 1 - Math.cos((t * Math.PI) / 2);
}

// the percentage of the page scrolled
window.addEventListener('scroll', () => {
  // document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

// Claude AI code assistant to transfer css animation-timeline to JavaScript  
  const scrollPosition = window.pageYOffset;
  const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = scrollPosition / documentHeight;

  const easedScrollPercentage = easeInSine(scrollPercentage);
  water.style.height = `${easedScrollPercentage * maxHeight}px`;

  document.getElementById("progress").style.width = `${scrollPercentage * 100}` + "%";
  shrink.style.scale = 8 - 6*(scrollPercentage) ;
  
  if (scrollPercentage <= 0.7) {
    button.style.opacity = 0;
  } else if (scrollPercentage > 0.7 && scrollPercentage <= 1) {
    button.style.opacity = (scrollPercentage - 0.7) / 0.3;
  } else {
    button.style.opacity = 1;
  }
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

