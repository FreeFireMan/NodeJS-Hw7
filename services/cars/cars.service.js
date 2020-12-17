const database = require('../../database').getInstance();

module.exports = {
    getCars: () => {
        const Car = database.getModel('Car');

        return Car.findAll();
    },

    createCar: (car) => {
        const Car = database.getModel('Car');

        return Car.create(car);
    },

    getCarById: (carId) => {
        const Car = database.getModel('Car');

        return Car.findByPk(carId);
    },

    deleteCar: (carId) => {
        const Car = database.getModel('Car');

        return Car.destroy({
            where: { id: carId }
        });
    },

};
