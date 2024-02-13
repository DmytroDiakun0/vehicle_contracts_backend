const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllCustomers = () => {
    return DB.customers;
};

const getOneCustomer = (customerId) => {
    const customer = DB.customers.find(
        (customer) => customer.id === customerId
    );
    if (!customer) {
        return;
    }
    return customer;
};

const createNewCustomer = (newCustomer) => {
    const isAlreadyAdded =
        DB.customers.findIndex(
            (customer) => customer.name === newCustomer.name
        ) > -1;
    if (isAlreadyAdded) {
        return;
    }
    DB.customers.push(newCustomer);
    saveToDatabase(DB);
    return newCustomer;
};

const updateOneCustomer = (customerId, changes) => {
    const indexForUpdate = DB.customers.findIndex(
        (customer) => customer.id === customerId
    );
    if (indexForUpdate === -1) {
        return;
    }
    const updatedCustomer = {
        ...DB.customers[indexForUpdate],
        ...changes,
    };
    DB.customers[indexForUpdate] = updatedCustomer;
    saveToDatabase(DB);
    return updatedCustomer;
};

const deleteOneCustomer = (customerId) => {
    const indexForDeletion = DB.customers.findIndex(
        (customer) => customer.id === customerId
    );
    if (indexForDeletion === -1) {
        return;
    }
    DB.customers.splice(indexForDeletion, 1);
    saveToDatabase(DB);
};

module.exports = {
    getAllCustomers,
    createNewCustomer,
    getOneCustomer,
    updateOneCustomer,
    deleteOneCustomer,
};