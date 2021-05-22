function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: id, name: name, thumbnail}) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__id', id));
  section.appendChild(createCustomElement('span', 'item__name', name));
  console.log(thumbnail)
  section.appendChild(createProductImageElement(`${thumbnail.path}.${thumbnail.extension}`));
  const sectionItems = document.querySelector('.items');
  sectionItems.appendChild(section);
  return section;
}

const searchInfoApiAsync = () => {
  const keyPub = '2142289d5bb266aa4efc29e905f1e2c9';
  const keyMesc = 'b3be571fac403debd889682454cdef24';
  const keyDate = '1621340894';

	fetch(`http://gateway.marvel.com/v1/public/characters?ts=${keyDate}&apikey=${keyPub}&hash=${keyMesc}&offset=200&limit=100`)
    .then(response => response.json())
    .then(response => response.data.results.filter((value) => !value.thumbnail.path.includes('image_not_available')).forEach((value) => createProductItemElement(value)));
}

window.onload = function onload() {
  searchInfoApiAsync();
}