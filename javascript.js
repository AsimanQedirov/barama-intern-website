let figure = document.querySelector("figure");
let tomove = 0;
document.getElementById("next").addEventListener("click",function(){
  if(Math.abs(tomove) <= 125){
    tomove = tomove - 25;
    figure.style.left = `${tomove}%`;
  }
})
document.getElementById("prev").addEventListener("click",function(){
    if(tomove < 0){
        tomove = tomove + 25;
        figure.style.left = `${tomove}%`;
    }
});
document.querySelector(".three-circles:nth-child(1)").addEventListener("click",function(){
    tomove = 0;
    figure.style.left = `${tomove}%`;
})
document.querySelector(".three-circles:nth-child(2)").addEventListener("click",function(){
  tomove = -100;
  figure.style.left = `${tomove}%`;
});
document.querySelector(".three-circles:last-child").addEventListener("click",function(){
  tomove = -150;
  figure.style.left = `${tomove}%`;
})
// hover effect


// slider 2 testiminiols

let slider2 = document.querySelector(".slider-2");
let tomove1 = 0;
document.querySelectorAll(".six-div")[0].className="addColor six-div fas fa-circle";
document.querySelector(".six-div:nth-child(1)").addEventListener("click",function(e){
  tomove1 = 0
  slider2.style.left = `${tomove1}%`;
  document.querySelectorAll(".six-div")[1].className="six-div fas fa-circle";
  document.querySelectorAll(".six-div")[2].className="six-div fas fa-circle";
  e.target.className = 'addColor six-div fas fa-circle';
})
document.querySelector(".six-div:nth-child(2)").addEventListener("click",function(e){
  tomove1 = -103;
  slider2.style.left = `${tomove1}%`;
  document.querySelectorAll(".six-div")[0].className="six-div fas fa-circle";
  document.querySelectorAll(".six-div")[2].className="six-div fas fa-circle";
  e.target.className = 'addColor six-div fas fa-circle';
})
document.querySelector(".six-div:nth-child(3)").addEventListener("click",function(e){
  tomove1 = -206;
  slider2.style.left = `${tomove1}%`;
  document.querySelectorAll(".six-div")[0].className="six-div fas fa-circle";
  document.querySelectorAll(".six-div")[1].className="six-div fas fa-circle";
  e.target.className = 'addColor six-div fas fa-circle';
})

// map section
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

// scroll
$(window).scroll(function(){
  if($(window).scrollTop()>50){
    $(".foradd").addClass("sunset-topClass")
  }
  else{
    $(".foradd").removeClass("sunset-topClass")
  }
})