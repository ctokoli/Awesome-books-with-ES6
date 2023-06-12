const linkEvent = () => {
  const add = document.querySelector('.add');
  const list = document.querySelector('.list');
  const contact = document.querySelector('.contact');
  const form = document.querySelector('.form-item');
  const mainContent = document.querySelector('.main-content');
  const contactContent = document.querySelector('.contact-cont');

  add.addEventListener('click', () => {
    mainContent.classList.add('hide');
    contactContent.classList.remove('show');
    form.classList.add('show');
  });

  list.addEventListener('click', () => {
    form.classList.remove('show');
    mainContent.classList.remove('hide');
    contactContent.classList.remove('show');
  });

  contact.addEventListener('click', () => {
    form.classList.remove('show');
    mainContent.classList.add('hide');
    contactContent.classList.add('show');
  });
};

export default linkEvent;