//Import necessary packages and models
const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// Route to render homepage
router.get("/", async (req, res) => {
  try {
        // Find all posts with associated usernames
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });
    // Convert post data to plain JavaScript object
    const posts = postData.map((post) => post.get({ plain: true }));
    // Render homepage template with posts and login status
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
        // If there is an error, return 500 status code and error message
    res.status(500).json(err);
  }
});