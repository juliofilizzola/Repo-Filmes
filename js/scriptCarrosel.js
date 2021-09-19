const time = 5000;
let currentImageIndex = 0;
const img = document.querySelectorAll('.img-Nav img');
const max = img.length;



const nextImage = () => {
  img[currentImageIndex].classList.remove("selecteds");
  

  currentImageIndex += 1; 
  if (currentImageIndex >= max) {
    currentImageIndex = 0;
  }

  img[currentImageIndex].classList.add("selecteds");
}

const start = () =>{
  setInterval(() =>{
    nextImage();
  }, time)
}

window.addEventListener('load', start)