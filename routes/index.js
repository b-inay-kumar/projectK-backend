// import express from "express";
// import { requestForContact } from "../controller/ContactController";
const express = require('express')
const { requestForContact,viewContact } = require('../controller/ContactController');

const router = express.Router();

router.post("/contact", requestForContact); 
router.get("/contact", viewContact);

module.exports = router