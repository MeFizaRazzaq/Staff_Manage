var express = require('express');
var router = express.Router();
var StaffModel = require("../models/staff");

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send("Hello from routes");
  res.render('index', { title: 'Express' });
});

/* GET add page. */
router.get('/add', function(req, res, next) {
  //res.send("Hello from routes");
  res.render('create', { title: 'Express' });
});

/* Create a new staff member
const newStaffMember = new StaffModel({
  firstName: 'John',
  lastName: 'Doe',
});

// Save the new staff member to the database
newStaffMember.save()
  .then(() => {
    console.log('Staff member saved successfully');
  })
  .catch((error) => {
    console.error('Error saving staff member:', error);
  });
*/
/* GET show page. */
router.get('/show',async function(req, res, next) {
  //res.send("Hello from routes");
  let staff= await StaffModel.find();
  console.log("Staff: ",staff)
  res.render('show', { title: 'Express' });
});

module.exports = router;
