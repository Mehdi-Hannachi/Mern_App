const mongoose = require("mongoose");
const schema = mongoose.Schema;

const contact = new schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number },
});

module.exports = Contact = mongoose.model("contacts", contact);
