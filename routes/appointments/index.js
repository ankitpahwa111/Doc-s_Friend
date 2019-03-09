var express = require('express');
var router = express.Router();

/* GET home page. */
const getApps= require('../../controllers/appointments').getAppoinments
router.get('/',(req,res)=>{
    getApps((results)=>{
        res.send(results)
    })
})
module.exports = router;