const express = require("express");
const router = express.Router();

router.get("/teste", (req, res) => {
  try {
    res.status(200).send({ message: "Olá mundo!" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

router.get("/RequererEmprestimo", (req, res) => {
  try {
    res.status(200).send({ message: "test" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});


router.get("/GetEmprestimos", (req, res) => {
  try {
    res.status(200).send({ message: "test" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

router.post("/PayEmprestimosById", (req, res) => {
  try {
    const { message } = req.body
    res.status(200).send({ message: message });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

module.exports = router;
