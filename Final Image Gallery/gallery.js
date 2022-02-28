let i = 0;
let time = 2000;
let timer;
const images = [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg',
    'img/img6.jpg',
    'img/img7.jpg',

]

function StartSlideShow(){
  document.slide.src = images[i];
  if(i<images.length-1){
      i++;
  }else{
      i=0;
  }
  timer = setTimeout(StartSlideShow, time);
}

function stopSlideShow(){
  clearTimeout(timer);
  }
  function thumbsCLick(x){
      stopSlideShow();
      document.slide.src = images[x];
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