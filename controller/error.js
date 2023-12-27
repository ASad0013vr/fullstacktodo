let routeError = (err, req, res, next) => {
  if (!err) {
    next();
  } else {
    res.status(404).send("Route not found");
  }
};

module.exports = routeError;
