import { Owner, Mechanic, Engine, Wheel, Car, Order } from './models';

// 1. Создаем владельца
const owner = new Owner(1, "Иван Иванов", "+79991234567", "ivan@mail.ru");

// 2. Создаем двигатель
const engine = new Engine(1, "V8", 4.4, 500);

// 3. Создаем колеса
const wheel1 = new Wheel(1, 19, "Летняя");
const wheel2 = new Wheel(2, 19, "Летняя");

// 4. Создаем машину
const car = new Car(1, "BMW", "M5", 2022, "WBA123456789", "А123БВ", owner, engine, [wheel1, wheel2]);

// 5. Создаем механика
const mechanic = new Mechanic(1, "Петр Петров", "Двигатели", 10);

// 6. Создаем заказ
const order = new Order(1, "Замена масла", 5000, "Новый", car, mechanic);

// --- ТЕСТИРУЕМ МЕТОДЫ ИЗ ДИАГРАММЫ ---

console.log("--- Действия владельца ---");
owner.buyCar();
owner.acceptForService();

console.log("\n--- Действия с машиной ---");
car.start();    // Вызовет engine.start()
car.drive();
car.breakDown();

console.log("\n--- Действия механика ---");
mechanic.acceptOrder();
mechanic.performRepair();

console.log("\n--- Работа с заказом ---");
order.open();
order.pay();
order.close();
