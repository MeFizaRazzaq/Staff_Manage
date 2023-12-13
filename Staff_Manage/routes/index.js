var express = require('express');
var router = express.Router();
var StaffModel = require("../models/staff");
const {createStaff,getAllStaff,DeleteStaff,updateStaff} = require ('../dbOperations');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send("Hello from routes");
  res.render('index', { title: 'Express' });
});

/* GET add page. */
router.get('/add',async function(req, res, next) {
  //res.send("Hello from routes");
  //let staffmem = await createStaff("Fiza","Razzaq","Frazzaq3@gmail.com","0333 1234567","Female",50000);
  //console.log(staffmem);
  res.render('create', { title: 'Express' });
});
/* POST add page-to store data in db */
router.post('/add',async function(req, res, next) {
  let mem=req.body;
  let staffmem = await createStaff(mem.fname,mem.lname,mem.mail,mem.phone,mem.gender,mem.salary);
  console.log(req.body.fname);
  res.redirect('/show');
});

/* GEt adelete data of index */
router.get('/show/delete/:id',async function(req, res, next) {
  //let mem=req.body;
  //console.log("Delete Page");
  DeleteStaff(req.params.id);
  //res.send("Delete ID: "+req.params.id);
  res.redirect('/show');
});

/* GEt edit data of index */
router.get('/show/edit/:id',async function(req, res, next) {
  let staffmem = await updateStaff(req.params.id);
  //res.send("Update ID: "+req.params.id);
  console.log("UPdate body:",staffmem );
  res.render('update');
});

/* GET show page. */
router.get('/show',async function(req, res, next) {
  //res.send("Hello from routes");
  let allStaff = await getAllStaff();
  console.log("allStaff");
  res.render('show', { staffs: allStaff });
});

module.exports = router;
