const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const employee = mongoose.model("employe");


const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../Keys");
router.post("/signinemployee", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please add all the fields" });
  }

  employee.findOne({email:email }).then((Savedemployee) => {
    if (!Savedemployee) {
      return res.status(422).json({ error: "unvalid email or password" });
    } if (/000000/.test(Savedemployee.password))
      {
           
            const token = jwt.sign({ _id: Savedemployee._id }, JWT_SECRET);
            const { _id, email } = Savedemployee;
            res.json({ token, employee: { _id, email } });
          } else {
            return res.status(422).json({ error: " password" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
  });


module.exports = router;