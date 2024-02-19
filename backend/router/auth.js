// const jwt = require("jsonwebtoken");
// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const dotenv = require("dotenv");
// const authenticate = require("../middleware/authenticate");
// const req = require("express");
// const sendEmail = require("../utils/sendEmail");
// const crypto = require("crypto");

// // Now you can use sendEmail function here

// dotenv.config();

// require("../db/conn");
// const User = require("../model/userschema");
// const Post = require("../model/postschema");

// router.get("/", (req, res) => {
//   res.send(`Hello rourt`);
// });

// router.post("/register", async (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "PLz filled properly" });
//   }

//   try {
//     const userExist = await User.findOne({ email: email });

//     if (userExist) {
//       return res.status(422).json({ error: "Email already exist" });
//     } else if (password != cpassword) {
//       return res.status(422).json({ error: "Passwords are not matching" });
//     } else {
//       const user = new User({ name, email, phone, work, password, cpassword });

//       // Generate verification token for the user
//       user.verificationToken = crypto.randomBytes(20).toString("hex");

//       // Send verification email
//       const verificationLink = `http://localhost:5001/verify/${user.verificationToken}`;

//       sendEmail(
//         user.email,
//         "Welcome to CoLabconnect",
//         `Thanks for signing up for our application! Please verify your email by clicking this link: ${verificationLink}`
//       );

//       await user.save();

//       res.status(201).json({ message: "User registered successfully" });
//     }
//   } catch (err) {
//     //console.log(err);
//   }
// });

// //mail
// router.get("/verify/:token", async (req, res) => {
//   try {
//     const user = await User.findOne({ verificationToken: req.params.token });

//     if (!user) {
//       return res.status(400).send("Invalid token or token has expired.");
//     }

//     user.isVerified = true;
//     user.verificationToken = undefined; // Clear the verification token
//     await user.save();

//     res.send("Account successfully verified.");
//   } catch (error) {
//     res.status(500).send("Internal Server Error");
//   }
// });

// //  login route

// // router.post("/signin", async (req, res) => {
// //   try {
// //     let token;
// //     const { email, password } = req.body;

// //     if (!email || !password) {
// //       return res.status(400).json({ error: "Pls filled Proper Data" });
// //     }
// //     const userlogin = await User.findOne({ email: email });
// //     console.log(userlogin);

// //     // console.log(userlogin);
// //     if (userlogin) {
// //       if (!userlogin.isVerified) {
// //         return res.status(401).json({
// //           error: "Email has not been verified. Please check your email.",
// //         });
// //       }
// //       const isMatch = await bcrypt.compare(password, userlogin.password);
// //       token = await userlogin.generateAuthToken();
// //       console.log(token);

// //       res.cookie("jwtoken", token, {
// //         expires: new Date(Date.now() + 25892000000),
// //         httpOnly: true,
// //       });
// //       if (!isMatch) {
// //         res.status(400).json({ error: "Invalid credentials pass" });
// //       } else {
// //         res.json({ message: "user Signin Successfully" });
// //       }
// //     } else {
// //       res.status(400).json({ error: "Invalid credentials" });
// //     }
// //   } catch (err) {
// //     console.log(err);
// //   }
// // });
// router.post("/signin", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res
//         .status(400)
//         .json({ error: "Please fill in all required fields" });
//     }

//     const userlogin = await User.findOne({ email: email });

//     if (!userlogin) {
//       return res.status(400).json({ error: "Invalid credentials" });
//     }

//     if (!userlogin.isVerified) {
//       return res
//         .status(401)
//         .json({ error: "Email is not verified. Please verify your email." });
//     }

//     if (userlogin) {
//       const isMatch = await bcrypt.compare(password, userlogin.password);

//       if (!isMatch) {
//         res.status(400).json({ error: "Invalid credentials" });
//       } else {
//         const token = await userlogin.generateAuthToken();
//         res.cookie("jwtoken", token, {
//           expires: new Date(Date.now() + 25892000000),
//           httpOnly: true,
//         });
//         res.json({ message: "Login successful" });
//       }
//     } else {
//       res.status(400).json({ error: "Invalid credentials" });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Internal server error");
//   }
// });

// // POST part

// router.post("/createpost", authenticate, async (req, res) => {
//   const {
//     Topic,
//     Name,
//     Profession,
//     Workplace,
//     Mode,
//     Aboutcompany,
//     Requirepost,
//     Aboutpost,
//     Skill1,
//     Skill2,
//     Skill3,
//     Skill4,
//     Numberofopenings,
//     Stipend,
//     Certification1,
//     Certification2,
//     Perk1,
//     Perk2,
//     Duration,
//     StartDate,
//     Email,
//     Linkedin,
//   } = req.body;

