const express=require('express');

const router=express.Router();

const {
    CreateUser,
    getallusers
} = require('../Controller/user');

router.route('/create').post(CreateUser);

router.route('/getallusers').post(getallusers);

module.exports=router;

