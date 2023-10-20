const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getUTCDate();

  console.log(method + " " + url + " " + date);

  next();
};

module.exports = logger;
