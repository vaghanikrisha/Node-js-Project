const bookModel = require('../models/BookModel');
const fs = require('fs');
const path = require('path');

// Book add,View,Delete,Update
const viewPage = async (req, res) => {
    try {
        let allData = await bookModel.find({});
        return res.render('view', {
            allData
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const addPage = (req, res) => {
    return res.render('add');
}
const insertData = async (req, res) => {
    try {
        await bookModel.create({
            name: req.body.name,
            author: req.body.author,
            image: req.file.filename,
            description: req.body.description
        });
        console.log("Book added successfully");
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const deletedata = async (req, res) => {
    try {
        let id = req.query.deleteId;
        let old = await bookModel.findById(id);
        fs.unlinkSync(path.join(__dirname, '../uploads', old.image));
        await bookModel.findByIdAndDelete(id);
        console.log("Book deleted successfully");
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const editdata = async (req, res) => {
    try {
        let id = req.query.editId;
        let single = await bookModel.findById(id);
        return res.render('edit', {
            single
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const updateData = async (req, res) => {
    try {
        let id = req.body.updateId;
        if (req.file) {
            let old = await bookModel.findById(id);
            fs.unlinkSync(path.join(__dirname, '../uploads', old.image));
            await bookModel.findByIdAndUpdate(id, {
                name: req.body.name,
                author: req.body.author,
                image: req.file.filename,
                description: req.body.description
            });
            console.log("Book Updated Successfully");
            return res.redirect('/');
        } else {
            let old = await bookModel.findById(id);
            await bookModel.findByIdAndUpdate(id, {
                name: req.body.name,
                author: req.body.author,
                image: old.image,
                description: req.body.description
            });
            console.log("Book Updated Successfully");
            return res.redirect('/');
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

// ReadMore 
const readMorePage = async (req, res) => {
    try {
        let id = req.query.readmoreId;
        let single = await bookModel.findById(id);
        return res.render('readmore', {
            single,
            count: 1
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}





module.exports = {
    viewPage, addPage, insertData, deletedata, editdata, updateData, readMorePage
}