const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllContracts = () => {
    return DB.contracts;
};

const getOneContract = (contractId) => {
    const contract = DB.contracts.find(
        (contract) => contract.id === contractId
    );
    if (!contract) {
        return;
    }
    return contract;
};

const createNewContract = (newContract) => {
    const isAlreadyAdded =
        DB.contracts.findIndex(
            (contract) => contract.name === newContract.name
        ) > -1;
    if (isAlreadyAdded) {
        return;
    }
    DB.contracts.push(newContract);
    saveToDatabase(DB);
    return newContract;
};

const updateOneContract = (contractId, changes) => {
    const indexForUpdate = DB.contracts.findIndex(
        (contract) => contract.id === contractId
    );
    if (indexForUpdate === -1) {
        return;
    }
    const updatedContract = {
        ...DB.contracts[indexForUpdate],
        ...changes,
    };
    DB.contracts[indexForUpdate] = updatedContract;
    saveToDatabase(DB);
    return updatedContract;
};

const deleteOneContract = (contractId) => {
    const indexForDeletion = DB.contracts.findIndex(
        (contract) => contract.id === contractId
    );
    if (indexForDeletion === -1) {
        return;
    }
    DB.contracts.splice(indexForDeletion, 1);
    saveToDatabase(DB);
};

module.exports = {
    getAllContracts,
    createNewContract,
    getOneContract,
    updateOneContract,
    deleteOneContract,
};