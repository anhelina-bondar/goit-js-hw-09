let formData = { email: '', message: '' };
const formElem = document.querySelector('.feedback-form');

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formElem.email.value = parsedData.email || '';
  formElem.message.value = parsedData.message || '';

  formData = parsedData;
}

formElem.addEventListener('input', e => {
  if (e.target.name === 'email' || e.target.name === 'message') {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});

formElem.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  formElem.reset();
});
