
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
  
  if (scrollPercentage <= 0.7) {
    button.style.opacity = 0;
  } else if (scrollPercentage > 0.7 && scrollPercentage <= 1) {
    button.style.opacity = (scrollPercentage - 0.7) / 0.3;
  } else {
    button.style.opacity = 1;
  }

  if (scrollPercentage <= 0.5) {
    shrink.style.scale = 6;
  } else if (scrollPercentage > 0.5 && scrollPercentage <= 1) {
    shrink.style.scale = 6 +(easedScrollPercentage *2) ;
  } else {
    shrink.style.scale = 1;
  }
}, false);



