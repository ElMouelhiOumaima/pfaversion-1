const mongoose = require("mongoose");

const voitureSchema = new mongoose.Schema({
  nom: {
    type: String,
  },
  etat: {
    type: String,
  },
  reparations: {
    type: Date,
    // required: true,
    
  },
  assurances: {
    type: Date,
    // required: true,
  },
  vignettes: {
    type: Date,
    // required: true,
  },
  visitetechnique: {
    type: Date,
    // required: true,
  },

  reportCount: {
    type: Number,
    default: 0,
  },
  entretien: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  photo: {
    type: String,
    default: "",
  },
});

mongoose.model("voiture", voitureSchema);