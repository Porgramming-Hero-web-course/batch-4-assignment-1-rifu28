{
  class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    getCarAge(): number {
      const currentYear = new Date().getFullYear();
      const total: number = currentYear - this.year;
      return total;
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  const result = car.getCarAge();
  console.log(result);
}
