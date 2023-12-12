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
    let product = await ProductModel.findByIdAndDelete(_id);
    return product;
}

module.exports.createStaff =createStaff;
module.exports.getAllStaff =getAllStaff;
module.exports.DeleteStaff =DeleteStaff;
/*


const updateProduct = async (_id,title,price,tag)=>{
    console.log("Updated Product");
    let product = await ProductModel.findById(_id);
    product.title = title;
    product.price = price;
    product.tag = tag;
    await product.save();
    return product;
};

const DeleteProducts  = async  (_id)=>{
    let product = await ProductModel.findByIdAndDelete(_id);
    return product;
}

const getAllProducts = async  ()=>{
    let products = await ProductModel.find();
    return products;
}

module.exports.createProduct =createProduct;
module.exports.getAllProducts =getAllProducts;
module.exports.DeleteProducts =DeleteProducts;
module.exports.updateProduct =updateProduct;

*/