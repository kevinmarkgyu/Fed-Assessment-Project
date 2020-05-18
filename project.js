var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function pushSlide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dots");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function addToCart(){

}
var modal = document.getElementById("myModal");
var modalss = document.getElementById("myModalss");


var imgbtn=document.getElementById('cartImage');

var span= document.getElementsByClassName("close")[0];
var success= document.getElementsByClassName("closed")[0];
var change=document.getElementById("change");

var addcart1=document.getElementById("addCart1");
var addcart2=document.getElementById("addCart2");
var addcart3=document.getElementById("addCart3");
var addcart4=document.getElementById("addCart4");
var addcart5=document.getElementById("addCart5");

addcart1.onclick=function(){
   
   var cart1=document.createElement("P");
  cart1.innerText="Iphone 11 $500";
  document.getElementById("change").appendChild(cart1);
  modalss.style.display="block";
}
addcart2.onclick=function(){
   var cart2=document.createElement("P");
  cart2.innerText="Iphone 11 Pro $900";
  document.getElementById("change").appendChild(cart2);
  modalss.style.display="block";
}
addcart3.onclick=function(){
   var cart3=document.createElement("P");
  cart3.innerText="Iphone 11 Pro Max $1,100";
  document.getElementById("change").appendChild(cart3);
  modalss.style.display="block";
}
addcart4.onclick=function(){
   var cart4=document.createElement("P");
  cart4.innerText="Iphone Xs Max $400";
  document.getElementById("change").appendChild(cart4);
  modalss.style.display="block";
}
addcart5.onclick=function(){
   var cart1=document.createElement("P");
  cart1.innerText="Iphone Xr $350";
  document.getElementById("change").appendChild(cart1);
  modalss.style.display="block";
}
  
imgbtn.onclick = function(){
  modal.style.display="block";
}

span.onclick = function() {
  modal.style.display = "none";
}
success.onclick = function() {
  modalss.style.display = "none";
}

