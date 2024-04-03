import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "./error.js";

//middleware for admin only
export const adminOnly = TryCatch(async (req, res, next) => {
    const { id } = req.query;

    if(!id) {
        return next(new ErrorHandler("Please Login first!", 401));
    }
        
    const user = await User.findById(id);
    if(!user) {
        return next(new ErrorHandler("Please enter valid ID ", 401));
    }
    if(user.role !== "admin") {
        return next(new ErrorHandler("Please login with admin to access this feature", 401));
    }
    next();
});

// "api/v1/user/nbcwkjnc?key=24"