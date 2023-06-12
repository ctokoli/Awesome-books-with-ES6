 
 export default class RenderBooks{
    constructor(userData){
        this.userData = userData;
    }

    let placeholder = '';
    this.userData.forEach((book, index) => {
      const backgroundColor = index % 2 === 0 ? 'white' : '#d2d2d2';
      placeholder += `
       <div class="book-item" style="background-color: ${backgroundColor};">
        <div class="book" >
        <h3>"${book.title}" by ${book.author}</h3>
        </div>
        <button class="remove-btn" data-id="${book.id}">Remove</button>
       </div>
  
      `;
    });
    this.content.innerHTML = placeholder;
  }