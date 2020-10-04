import Home from './home.js';
import About from './about.js';
import Contact from './contact.js';

let main = document.querySelector('#main'),
  home = document.querySelector('#home'),
  about = document.querySelector('#about'),
  contact = document.querySelector('#contact');

let activeClass = 'navbar-item active',
  notActiveClass = 'navbar-item';

let currentPage = 'home';

let click = {
  home: () => {
    currentPage = 'home';

    checkPage();
  },
  about: () => {
    currentPage = 'about';
    checkPage();
  },
  contact: () => {
    currentPage = 'contact';
    checkPage();
  },
};

let checkPage = () => {
  if (currentPage == 'home') {
    main.innerHTML = Home;

    home.className = activeClass;
    about.className = notActiveClass;
    contact.className = notActiveClass;
  } else if (currentPage == 'about') {
    main.innerHTML = About;

    home.className = notActiveClass;
    about.className = activeClass;
    contact.className = notActiveClass;
  } else if (currentPage == 'contact') {
    main.innerHTML = Contact;

    home.className = notActiveClass;
    about.className = notActiveClass;
    contact.className = activeClass;
  }
};

checkPage();
home.addEventListener('click', click.home);
about.addEventListener('click', click.about);
contact.addEventListener('click', click.contact);
