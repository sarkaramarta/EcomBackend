import mongoose from "mongoose";


const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter Name"]
        },
        photo: {
            type: String,
            required:  [true, "Please enter photo link"],
        },
        price: {
            type: Number,
            required: [true, "Please enter price"],
        },
        stock: {
            type: Number,
            required: [true, "Please enter Stock"],
        },
        category: {
            type: String,
            required: [true, "Please enter category"],
            trim: true
        },
    },
    {
        timestamps: true,
    }
    );
 
export const Product = mongoose.model("Product", schema);
