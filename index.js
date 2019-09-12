let driverId = 0;
let passengerId = 0;
let tripId = 0;


class Driver (name) {
  constructor(name) {
    this.name = name;
    this.id = driverId++;
    store.drivers.push(this);
  }
}
