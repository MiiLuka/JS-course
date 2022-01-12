window.addEventListener('DOMContentLoaded', function() {

  let input = document.createElement('input');
  let h2 = document.createElement('h2');

  let text;
  let temporary; // !Переменная для хранения промежуточных значений
  input.value = '';
  input.placeholder = 'Введите текст';
  h2.textContent = '';

  document.body.append(input);
  document.body.append(h2);

  function textShow() {
      text = setTimeout(() => {
          temporary = input.value;
          input.value = '';
          h2.textContent = temporary;
      }, 300);
  };
  // Событие
  input.addEventListener('input', function() {
      clearTimeout(text);
      textShow();
  });
});
