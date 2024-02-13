const Vehicle = require('../database/Vehicle');
const {v4: uuid} = require("uuid");

const getAllVehicles = () => {
    const allVehicles = Vehicle.getAllVehicles();
    return allVehicles;
};

const getOneVehicle = (vehicleId) => {
    const vehicle = Vehicle.getOneVehicle(vehicleId);
    return vehicle;
};

const createNewVehicle = (newVehicle) => {
    const vehicleToInsert = {
        ...newVehicle,
        id: uuid()
    };
    const createdVehicle = Vehicle.createNewVehicle(
        vehicleToInsert
    );
    return createdVehicle;
};

const updateOneVehicle = (vehicleId, changes) => {
    const updatedVehicle = Vehicle.updateOneVehicle(
        vehicleId,
        changes
    );
    return updatedVehicle;
};

const deleteOneVehicle = (vehicleId) => {
    Vehicle.deleteOneVehicle(vehicleId);
};

module.exports = {
    getAllVehicles,
    getOneVehicle,
    createNewVehicle,
    updateOneVehicle,
    deleteOneVehicle,
};