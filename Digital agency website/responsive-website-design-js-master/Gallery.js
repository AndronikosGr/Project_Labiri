let index = 0;
let timer;
let slides = document.getElementsByClassName("slides");

startSlider();
function startSlider(){
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    index++;
    if(index > slides.length){
        index = 1;
    }
    slides[index-1].style.display = "block";
    timer= setTimeout(startSlider, 2000);
}
function stopSlider(){
    clearTimeout(timer);
    
}

var slider_img = document.querySelector('.slider-img');


function prev(){
  if(i <= 0)i = images.length;
  i--;
 setImg();

}

function next(){
  if (i >= images.length - 1) i = -1
  i++;
  console.log(i);
 setImg();
  
}

function setImg(){
 slider_img.setAttribute('src',   images[i]);
}