const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register

router.post("/", async (req, res)=>{
  try{
      const {name, email, password, passwordVarify} = req.body;

      //validation
      if(!name || !email || !password || !passwordVarify)
          return res
              .status(400)
              .json({errorMessage: "Plese enter all required fields"}); 

      if (password < 6)
          return res
              .status(400).json({errorMessage: "please enter a password of at least 6 characters",
          });

      if (password !== passwordVarify)
      return res
          .status(400).json({errorMessage: "please enter the same password  twice",
      });

      const existingUser = await User.findOne({email});
      if (existingUser)
          return res
          .status(400).json({errorMessage: "An account with this email alrady exists.",
      });

      //hash the password
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      //save new user account to the database
      const newUser = new User({
          name, email, passwordHash
      });

      const savedUser = await newUser.save();

  } catch (err) {
      console.error(err);
      res.status(500).send(); 
  }
});

// log in

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate

    if (!email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    // sign the token

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send();
});

router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    res.json(false);
  }
});

router.get('/user', async (req, res) => {
  try {
    // Fetch the user's data from the database (assuming there's only one user)
    const user = await User.findOne();

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user's data (including the name) as a JSON response
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
