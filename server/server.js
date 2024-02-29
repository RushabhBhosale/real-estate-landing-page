const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

require('./db/connectDb');
const Subscription = require('./models/subscriptionSchema')

app.post("/", async(req, res) => {
   let subscription = new Subscription(req.body);
   let result = await subscription.save();
   res.send(result);
})

app.listen(5000);