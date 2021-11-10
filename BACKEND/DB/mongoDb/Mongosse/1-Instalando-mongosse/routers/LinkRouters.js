const express = require('express');
const { send } = require('process');
const router = express.Router();
const linkController = require("../controllers/LinkControllers");

router.get('/:titulo', linkController.redirect);
router.get("/", ( req , resp ) => { resp.render('index',{ error:false ,body:{}})});
router.post("/" , express.urlencoded({extended:true}),linkController.addLink);


module.exports = router;