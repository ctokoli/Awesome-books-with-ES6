import Book from './book.js';
import renderBooks from './render.js';

const addItem = (userData, count) => {
  const button = document.querySelector('.button');
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  const content = document.querySelector('.books');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new Book(count +=1, title.value, author.value);
    userData.push(formData);
    localStorage.setItem('formdata', JSON.stringify(userData));
    //count += 1;
    renderBooks(userData, content);
    title.value = '';
    author.value = '';
  });
};

export default addItem;