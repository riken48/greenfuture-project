const express = require("express");
const router = express.Router();
const schemas = require('../models/schemas')

router.post('/registerloginform', async(req, res) => {
    const {firstName, lastName, email, password} = req.body

    const userData = {first_name: firstName, last_name: lastName, email: email, password: password}
    const newUsers = new schemas.Users(userData)
    const saveUsers = await newUsers.save()
    if (saveUsers) {
        res.send('Account registered.')
    } else {
        res.send('Failed to register.')
    }
    res.end()
})

router.get("/users", (req, res) => {});

module.exports = router;
