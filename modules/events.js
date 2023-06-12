const linkEvent = () => {
    let  add = document.querySelector('.add');
    let  list = document.querySelector('.list');
    let  contact = document.querySelector('.contact');
    let  form = document.querySelector('.form-item');
    let  mainContent = document.querySelector('.main-content');
    let  contactContent = document.querySelector('.contact-cont');

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
}

export default linkEvent;