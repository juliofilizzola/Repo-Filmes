const items = document.querySelector('.items');
items.addEventListener('wheel', event => {
  if (event.deltaY > 0) {
    event.target.scrollBy(300, 0)
  } else {
    event.target.scrollBy(-300, 0)
  }
})

const buttom = document.querySelector('.carousel-control-prev');

buttom.addEventListener('click', event => {
  console.log(event);
})