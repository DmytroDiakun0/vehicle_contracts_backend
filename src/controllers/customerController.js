const customerService = require('../services/customerService');

const getAllCustomers = (req, res) => {
    const allCustomers = customerService.getAllCustomers();
    res.send({ status: 'OK', data: allCustomers });
};

const getOneCustomer = (req, res) => {
    const {
        params: { customerId },
    } = req;
    if (!customerId) {
        return;
    }
    const customer = customerService.getOneCustomer(customerId);
    res.send({ status: 'OK', data: customer });
};

const createNewCustomer = (req, res) => {
    const { body } = req;

    if (
        !body.name ||
        !body.phoneNumber ||
        !body.mail ||
        !body.street ||
        !body.city
    ) {
        return;
    }

    const newCustomer = {
        name: body.name,
        phoneNumber: body.phoneNumber,
        mail: body.mail,
        street: body.street,
        city: body.city
    }

    const createdCustomer = customerService.createNewCustomer(newCustomer);

    res.status(201).send({
        status: 'OK',
        data: createdCustomer,
    });
};

const updateOneCustomer = (req, res) => {
    const {
        body,
        params: { customerId },
    } = req;
    if (!customerId) {
        return;
    }
    const updatedCustomer = customerService.updateOneCustomer(
        customerId,
        body
    );
    res.send({ status: 'OK', data: updatedCustomer });
};

const deleteOneCustomer = (req, res) => {
    const {
        params: { customerId },
    } = req;
    if (!customerId) {
        return;
    }
    customerService.deleteOneCustomer(customerId);
    res.status(204).send({ status: 'OK' });
};

module.exports = {
    getAllCustomers,
    getOneCustomer,
    createNewCustomer,
    updateOneCustomer,
    deleteOneCustomer,
};