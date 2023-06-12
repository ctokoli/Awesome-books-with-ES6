import { DateTime } from "./luxon.js";

  const renderItems = (userData) => {
    let dateNow = DateTime.now().toString();
    let time = DateTime.now().toFormat("MMMM dd yyyy, hh:mma");
    let content = document.querySelector('.books');
    const showTime = document.querySelector('.time');
    let placeholder = '';
    let timePlaceHolder = `<h3>${time}</h3>`;
    //console.log(time);
     userData.forEach((book, index) => {
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
    content.innerHTML = placeholder;
    showTime.innerHTML = timePlaceHolder;
 };

 export default renderItems;

 