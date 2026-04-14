const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================== SIGNUP ==================
router.post("/signup", async (req, res) => {
    try {
        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            return res.status(400).json({ msg: "Please enter all fields" });
        }

        // check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create user
        const user = new User({
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({ msg: "User registered successfully" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server error" });
    }
});


// ================== LOGIN ==================
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            return res.status(400).json({ msg: "Please enter all fields" });
        }

        // check user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }

        // check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // create token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET || "secretkey",
            { expiresIn: "1d" }
        );

        res.json({
            token,
            user: {
                id: user._id,
                email: user.email
            }
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;