const time = 3000;
let currentImageIndex = 0;
const img = document.querySelectorAll('.items img');
const max = img.length;



const nextImage = () => {
  img[currentImageIndex].classList.remove("selected");
  

  currentImageIndex += 1; 
  if (currentImageIndex >= max) {
    currentImageIndex = 0;
  }

  img[currentImageIndex].classList.add("selected");
}

const start = () =>{
  setInterval(() =>{
    nextImage();
  }, time)
}

window.addEventListener('load', start)