//   if (
//     !Topic ||
//     !Name ||
//     !Profession ||
//     !Workplace ||
//     !Mode ||
//     !Aboutcompany ||
//     !Requirepost ||
//     !Aboutpost ||
//     !Skill1 ||
//     !Skill2 ||
//     !Skill3 ||
//     !Skill4 ||
//     !Numberofopenings ||
//     !Stipend ||
//     !Certification1 ||
//     !Certification2 ||
//     !Perk1 ||
//     !Perk2 ||
//     !Duration ||
//     !StartDate ||
//     !Email ||
//     !Linkedin
//   ) {
//     return res.status(422).json({ error: "PLz filled properly" });
//   }

//   try {
//     const userExist = await Post.findOne({ email: Email });

//     if (userExist) {
//       return res.status(422).json({ error: "Email already exist" });
//     } else {
//       const post = new Post({
//         user: req.userID,
//         Topic,
//         Name,
//         Profession,
//         Workplace,
//         Mode,
//         Aboutcompany,
//         Requirepost,
//         Aboutpost,
//         Skill1,
//         Skill2,
//         Skill3,
//         Skill4,
//         Numberofopenings,
//         Stipend,
//         Certification1,
//         Certification2,
//         Perk1,
//         Perk2,
//         Duration,
//         StartDate,
//         Email,
//         Linkedin,
//       });

//       await post.save();

//       res.status(201).json({ message: "Post created successfully" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

// //delete post
// router.delete("/deletepost/:id", authenticate, async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     if (!post) {
//       return res.status(404).json({ error: "Post not found" });
//     }

//     // if (post.user?.toString() !== req.userID) {
//     //   return res.status(401).json({ error: "Not authorized" });
//     // }

//     await Post.findByIdAndDelete(req.params.id);

//     res.json({ message: "Post deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// //  login route

// router.post("/post", async (req, res) => {
//   try {
//     let token;
//     const { Email } = req.body;

//     if (!Email) {
//       return res.status(400).json({ error: "Pls filled Proper Data" });
//     }
//     const userpost = await Post.findOne({ email: Email });

//     // console.log(userlogin);
//     if (userpost) {
//       const isMatch = await bcrypt.compare(Email, userpost.Email);

//       token = await userpost.generateAuthToken();
//       //console.log(token);

//       res.cookie("jwtoken", token, {
//         expires: new Date(Date.now() + 25892000000),
//         httpOnly: true,
//       });
//       if (!isMatch) {
//         res.status(400).json({ error: "Invalid credentials pass" });
//       } else {
//         res.json({ message: "user createPost Successfully" });
//       }
//     } else {
//       res.status(400).json({ error: "Invalid credentials" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

// router.get("/myposts", authenticate, async (req, res) => {
//   try {
//     const posts = await Post.find({ user: req.userID });
//     //console.log(posts);
//     res.json(posts);
//   } catch (error) {
//     res.status(500).send("Error fetching posts");
//   }
// });

// router.get("/createpost", authenticate, (req, res) => {
//   if ("rootUser" in req) {
//     const rootUser = req.rootUser;
//     res.send(`Hellaa ${rootUser}`);
//   } else {
//     res.status(400).send("rootUser not found");
//   }
// });

// router.get("/postregister", authenticate, (req, res) => {
//   // to get data of postregister from mongodb
//   if ("rootUser" in req) {
//     const rootUser = req.rootUser;
//     res.cookie("Test", "minor");
//     res.send(`DONE POST ${rootUser}`);
//   } else {
//     res.status(400).send("rootUser not found");
//   }
// });

// // Logout page
// router.get("/logout", (req, res) => {
//   console.log(`Hello My logout page`);
//   res.clearCookie("jwtoken", { path: "/" });
//   res.status(200).send("User Logout");
// });

// module.exports = router;
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const authenticate = require("../middleware/authenticate");
const req = require("express");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

// Now you can use sendEmail function here

dotenv.config();

require("../db/conn");
const User = require("../model/userschema");
const Post = require("../model/postschema");

router.get("/", (req, res) => {
  res.send(`Hello rourt`);
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "PLz filled properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Passwords are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      // Generate verification token for the user
      user.verificationToken = crypto.randomBytes(20).toString("hex");

      // Send verification email
      const verificationLink = `http://localhost:5001/verify/${user.verificationToken}`;

      sendEmail(
        user.email,
        "Welcome to CoLabconnect",
        `Thanks for signing up for our application! Please verify your email by clicking this link: ${verificationLink}`
      );

      await user.save();

      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    //console.log(err);
  }
});

