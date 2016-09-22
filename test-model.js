'use-strict'
let model = require("./models/index")

model.login.create({username: "andrew", password: "test",role: "admin"})
model.login.create({username: "andy", password: "test", role: "user"})
model.login.create({username: "andre", password: "test", role: "super-user"})
