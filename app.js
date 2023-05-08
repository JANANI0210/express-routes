const express = require("express");
const app = express();
const userRouter = require("./routes/users");
const contactRouter = require("./routes/contact");
const aboutRouter = require("./routes/about");
const servicesRouter = require("./routes/services");
const paymentRouter = require("./routes/payment");
//componentName.HTTPMethodname('path',(handlers))
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (request, response) => {
  response.send("Home Page");
  //response.sendStatus(404);
  // response.render('users/new');
});
app.use("/users", userRouter);
app.use("/contact", contactRouter);
app.use("/about", aboutRouter);
app.use("/services", servicesRouter);
app.use("/payment", paymentRouter);

app.listen(3500);
