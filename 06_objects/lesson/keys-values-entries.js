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

console.log(computer['socket']);

console.log(Object.keys(computer)); //список имен
console.log(Object.values(computer)); //список всех значений свойств объекта (редкое использование)
console.log(Object.entries(computer)); //получаем и имена, и значения одновременно
