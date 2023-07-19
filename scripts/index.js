const popups = document.querySelectorAll('.popup');
const [form, message] = popups;

function toggleModals() {
  form.classList.remove('popup_active');
  message.classList.add('popup_active')
}

function handleRateFormSubmit(e) {
  e.preventDefault();
  const starRate = document.forms.rateForm.elements.starRate;
  const string = `You selected ${starRate.value} out of 5`;

  toggleModals();
  document.querySelector('.message .popup__text').textContent = string
}

form.addEventListener('submit', handleRateFormSubmit)