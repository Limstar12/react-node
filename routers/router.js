var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.send("/user라고 하면 내가 나옴")
})

router.get("/company", function(req, res){
    res.send("/user/company라고 하면 내가 나옴")
})

module.exports = router;