//Научиться искать подстроку внутри строки.

//В переменную password запишите строку с любым произвольным паролем. Проверьте надёжность пароля.
// Пароль является надёжным, когда в нём есть хотя бы четыре символа, а также есть хотя бы один из символов '-', '_'.
// Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно надёжный»

let password = '4_1hYm55hQ';
if (password.length >= 4 && password.includes('_') || password.includes('-')) {
   console.log('Пароль надежный');
} else {
   console.log('Пароль не достаточно надежный');
}