// ==========================================
// 1. ВЛАДЕЛЕЦ (Owner)
// ==========================================
export class Owner {
    id: number;
    fullName: string; // фио
    phone: string;
    email: string;

    constructor(id: number, fullName: string, phone: string, email: string) {
        this.id = id;
        this.fullName = fullName;
        this.phone = phone;
        this.email = email;
    }

    // Методы из диаграммы
    buyCar(): void {
        console.log(`${this.fullName} покупает машину.`);
    }

    sellCar(): void {
        console.log(`${this.fullName} продает машину.`);
    }

    acceptForService(): void {
        console.log(`${this.fullName} принял машину в сервис.`);
    }
}

// ==========================================
// 2. МЕХАНИК (Mechanic)
// ==========================================
export class Mechanic {
    id: number;
    fullName: string; // фио
    specialization: string;
    experience: number; // стж

    constructor(id: number, fullName: string, specialization: string, experience: number) {
        this.id = id;
        this.fullName = fullName;
        this.specialization = specialization;
        this.experience = experience;
    }

    // Методы из диаграммы
    acceptOrder(): void {
        console.log(`Механик ${this.fullName} принял заказ.`);
    }

    performRepair(): boolean {
        console.log(`Механик ${this.fullName} выполняет ремонт.`);
        return true; // Успешно выполнен
    }

    closeOrder(): void {
        console.log(`Механик ${this.fullName} закрыл заказ.`);
    }
}

// ==========================================
// 3. ДВИГАТЕЛЬ (Engine)
// ==========================================
export class Engine {
    id: number;
    type: string; // тип
    volume: number; // объем
    power: number; // мощность

    constructor(id: number, type: string, volume: number, power: number) {
        this.id = id;
        this.type = type;
        this.volume = volume;
        this.power = power;
    }

    // Методы из диаграммы
    start(): boolean {
        console.log("Двигатель запущен.");
        return true;
    }

    stop(): void {
        console.log("Двигатель остановлен.");
    }

    check(): boolean {
        console.log("Проверка двигателя...");
        return true; // Исправен
    }
}

// ==========================================
// 4. КОЛЕСО (Wheel)
// ==========================================
export class Wheel {
    id: number;
    diameter: number; // диаметр
    tireType: string; // тип_шины

    constructor(id: number, diameter: number, tireType: string) {
        this.id = id;
        this.diameter = diameter;
        this.tireType = tireType;
    }

    // Методы из диаграммы
    pumpUp(): void {
        console.log("Колесо накачано.");
    }

    replace(): void {
        console.log("Колесо заменено.");
    }

    checkPressure(): number {
        console.log("Проверка давления в колесе...");
        return 2.2; // Возвращаем давление
    }
}

// ==========================================
// 5. АВТОМОБИЛЬ (Car)
// ==========================================
export class Car {
    id: number;
    brand: string; // марка
    model: string; // модель
    manufactureYear: number; // год_выпуска
    vin: string; // VIN
    plateNumber: string; // номер
    
    // Связи
    owner: Owner;
    engine: Engine;
    wheels: Wheel[]; // Машина состоит из колес (1 ко многим)

    constructor(
        id: number, brand: string, model: string, 
        manufactureYear: number, vin: string, plateNumber: string,
        owner: Owner, engine: Engine, wheels: Wheel[] = []
    ) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.manufactureYear = manufactureYear;
        this.vin = vin;
        this.plateNumber = plateNumber;
        this.owner = owner;
        this.engine = engine;
        this.wheels = wheels;
    }

    // Методы из диаграммы
    start(): boolean {
        return this.engine.start();
    }

    stop(): void {
        this.engine.stop();
    }

    drive(): void {
        console.log(`${this.brand} ${this.model} едет.`);
    }

    breakDown(): boolean {
        console.log(`${this.brand} ${this.model} сломался!`);
        return true;
    }
}

// ==========================================
// 6. ЗАКАЗ (Order)
// ==========================================
export class Order {
    id: number;
    createdAt: Date; // дата_создания
    description: string; // описание_работ
    cost: number; // стоимость
    status: string; // статус

    // Связи
    car: Car;
    mechanic: Mechanic;

    constructor(
        id: number, description: string, cost: number, status: string,
        car: Car, mechanic: Mechanic, createdAt: Date = new Date()
    ) {
        this.id = id;
        this.description = description;
        this.cost = cost;
        this.status = status;
        this.car = car;
        this.mechanic = mechanic;
        this.createdAt = createdAt;
    }

    // Методы из диаграммы
    open(): void {
        this.status = "Открыт";
        console.log(`Заказ №${this.id} открыт.`);
    }

    pay(): boolean {
        this.status = "Оплачен";
        console.log(`Заказ №${this.id} оплачен. Сумма: ${this.cost}`);
        return true;
    }

    close(): void {
        this.status = "Закрыт";
        console.log(`Заказ №${this.id} закрыт.`);
    }
}
