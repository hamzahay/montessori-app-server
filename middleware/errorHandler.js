function errorHandler (err, req, res, next) {
  const errName = err.name
  console.log(err.message)

  switch (errName) {
    case 404:
      res.status(404).json({
        error: 'Not Found',
        message: err.message
      })
    case 401:
      res.status(401).json({
        error: 'Unauthorized',
        message: err.message
      })
      break;
    case 'SequelizeValidationError':
      res.status(403).json({
        error: err.name,
        message: err.message
      })
      break;
    default:
      res.status(500).json({
        error: 'internal server error',
        message: err.message
      })
      break;
  }
}

module.exports = errorHandler