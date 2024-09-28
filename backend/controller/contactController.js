const Contact = require('../models/contactModel');


// for post data
const postContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json(contact);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// for get all data from database
const getContact = async (req, res) => {
    try {
        const contact = await Contact.find();
        res.status(201).json(contact);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// for get single data by id
const getContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findById(id);
        res.status(201).json(contact);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//  for delete data from database by id
const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findByIdAndDelete(id);
        if (!contact) {
            res.status(404).json({ message: 'Contact not found' })
        } else {
            res.status(201).json({ message: "Contact information is Deleted" })
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// for update data 
const updateContact = async (req, res) => {
    try {

        const { id } = req.params;
        const contact = await Contact.findByIdAndUpdate(id, req.body);
        if (!contact) {
            res.status(404).json({ message: "Product not Found" })
        }
        const updatedContact = await Contact.findById(id);


        res.status(200).json(updatedContact);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}



module.exports = {
    postContact,
    getContact,
    getContactById,
    deleteContact,
    updateContact
}