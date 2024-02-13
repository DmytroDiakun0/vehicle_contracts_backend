const { v4: uuid } = require('uuid');
const Contract = require('../database/Contract');

const getAllContracts = () => {
    const allContracts = Contract.getAllContracts();
    return allContracts;
};

const getOneContract = (contractId) => {
    const contract = Contract.getOneContract(contractId);
    return contract;
};

const createNewContract = (newContract) => {
    const contractToInsert = {
        ...newContract,
        id: uuid()
    };
    const createdContract = Contract.createNewContract(
        contractToInsert
    );
    return createdContract;
};

const updateOneContract = (contractId, changes) => {
    const updatedContract = Contract.updateOneContract(
        contractId,
        changes
    );
    return updatedContract;
};

const deleteOneContract = (contractId) => {
    Contract.deleteOneContract(contractId);
};

module.exports = {
    getAllContracts,
    getOneContract,
    createNewContract,
    updateOneContract,
    deleteOneContract,
};