const express = require('express');
const {getAllCustomers, getOneCustomer, createNewCustomer, updateOneCustomer, deleteOneCustomer}
    = require("../../controllers/customerController");
const router = express.Router();

router.get('/', getAllCustomers);

router.get('/:customerId', getOneCustomer);

router.post('/', createNewCustomer);

router.patch('/:customerId', updateOneCustomer);

router.delete('/:customerId', deleteOneCustomer);

module.exports = router;