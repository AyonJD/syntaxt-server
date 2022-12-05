const ProductModel = require('../Models/ProductModel');

// GET /products
module.exports.getProducts = async (req, res) => {
    try {
        const result = await ProductModel.find();
        res.status(200).json({ success: true, message: "Successfully fetched all products", result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
}

// POST /products/add
module.exports.addProduct = async (req, res) => {
    const { image, label, details } = await req.body;

    const newProduct = new ProductModel({
        image,
        label,
        details
    });

    try {
        const roleInitilizer = await req.body.role;
        if (roleInitilizer === "admin") {
            const result = await newProduct.save();
            res.status(200).json({ status: 200, success: true, message: "Successfully added product", result });
        } else {
            res.status(401).json({ status: 401, success: false, message: "Unauthorized" });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal server error", error: err.message });
    }
}