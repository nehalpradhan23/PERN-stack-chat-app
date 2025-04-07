import jwt from "jsonwebtoken";
import prisma from "../db/prisma.js";
// get the userId from token and return the user
const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt; // get cookie
        if (!token) {
            return res
                .status(401)
                .json({ error: "Unauthorized - No token provided" });
        }
        // verify token - it will return userId
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid token" });
        }
        // if token valid - find user with userId
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: { id: true, username: true, fullName: true, profilePic: true },
        });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // if user found with token set req.user with user
        req.user = user; // added global declaration in req above
        next();
    }
    catch (error) {
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
export default protectRoute;
