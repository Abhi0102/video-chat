const { v4: uuidv4 } = require("uuid");
exports.generateUUID = (req, res) => {
  res.status(200).json({ success: true, id: uuidv4() });
};
