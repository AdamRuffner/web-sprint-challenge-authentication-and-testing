const jwt = require("jsonwebtoken");
const { jwtSecret } = require("./secret");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ you: "shall not pass!" });
    return;
  }
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: "bad token" });
    }
    req.decodedJwt = decoded;
    next();
  });
};
