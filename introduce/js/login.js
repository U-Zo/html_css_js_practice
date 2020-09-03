'use strict';
document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  const id = document.querySelector('#userid').value;

  if (id !== '우리은하') {
    document.querySelector('.check_user').style.display = 'block';
  } else {
    location.href = './pages/main.html';
  }
});
