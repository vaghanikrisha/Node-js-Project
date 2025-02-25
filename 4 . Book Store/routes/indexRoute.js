const express = require('express');

const routes = express.Router();
const { viewPage, addPage, insertData, deletedata, editdata, updateData, readMorePage, cartPage, addtocart, delfromcart, wishlistPage, addtowishlist, delfromwishlist } = require('../controllers/BookController');

const multer = require('multer');
const st = multer.diskStorage({
    destination: (req, res, cb) => {
        return cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const uniq = Math.floor(Math.random() * 100000000);
        return cb(null, `${file.fieldname}-${uniq}`)
    }
});
const fileUpload = multer({ storage: st }).single("image");

routes.get('/', viewPage);
routes.get('/add', addPage);
routes.post('/insertData', fileUpload, insertData);
routes.get('/deletedata', deletedata);
routes.get('/editdata', editdata);
routes.post('/updateData', fileUpload, updateData);

routes.get('/readmore', readMorePage);
routes.get('/cart', cartPage);
routes.post('/addtocart', addtocart);
routes.get('/delfromcart', delfromcart);

routes.get('/wishlist', wishlistPage);
routes.post('/addtowishlist', addtowishlist);
routes.get('/delfromwishlist', delfromwishlist);

module.exports = routes;