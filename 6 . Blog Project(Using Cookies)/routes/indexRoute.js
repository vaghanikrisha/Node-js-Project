const express = require('express');

const routes = express.Router();
const { viewPage, addPage, insertData, deletedata, editdata, updateData, readMorePage } = require('../controllers/BookController');

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


module.exports = routes;