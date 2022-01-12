let UserName = 'михаил';
let Surname = 'ИваНович';
let capitilizeName = (UserName.substr(0,1)).toUpperCase();
let toLowerCaseName = (UserName.substr(1)).toLowerCase(); 
let modifiedName = capitilizeName + toLowerCaseName;

let capitilizeSurname = (Surname.substr(0,1)).toUpperCase();
let toLowerCaseSurname = (Surname.substr(1)).toLowerCase();
let modifiedSurname = capitilizeSurname + toLowerCaseSurname;

console.log(modifiedName, modifiedSurname);

UserName === modifiedName && Surname === modifiedSurname ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');