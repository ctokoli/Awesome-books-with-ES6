import renderBooks from './render.js';

const deleteItem = (id, userData, content) => {
  userData = userData.filter((book) => book.id !== id);
  console.log(userData.id);
  localStorage.setItem('formdata', JSON.stringify(userData));
  renderBooks(userData, content);
  console.log(userData);
};

export default deleteItem;