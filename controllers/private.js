exports.getPrivateRoute = (req, res, next) => {
  res.status(200).json({
    success: true,
    // data: "Welcome to Old School Products, feel free to shop around.",
  });
};
