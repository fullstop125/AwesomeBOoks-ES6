import Store from './modules/localStorage.js';
import UI from './modules/displayBooks.js';
import Book from './modules/addBook.js';

document.addEventListener('DOMContentLoaded', UI.showDate);
document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.getElementById('lists').addEventListener('click', (e) => {
  UI.removeBook(e);
});

const addBtn = document.getElementById('btn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const author = document.getElementById('atr').value;
  const title = document.getElementById('ttl').value;
  const newBook = new Book(author, title);
  const books = Store.getBooks();
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));
  document.location.reload();
});
