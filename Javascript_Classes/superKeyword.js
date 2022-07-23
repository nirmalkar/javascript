class Vehicle {
    constructor(vehicleName, type, isFreightVehicle) {
        this.vehicleName = vehicleName
        this.type = type
        this.isFreightVehicle = isFreightVehicle
    }
    printDetail() {
        console.log(
            this.vehicleName +
                ' is a ' +
                this.type +
                ' and it is a' +
                this.isFreightVehicle
                ? ' Freight Vehicle'
                : ' Passenger Vehicle'
        )
    }
}

class Car extends Vehicle {
    constructor(vehicleName, type, isFreightVehicle) {
        super(vehicleName, type, isFreightVehicle)
    }
    getDescription() {
        Car.printDetail()
    }
}

const mercedes = new Car('Mercedes-Benz AMG GT', 'Ground Vehicle', false)
console.log(mercedes)
console.log(Car.getDescription())
