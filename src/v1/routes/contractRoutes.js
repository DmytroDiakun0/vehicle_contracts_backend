const express = require('express');
const {getAllContracts, getOneContract, createNewContract, updateOneContract, deleteOneContract}
    = require("../../controllers/contractController");
const router = express.Router();

router.get('/', getAllContracts);

router.get('/:contractId', getOneContract);

router.post('/', createNewContract);

router.patch('/:contractId', updateOneContract);

router.delete('/:contractId', deleteOneContract);

module.exports = router;