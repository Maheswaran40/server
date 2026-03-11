const DataModal = require("../Model/userLogin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
const addData = async (req, res) => {
    try {
        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(req.body.userPass, saltRounds);

        const user_data = new DataModal({
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userPassword: hashedPassword
        });

        await user_data.save();

        res.status(200).json({ message: "Data added Successfully" });

    } catch (err) {
        console.log("POST Error:", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

// GET ALL USERS
const getData = async (req, res) => {
    try {
        const get_Data = await DataModal.find();
        res.status(200).json(get_Data);

    } catch (err) {
        console.log("GET Error:", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

// LOGIN

const loginUser = async (req, res) => {
    try {
        const { userEmail, userPassword } = req.body;

        const user = await DataModal.findOne({ userEmail });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(userPassword, user.userPassword);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid password" });
        }
         const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,   //  Use  in production
            { expiresIn: "1h" }
        );
        console.log("JWT",token)
        //  Send token in httpOnly cookie
        // res.cookie(name, value, options)

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,      // true in production (https)
            sameSite: "lax", //This prevents CSRF attacks (Cross Site Request Forgery).
            maxAge: 60 * 60 * 1000 // 1 hour
        });
        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.userName,
                email: user.userEmail
            }
        });

        console.log("login success fully")

    } catch (err) {
        console.log("LOGIN Error:", err.message);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = { addData, getData, loginUser };
