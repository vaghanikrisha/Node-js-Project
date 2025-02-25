const express = require('express');
//import express from "express";

const port = 8000;

const app = express();

app.set('view engine', 'ejs');

const path = require('path')

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    return res.render('sign-in')
})
app.get('/dashboard', (req, res) => {
    return res.render('dashboard')
})
app.get('/billing', (req, res) => {
    return res.render('billing')
})
app.get('/profile', (req, res) => {
    return res.render('profile')

})
app.get('/sign-up', (req, res) => {
    return res.render('sign-up')
})
app.get('/sign-in', (req, res) => {
    return res.render('sign-in')
})
app.get('/tables', (req, res) => {
    return res.render('tables')

})
app.get('/rtl', (req, res) => {
    return res.render('rtl')

})
app.get('/virtual-reality', (req, res) => {
    return res.render('virtual-reality')

})
app.get('/notification', (req, res) => {
    return res.render('notification')

})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false
    }
    console.log(`server is start on port :- ${port}`);

})