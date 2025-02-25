const bookModel = require('../models/BookModel');
const cartModel = require('../models/CartModel');
const wishlistModel = require('../models/WishlistModel');
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
            price: req.body.price,
            pages: req.body.pages,
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
                price: req.body.price,
                pages: req.body.pages,
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
                price: req.body.price,
                pages: req.body.pages,
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

// Cart 
const cartPage = async (req, res) => {
    try {
        let allData = await cartModel.find({});
        return res.render('cart', {
            allData
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const addtocart = async (req, res) => {
    try {
        const id = req.body.cartId;
        const single = await bookModel.findById(id);
        let duplicate = await cartModel.findById(id);
        console.log("Product Id :- " + single._id);
        
        if(duplicate){
            console.log("Book Already in Cart");
            return res.redirect('/cart');
        }else{
            await cartModel.create({
                _id: single._id,
                name: single.name,
                price: single.price,
                image: single.image,
                count: req.body.cartCount
            });
            console.log("Book AddtoCart Successfully");
            return res.redirect('/cart');
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
const delfromcart = async (req, res) => {
    try {
        const id = req.query.deleteId;
        await cartModel.findByIdAndDelete(id);
        console.log("Book Delete from Cart Successfully");
        return res.redirect('/cart');
    } catch (err) {
        console.log(err);
        return false;
    }
}

// WishList 
const wishlistPage = async(req,res)=>{
    try{
        const allData = await wishlistModel.find({});
        return res.render('wishlist',{
            allData
        });
    }catch(err){
        console.log(err);
        return false;
    }
}
const addtowishlist = async (req,res)=>{
    try{
        const id = req.body.wishlistId;
        const single = await bookModel.findById(id);
        const duplicate = await wishlistModel.findById(id);
        console.log("Product Id :- " + single._id);
        if(duplicate){
            console.log("Book Already in WishList");
            return res.redirect('/wishlist');
        }else{
            await wishlistModel.create({
                _id: single._id,
                name: single.name,
                price: single.price,
                pages: single.pages,
                author: single.author,
                image: single.image
            });
            console.log("Book Add to Wishlist Successfully");
            return res.redirect('/wishlist');
        }
    }catch(err){
        console.log(err);
        return false;
    }
}
const delfromwishlist = async(req,res) => {
    try{
        const id = req.query.deleteId;
        await wishlistModel.findByIdAndDelete(id);
        console.log("Book Delete from Wishlist Successfully");
        return res.redirect('/wishlist');
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    viewPage, addPage, insertData, deletedata, editdata, updateData, readMorePage, cartPage, addtocart, delfromcart,wishlistPage,addtowishlist,delfromwishlist
}