import renderBooks from './render.js';

const deleteItem = (id, userData, content) => {
    userData = userData.filter((book) => book.id !== id);
    localStorage.setItem('formdata', JSON.stringify(userData));
    renderBooks(userData, content);
};

export default deleteItem;