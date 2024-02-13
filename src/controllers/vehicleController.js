const vehicleService = require('../services/vehicleService');

const getAllVehicles = (req, res) => {
    const allVehicles = vehicleService.getAllVehicles();
    res.send({ status: 'OK', data: allVehicles });
};

const getOneVehicle = (req, res) => {
    const {
        params: { vehicleId },
    } = req;
    if (!vehicleId) {
        return;
    }
    const vehicle = vehicleService.getOneVehicle(vehicleId);
    res.send({ status: 'OK', data: vehicle });
};

const createNewVehicle = (req, res) => {
    const { body } = req;

    if (
        !body.carNumber ||
        !body.serialNumber ||
        !body.releaseDate ||
        !body.brand ||
        !body.fuelType ||
        !body.battery
    ) {
        return;
    }

    const newVehicle = {
        carNumber: body.carNumber,
        serialNumber: body.serialNumber,
        releaseDate: body.releaseDate,
        brand: body.brand,
        fuelType: body.fuelType,
        battery: body.battery
    }

    const createdVehicle = vehicleService.createNewVehicle(newVehicle);

    res.status(201).send({
        status: 'OK',
        data: createdVehicle,
    });
};

const updateOneVehicle = (req, res) => {
    const {
        body,
        params: { vehicleId },
    } = req;
    if (!vehicleId) {
        return;
    }
    const updatedVehicle = vehicleService.updateOneVehicle(
        vehicleId,
        body
    );
    res.send({ status: 'OK', data: updatedVehicle });
};

const deleteOneVehicle = (req, res) => {
    const {
        params: { vehicleId },
    } = req;
    if (!vehicleId) {
        return;
    }
    vehicleService.deleteOneVehicle(vehicleId);
    res.status(204).send({ status: 'OK' });
};

module.exports = {
    getAllVehicles,
    getOneVehicle,
    createNewVehicle,
    updateOneVehicle,
    deleteOneVehicle,
};