const express = require("express");
const app = express();
const userRouter = require("./routes/users");
const aboutRouter = require("./routes/about");
const contactRouter = require("./routes/contact");
const servicesRouter = require("./routes/services");
const paymentRouter = require("./routes/payment");
const loginRouter = require("./routes/login");

app.get("/", (request, response) => {
  // response.send(" Home Page");
  response.sendStatus(200);
});

// app.use("/secondPage", secondPage);
app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/services", servicesRouter);
app.use("/payment", paymentRouter);
app.use("/login", loginRouter);
app.listen(3500);