//mail
router.get("/verify/:token", async (req, res) => {
  try {
    const user = await User.findOne({ verificationToken: req.params.token });

    if (!user) {
      return res.status(400).send("Invalid token or token has expired.");
    }

    user.isVerified = true;
    user.verificationToken = undefined; // Clear the verification token
    await user.save();

    res.send("Account successfully verified.");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

//  login route

// router.post("/signin", async (req, res) => {
//   try {
//     let token;
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ error: "Pls filled Proper Data" });
//     }
//     const userlogin = await User.findOne({ email: email });
//     console.log(userlogin);

//     // console.log(userlogin);
//     if (userlogin) {
//       if (!userlogin.isVerified) {
//         return res.status(401).json({
//           error: "Email has not been verified. Please check your email.",
//         });
//       }
//       const isMatch = await bcrypt.compare(password, userlogin.password);
//       token = await userlogin.generateAuthToken();
//       console.log(token);

//       res.cookie("jwtoken", token, {
//         expires: new Date(Date.now() + 25892000000),
//         httpOnly: true,
//       });
//       if (!isMatch) {
//         res.status(400).json({ error: "Invalid credentials pass" });
//       } else {
//         res.json({ message: "user Signin Successfully" });
//       }
//     } else {
//       res.status(400).json({ error: "Invalid credentials" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please fill in all required fields" });
    }

    const userlogin = await User.findOne({ email: email });

    if (!userlogin) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    if (!userlogin.isVerified) {
      return res
        .status(401)
        .json({ error: "Email is not verified. Please verify your email." });
    }

    if (userlogin) {
      const isMatch = await bcrypt.compare(password, userlogin.password);

      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials" });
      } else {
        const token = await userlogin.generateAuthToken();
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true,
        });
        res.json({ message: "Login successful" });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

// POST part

router.post("/createpost", authenticate, async (req, res) => {
  const {
    Topic,
    Name,
    Profession,
    Workplace,
    Mode,
    Aboutcompany,
    Requirepost,
    Aboutpost,
    Skill1,
    Skill2,
    Skill3,
    Skill4,
    Numberofopenings,
    Stipend,
    Certification1,
    Certification2,
    Perk1,
    Perk2,
    Duration,
    StartDate,
    Email,
    Linkedin,
  } = req.body;

  if (
    !Topic ||
    !Name ||
    !Profession ||
    !Workplace ||
    !Mode ||
    !Aboutcompany ||
    !Requirepost ||
    !Aboutpost ||
    !Skill1 ||
    !Skill2 ||
    !Skill3 ||
    !Skill4 ||
    !Numberofopenings ||
    !Stipend ||
    !Certification1 ||
    !Certification2 ||
    !Perk1 ||
    !Perk2 ||
    !Duration ||
    !StartDate ||
    !Email ||
    !Linkedin
  ) {
    return res.status(422).json({ error: "PLz filled properly" });
  }

  try {
    const userExist = await Post.findOne({ email: Email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    } else {
      const post = new Post({
        user: req.userID,
        Topic,
        Name,
        Profession,
        Workplace,
        Mode,
        Aboutcompany,
        Requirepost,
        Aboutpost,
        Skill1,
        Skill2,
        Skill3,
        Skill4,
        Numberofopenings,
        Stipend,
        Certification1,
        Certification2,
        Perk1,
        Perk2,
        Duration,
        StartDate,
        Email,
        Linkedin,
      });

      await post.save();

      res.status(201).json({ message: "Post created successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//delete post
router.delete("/deletepost/:id", authenticate, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // if (post.user?.toString() !== req.userID) {
    //   return res.status(401).json({ error: "Not authorized" });
    // }

    await Post.findByIdAndDelete(req.params.id);

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//  login route

router.post("/post", async (req, res) => {
  try {
    let token;
    const { Email } = req.body;

    if (!Email) {
      return res.status(400).json({ error: "Pls filled Proper Data" });
    }
    const userpost = await Post.findOne({ email: Email });

    // console.log(userlogin);
    if (userpost) {
      const isMatch = await bcrypt.compare(Email, userpost.Email);

      token = await userpost.generateAuthToken();
      //console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials pass" });
      } else {
        res.json({ message: "user createPost Successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/myposts", authenticate, async (req, res) => {
  try {
    const posts = await Post.find({ user: req.userID });
    //console.log(posts);
    res.json(posts);
  } catch (error) {
    res.status(500).send("Error fetching posts");
  }
});

router.get("/createpost", authenticate, (req, res) => {
  if ("rootUser" in req) {
    const rootUser = req.rootUser;
    res.send(`Hellaa ${rootUser}`);
  } else {
    res.status(400).send("rootUser not found");
  }
});

router.get("/postregister", authenticate, (req, res) => {
  // to get data of postregister from mongodb
  if ("rootUser" in req) {
    const rootUser = req.rootUser;
    res.cookie("Test", "minor");
    res.send(`DONE POST ${rootUser}`);
  } else {
    res.status(400).send("rootUser not found");
  }
});

// Logout page
router.get("/logout", (req, res) => {
  console.log(`Hello My logout page`);
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User Logout");
});

module.exports = router;
