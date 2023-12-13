const StaffModel= require("./models/staff");

const createStaff = async (fn,ln,email,phone,gender,salary)=>{
    console.log("Cretae staff Member:");
    let staffmem = new StaffModel();
    staffmem.firstName = fn;
    staffmem.LastName = ln;
    staffmem.email = email;
    staffmem.phone = phone;
    staffmem.Gender = gender;
    staffmem.Salary = salary;
    await staffmem.save();
    return staffmem;
};

const getAllStaff = async  ()=>{
    let staffmem = await StaffModel.find();
    return staffmem;
}

const DeleteStaff  = async  (_id)=>{
    let staffmem = await StaffModel.findByIdAndDelete(_id);
    return staffmem;
}

const updateStaff = async (_id,fn,ln,email,phone,gender,salary)=>{
    console.log("Updated Staff",_id);
    let staffmem = await StaffModel.findById(_id);
    staffmem.firstName = fn;
    staffmem.LastName = ln;
    staffmem.email = email;
    staffmem.phone = phone;
    staffmem.Gender = gender;
    staffmem.Salary = salary;
    await staffmem.save();
    return staffmem;
};

module.exports.createStaff =createStaff;
module.exports.getAllStaff =getAllStaff;
module.exports.DeleteStaff =DeleteStaff;
module.exports.updateStaff =updateStaff;
/*


const updateStaff = async (_id,title,price,tag)=>{
    console.log("Updated Staff");
    let Staff = await StaffModel.findById(_id);
    Staff.title = title;
    Staff.price = price;
    Staff.tag = tag;
    await Staff.save();
    return Staff;
};

const DeleteStaffs  = async  (_id)=>{
    let Staff = await StaffModel.findByIdAndDelete(_id);
    return Staff;
}

const getAllStaffs = async  ()=>{
    let Staffs = await StaffModel.find();
    return Staffs;
}

module.exports.createStaff =createStaff;
module.exports.getAllStaffs =getAllStaffs;
module.exports.DeleteStaffs =DeleteStaffs;
module.exports.updateStaff =updateStaff;

*/