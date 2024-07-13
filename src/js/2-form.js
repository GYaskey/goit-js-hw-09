const formEl = document.querySelector('.feedback-form');
const LOCAL_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

// ==================================================================

formEl.addEventListener('input', () => {
  formData.email = formEl.elements.email.value.trim();
  formData.message = formEl.elements.message.value.trim();

  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
});

// ==================================================================

document.addEventListener('DOMContentLoaded', () => {
  const formLoad = JSON.parse(localStorage.getItem(LOCAL_KEY));

  formEl.elements.email.value = formLoad?.email ?? '';
  formEl.elements.message.value = formLoad?.message ?? '';
});

// ==================================================================

formEl.addEventListener('submit', event => {
  event.preventDefault();

  formData.email = formEl.elements.email.value.trim();
  formData.message = formEl.elements.message.value.trim();

  if (!formData.email || !formData.message)
    return alert('Fill please all fields');

  console.log(formData);
  localStorage.removeItem(LOCAL_KEY);
  formData.email = '';
  formData.message = ''; // 40 і 41 рядок не дають правильно зберігати обʼєкт formData
  formEl.reset();
});
