const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "clement") {
    //so this data can be used anywhere in the route which is using this middleware
    //so middlewares are considered to be more powerful
    req.user = { name: "clement", id: 3 };
    next();
  } else {
    res.status(401).send("unauthorised");
  }
};

module.exports = authorize;
