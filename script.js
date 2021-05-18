window.onload = function onlod() {
  searchInfoApiAsync();
}

const searchInfoApiAsync = async () => {
  const keyPub = '2142289d5bb266aa4efc29e905f1e2c9';
  const keyMesc = 'b3be571fac403debd889682454cdef24';
  const keyDate = '1621340894';

	await fetch(`http://gateway.marvel.com/v1/public/comics?ts=${keyDate}&apikey=${keyPub}&hash=${keyMesc}`)
	.then(response => {
		console.log(response.json());
	})
	.catch(err => {
		console.log(err);
	});

}

