const contractService = require('../services/contractService');

const getAllContracts = (req, res) => {
    const allContracts = contractService.getAllContracts();
    res.send({ status: 'OK', data: allContracts });
};

const getOneContract = (req, res) => {
    const {
        params: { contractId },
    } = req;
    if (!contractId) {
        return;
    }
    const contract = contractService.getOneContract(contractId);
    res.send({ status: 'OK', data: contract });
};

const createNewContract = (req, res) => {
    const { body } = req;

    if (
        !body.customerId ||
        !body.vehicleId ||
        !body.name ||
        !body.status ||
        !body.totalPrice ||
        !body.duration ||
        !body.distance ||
        !body.customerPrice ||
        !body.startDate ||
        !body.odometerAtExpiration ||
        !body.endDate ||
        !body.startMileage ||
        !body.events
    ) {
        return;
    }

    const newContract = {
        customerId: body.customerId,
        vehicleId: body.vehicleId,
        name: body.name,
        status: body.status,
        totalPrice: body.totalPrice,
        duration: body.duration,
        distance: body.distance,
        customerPrice: body.customerPrice,
        startDate: body.startDate,
        odometerAtExpiration: body.odometerAtExpiration,
        endDate: body.endDate,
        startMileage: body.startMileage,
        events: body.events
    }

    const createdContract = contractService.createNewContract(newContract);

    res.status(201).send({
        status: 'OK',
        data: createdContract,
    });
};

const updateOneContract = (req, res) => {
    const {
        body,
        params: { contractId },
    } = req;
    if (!contractId) {
        return;
    }
    const updatedContract = contractService.updateOneContract(
        contractId,
        body
    );
    res.send({ status: 'OK', data: updatedContract });
};

const deleteOneContract = (req, res) => {
    const {
        params: { contractId },
    } = req;
    if (!contractId) {
        return;
    }
    contractService.deleteOneContract(contractId);
    res.status(204).send({ status: 'OK' });
};

module.exports = {
    getAllContracts,
    getOneContract,
    createNewContract,
    updateOneContract,
    deleteOneContract,
};