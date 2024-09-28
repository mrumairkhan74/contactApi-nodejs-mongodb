const express = require('express');

const router = express.Router();

const {getContact, postContact, deleteContact, getContactById, updateContact} = require('../controller/contactController');

router.get('/getAll',getContact);
router.get('/getById/:id',getContactById);
router.post('/post',postContact);
router.put('/put/:id',updateContact);
router.delete('/delete/:id',deleteContact);

module.exports = router;