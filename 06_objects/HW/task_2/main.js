window.addEventListener('DOMContentLoaded', function() {
  const cities = [{
    value: 'Москва',
    label: 'Москва',
  },
  {
    value: 'Санкт-Петербург',
    label: 'Санкт-Петербург',
  },
  {
    value: 'Екатеринбург',
    label: 'Екатеринбург',
  },
  {
    value: 'Казань',
    label: 'Казань',
  },
  {
    value: 'Пермь',
    label: 'Пермь',
  },
  {
    value: 'Калининград',
    label: 'Калининград',
  }];

  function dropdownList(array, property) {
    const select = document.createElement('select'); // Создаем select
    document.body.append(select); // Вкладываем select в <body>

    // Создаем цикл for of для перебора текущего массива
    for(let el of array) {
      const option = document.createElement('option'); // Создаем option
      option.value = el.value; // Устанавливаем атрибут value для option
      option.innerHTML = el.label; // Размещаем текст внутри элемента

      if (option.value === property) {
        option.setAttribute('selected', ''); // Выбираем атрибут по умолчанию
      }

      select.append(option); // Вкладываем option в select
    }

    return select; // Возвращаем select
  }


  dropdownList(cities, 'Санкт-Петербург');
});
