/* Getting the elements by their id for the links  */
const addbook = document.querySelector('.addbooks');
const contact = document.querySelector('.contacts');
const lists = document.querySelector('.list');

/* Selecting the class of the divs for the specific sections */
const pageOne = document.querySelector('.lists');
const pageTwo = document.querySelector('.contact');
const pageThree = document.querySelector('.addbook');

lists.addEventListener('click', () => {
  pageOne.style.display = 'flex';
  pageTwo.style.display = 'none';
  pageThree.style.display = 'none';
});
addbook.addEventListener('click', () => {
  pageOne.style.display = 'none';
  pageTwo.style.display = 'none';
  pageThree.style.display = 'flex';
});
contact.addEventListener('click', () => {
  pageOne.style.display = 'none';
  pageTwo.style.display = 'flex';
  pageThree.style.display = 'none';
});