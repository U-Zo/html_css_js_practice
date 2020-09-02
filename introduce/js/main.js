'use strict';

const items = document.querySelectorAll('.body-item');

window.addEventListener('scroll', () => {
  for (let i = 0; i < items.length; i++) {
    if (i < items.length - 1) {
      items[i].style.opacity = (items[i + 1].offsetTop - items[i].offsetTop) /
          300;
    }
  }
});