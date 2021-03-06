'use strict'
let router= require('express').Router();
const userFun = require('./../process/user_master');

router.get('/user_test', userFun.test);
router.post('/user_save',userFun.userSave);
router.get('/userAll/:id',userFun.getAllUser);
router.post('/userGet',userFun.userLogin);

module.exports = router;
