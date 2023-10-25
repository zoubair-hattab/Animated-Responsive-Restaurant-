const menuBar = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelectorAll('.menu .list .btn');
const section = document.querySelectorAll('section');
const links = document.querySelectorAll('.navbar ul li a');

menuBar.onclick = () => {
  navbar.classList.toggle('active');
  menuBar.classList.toggle('fa-times');
};
let getSiblings = function (elem) {
  // Setup siblings array and get the first sibling
  let siblings = [];
  let sibling = elem.parentNode.firstChild;

  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
};
window.onscroll = function () {
  navbar.classList.remove('active');
  menuBar.classList.remove('fa-times');
  //Scroll Spy
  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 200;
    let id = sec.getAttribute('id');
    if (top > offset && top < offset + height) {
      links.forEach((sec) => {
        sec.classList.remove('active');
        document
          .querySelector('header .navbar a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  menuBtn.forEach((menu) => {
    menu.onclick = function () {
      getSiblings(this).forEach((ele) => {
        ele.classList.remove('active');
        this.classList.add('active');
        let src = this.getAttribute('data-src');
        document.querySelector('#menu-img').setAttribute('src', src);
      });
    };
  });
};
