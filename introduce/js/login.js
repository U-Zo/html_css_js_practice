'use strict';
document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  const id = document.querySelector('#userid').value;
  const passwd = document.querySelector('#passwd').value;

  if (id !== 'admin' || passwd !== 'admin') {
    document.querySelector('.check_user').style.display = 'block';
  } else {
    location.href = '../index.html';
  }
});
