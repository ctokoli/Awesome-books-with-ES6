import renderItems from './modules/render.js';
import addItem from './modules/addItems.js';
import deleteItem from './modules/delete.js';
import linkEvent from './modules/events.js';

class BookManager {
  constructor() {
    this.content = document.querySelector('.books');
    this.userData = JSON.parse(localStorage.getItem('formdata')) || [];
    this.count = this.userData.length;
    this.setupEventListeners();
  }

  setupEventListeners() {
    addItem(this.userData, this.count);
    linkEvent();
    this.content.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-btn')) {
        const id = parseInt(e.target.dataset.id, 10);
        deleteItem(id, this.userData, this.content);
      }
    });
  }

  renderBooks() {
    renderItems(this.userData);
  }
}

const bookManager = new BookManager();
bookManager.renderBooks();