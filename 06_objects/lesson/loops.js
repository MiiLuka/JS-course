//объект
let computer = {
  price: 100000,
  usbPortCount: 8,
  chipset: 'AMD X570',
  socket: 'AM4',
  coreCount: 8,
  cpuManufacturer: 'AMD',
  videoCardModel: 'NVidia GeForce GTX 1060',
  videoMemory: 4096,
  ramType: 'DDR4',
  ramVolume: 8192,
  ramFrequency: 3200
};

//каждая из функций возвращает массив, поэтому мы можем...
let keys = Object.keys(computer);
let values = Object.values(computer);
let entries = Object.entries(computer);

//Этот цикл для выявления значений свойств
console.log('\n\nVALUE\n');
for (let value of values) {
  console.log(value);
}

// теперь выявляем имена свойств, при этом выводим сначало само свойство key, а потом значение свойства key у объекта computer
console.log('\n\nKEYS\n');
for (let key of keys) {
  console.log(`${key}:${computer[key]}`);
}
//сразу получааем ключ и значение
console.log('\n\nENTRIES\n');
for (let entry of entries) {
  console.log(`${entry[0]}:${entry[1]}`);
}

//тоже самое для entry, но более читаемо //ДЕСТРУКТУРИЗАЦИЯ!!!
console.log('\n\nENTRIES WITH DESTRUCTURING\n');
for (let [key, value] of entries) {
  console.log(`${key}:${value}`);
}
//устаревший вариант hasOwnProperty определяет наличие конкретного свойства у данного объекта
console.log('\n\nOLD VAR\n');
for (let key in computer) {
  if (!computer.hasOwnProperty(key)) {
    continue;
  }
  console.log(computer[key]);
}
