class Store {
  static getBooks= () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    const bookTitle = title.parentElement.parentElement.firstElementChild.textContent;
    const books = Store.getBooks();
    for (let i = 0; i < books.length; i += 1) {
      if (`${books[i].title} by ${books[i].author}` === bookTitle) {
        books.splice(i, 1);
      }
    }
    localStorage.setItem('books', JSON.stringify(books));
  }
}
export default Store;
