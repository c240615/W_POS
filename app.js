const express = require("express");
const handlebars = require("express-handlebars");
const port = 3000;
const app = express();
const path = require("path");
const {router} = require("./routes");
// handlebars
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
// css
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
res.render("pos");
});

//app.use("", router);

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
