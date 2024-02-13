const Customer = require('../database/Customer');
const {v4: uuid} = require("uuid");

const getAllCustomers = () => {
    const allCustomers = Customer.getAllCustomers();
    return allCustomers;
};

const getOneCustomer = (customerId) => {
    const customer = Customer.getOneCustomer(customerId);
    return customer;
};

const createNewCustomer = (newCustomer) => {
    const customerToInsert = {
        ...newCustomer,
        id: uuid()
    };
    const createdCustomer = Customer.createNewCustomer(
        customerToInsert
    );
    return createdCustomer;
};

const updateOneCustomer = (customerId, changes) => {
    const updatedCustomer = Customer.updateOneCustomer(
        customerId,
        changes
    );
    return updatedCustomer;
};

const deleteOneCustomer = (customerId) => {
    Customer.deleteOneCustomer(customerId);
};

module.exports = {
    getAllCustomers,
    getOneCustomer,
    createNewCustomer,
    updateOneCustomer,
    deleteOneCustomer,
};