'use strict';

const inputUserName = document.querySelector('#name-input');
const outputUserName = document.querySelector('#name-output');

const inputUserHandler = () => {
  if (inputUserName.value.trim() === '') {
    outputUserName.textContent = 'Anonymous';
  } else {
    outputUserName.textContent = inputUserName.value;
  }
};

inputUserName.addEventListener('input', inputUserHandler);
