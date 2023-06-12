
const add = (count, title, author) => {
    const button = document.querySelector('.button');
          button.addEventListener('click', (e) => {
        e.preventDefault();
        const formData = new Book(count + 1, title.value, author.value);
        .userData.push(formData);
        localStorage.setItem('formdata', JSON.stringify(this.userData));
        this.count += 1;
        this.renderBooks();
      });
}