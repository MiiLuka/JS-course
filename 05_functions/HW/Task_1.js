// Напишите функцию, которая создаёт массив email-адресов, не попавших в чёрный список.
// В качестве аргументов функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке.

let totalList = ['badmail@yandex.ru','valid@gmail.ru','unvalid@yandex.ru','mail87@gmail.ru','mailsupermail@yandex.ru','mymail2121@gmail.ru','notamail@yandex.ru'];
let blackList = ['badmail@yandex.ru','unvalid@yandex.ru','falsemail@yandex.ru','notamail@yandex.ru'];

console.log(`Список всех e-mail-адресов:${totalList}`);
console.log(`Список e-mail-адресов в черном списке:${blackList}`);

function sortingEmails(totalList, blackList) {
  let validEmails = totalList.filter(email => !blackList.includes(email));

  console.log(totalList);
  console.log(validEmails);

  return validEmails;
}
console.log(`Валидные e-mail-адреса:${sortingEmails(totalList, blackList)}`);

export default { sortingEmails };

