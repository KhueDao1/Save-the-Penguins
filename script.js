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

//https://codepen.io/Bupeldox/details/OJqxbPv
class FlipBook{
  constructor(bookElem){
    this.elems={
      book:bookElem,
      leaves:bookElem.querySelectorAll(".leaf"),
      buttons:{
        next:document.getElementById("nextPage"),
        prev:document.getElementById("prevPage")
      }
    };
    this.setupEvents();
    this.currentPagePosition = 0;
    this.turnPage(0);
  }
  setPagePosition(page,position,index){
    var transform = "";
    
    transform = "translate3d(0,0,"+((position<0?1:-1)*Math.abs(index))+"px)"
    
    if(position<0){
       transform+="rotate3d(0,1,0,-180deg)";
      page.classList.add("turned")
    }else{
      page.classList.remove("turned")
    }
    if(page.style.transform != transform){
      page.style.transform = transform;
    }
  }
  turnPage(delta){
    this.currentPagePosition+=delta;
    if(this.currentPagePosition < 0){
      this.currentPagePosition = 0;
      return;
    }
    if(this.currentPagePosition > this.elems.leaves.length){
      this.currentPagePosition = this.elems.leaves.length;
      return;
    }
    this.elems.leaves.forEach((page,index)=>{
      var pageNumber = index;
      this.setPagePosition(page,pageNumber-this.currentPagePosition,index);
    });
    
    if(this.currentPagePosition == 0){
      this.elems.buttons.prev.setAttribute("disabled","disabled");
    }else
    if(this.currentPagePosition == this.elems.leaves.length){
      this.elems.buttons.next.setAttribute("disabled","disabled");
    }else{
      this.elems.buttons.next.removeAttribute("disabled");
      this.elems.buttons.prev.removeAttribute("disabled");
    }
  }
  setupEvents(){
    document.getElementById("nextPage").addEventListener("click",()=>{
      this.turnPage(1); 
    });
    document.getElementById("prevPage").addEventListener("click",()=>{
      this.turnPage(-1);  
    });
    
  }
}

var flipBook = new FlipBook(document.getElementById("flipbook"));


//dial rotate on drag
const box1 = document.getElementById("box-1");

const run = (box1) => {
  let active = false;

  //starting
  box1.addEventListener("mousedown", e=> {
    active = true;
  });
  // for stop dragging
  document.addEventListener("mouseup", e=> {
    active = false;
  });
  //run
  box1.addEventListener("mousemove" , e=> {
    //mouse position
    let mX = e.clientX;
    let mY = e.clientY;
    // element data
    let box1Data = box1.getBoundingClientRect();
    let box1Width = box1Data.width;
    let box1Height = box1Data.height;
    let l = box1Data.left;
    let t = box1Data.top;

    //rotation
    let rotate = 0;
    let radians= 180/Math.PI;

    let center = {
      x: l + (box1Width/2),
      y: t + (box1Height/2)
    };
    //arc Points
    let x = mX - center.x;
    let y = mY - center.y;
    let angle = Math.floor(Math.atan2(y,x)*radians);
    let startAngle = 120;

    //active
    if(active){
      if(angle < 0 && angle > -180){
        rotate = angle + startAngle;
        box1.style.transform = 'rotate(${rotate}deg)';
      }
    }
  });
}
run(box1, progressBar1);