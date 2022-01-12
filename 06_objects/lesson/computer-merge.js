let motherBoard = {
  usbPortCount: 8,
  chipset: 'AMD X570',
  socket: 'AM3/AM4',
};

let cpu = {
  coreCount: 8,
  cpuManufacturer: 'AMD',
  socket: 'AM4',
};

let videoCard = {
  videoCardModel: 'NVidia GeForce GTX 1060',
  videoMemory: 4096,
};

let ram = {
  ramType: 'DDR4',
  ramVolume: 8192,
  ramFrequency: 3200,
};

// первый вариант объединения обектов
let computer = {
  price: 100000,
  ...motherBoard, //'...' - это spread оператор!
  //свойство socket от motherBpard изменяется на свойство socket от cpu. Добавлено последнее свойство.
  ...cpu,
  ...videoCard,
  ...ram,
};

//второй вариант объединения обектов
//целевой объектЮ в который будут добавлены следующие
let computerWithAssign = Object.assign (
  {
      price: 200000,
  },
  motherBoard, cpu, videoCard, ram //добавленные объекты
);

console.log(computer);
console.log(computerWithAssign);
