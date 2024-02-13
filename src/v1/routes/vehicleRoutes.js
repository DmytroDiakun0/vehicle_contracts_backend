const express = require('express');
const {getAllVehicles, getOneVehicle, createNewVehicle, updateOneVehicle, deleteOneVehicle}
    = require("../../controllers/vehicleController");
const router = express.Router();

router.get('/', getAllVehicles);

router.get('/:vehicleId', getOneVehicle);

router.post('/', createNewVehicle);

router.patch('/:vehicleId', updateOneVehicle);

router.delete('/:vehicleId', deleteOneVehicle);

module.exports = router;