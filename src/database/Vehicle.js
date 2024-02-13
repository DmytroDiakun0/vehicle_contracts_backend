const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllVehicles = () => {
    return DB.vehicles;
};

const getOneVehicle = (vehicleId) => {
    const vehicle = DB.vehicles.find(
        (vehicle) => vehicle.id === vehicleId
    );
    if (!vehicle) {
        return;
    }
    return vehicle;
};

const createNewVehicle = (newVehicle) => {
    const isAlreadyAdded =
        DB.vehicles.findIndex(
            (vehicle) => vehicle.carNumber === newVehicle.carNumber
        ) > -1;
    if (isAlreadyAdded) {
        return;
    }
    DB.vehicles.push(newVehicle);
    saveToDatabase(DB);
    return newVehicle;
};

const updateOneVehicle = (vehicleId, changes) => {
    const indexForUpdate = DB.vehicles.findIndex(
        (vehicle) => vehicle.id === vehicleId
    );
    if (indexForUpdate === -1) {
        return;
    }
    const updatedVehicle = {
        ...DB.vehicles[indexForUpdate],
        ...changes,
    };
    DB.vehicles[indexForUpdate] = updatedVehicle;
    saveToDatabase(DB);
    return updatedVehicle;
};

const deleteOneVehicle = (vehicleId) => {
    const indexForDeletion = DB.vehicles.findIndex(
        (vehicle) => vehicle.id === vehicleId
    );
    if (indexForDeletion === -1) {
        return;
    }
    DB.vehicles.splice(indexForDeletion, 1);
    saveToDatabase(DB);
};

module.exports = {
    getAllVehicles,
    createNewVehicle,
    getOneVehicle,
    updateOneVehicle,
    deleteOneVehicle,
};