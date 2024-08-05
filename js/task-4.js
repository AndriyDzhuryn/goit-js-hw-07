'use strict';

const formLogin = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();

  if (
    formLogin.elements.email.value.trim() === '' ||
    formLogin.elements.password.value.trim() === ''
  ) {
    alert('All form fields must be filled in');
  }

  const formData = {
    email: formLogin.elements.email.value.trim(),
    password: formLogin.elements.password.value.trim(),
  };

  console.log(formData);

  formLogin.reset();
};

formLogin.addEventListener('submit', onFormSubmit);
