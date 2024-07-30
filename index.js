function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json));
  
  // renderBooks(json)
  //.then(res => console.log(res))
  //return res
  
  //let data = document.createElement('p').main.res
}
  // To pass the tests, don't forget to return your fetch!
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

  // for all fetch labs, make sure to add "return" ahead of the fetch for it to pass properly. 