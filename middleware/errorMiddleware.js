
const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      message: "Roll number already exists"
    });
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: Object.values(err.errors).map(
        (item) => item.message
      )
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid data format"
    });
  }

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.statusCode
      ? err.message
      : "Internal server error"
  });
};

module.exports = errorHandler;
