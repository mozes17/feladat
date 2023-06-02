const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  nev: {
    type: String,
    required: true,
  },
  cserejatekosokszama: {
    type: Number,
    required: true,
    min: 1,
  },
  nemzetseg: {
    type: String,
    required: true,
  },
  kep: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("teacher", teacherSchema);
