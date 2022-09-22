// requiring and initializing express
const express = require("express");

const app = express();

// create mongoose SCHEMA
const mongoose = require("mongoose");

// override setting for CRUD methods
const methodOverride = require("method-override");
const Student = require("./models/students");

// link our ENV variables to our app
require("dotenv").config();

// Middlewear

// set view engine, creates link to JSX
app.set("view engine", "jsx");

// links JSX/ReactViews to App
app.engine("jsx", require("express-react-views").createEngine());

// helps us parse our req.body
app.use(express.urlencoded({ extended: false }));

// instantiates methodOverride for CRUD actions
app.use(methodOverride("_method"));

// establishes middlewear process
app.use((req, res, next) => {
  console.log("routes");
  next();
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
//Routes (CRUD)

// index
app.get("/students", (req, res) => {
  res.send("Index");
});
// new
// POST
// edit
// update
// DELETE
// SEEDS -- a route where we create content dynamically

app.get('/students/seed', (req,res)=>{
    Student.create([
  { name: "student1", gpa: "2.0", isPassing: false },
  { name: "student2", gpa: "4.0", isPassing: true },
],
// callback function
 (err, data)=> {
    res.redirect('/students')

});
})

// show

// Run the server
app.listen("3000", () => {
  console.log("Server running on port 3000");
});
