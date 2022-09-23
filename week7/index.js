// requiring and initializing express
const express = require("express");

const app = express();

// create mongoose SCHEMA
const mongoose = require("mongoose");

// override setting for CRUD methods
const methodOverride = require("method-override");
const Student = require("./models/students");
const Teacher = require("./models/teachers");

// link our ENV variables to our app
require("dotenv").config();

//tells express to try to match requests with files in the directory called 'public'
app.use(express.static('public'));

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
  Student.find({}, (err, allStudents) => {
    console.log(err);

    res.render("Index", {
      students: allStudents,
    });
  });
});

// index teachers
app.get('/teachers', (req,res) =>{
  Teacher.find({}, (err, allTeachers) => {
    console.log(err);

    res.render("TeacherIndex",{
      teachers: allTeachers
    })
  })
})
// new
app.get("/students/new", (req, res) => {
  res.render("New", {});
});

//new teachers
app.get("/teachers/new", (req, res)=> {
  res.render("NewTeacher", {})
})
// POST

app.post("/students", (req, res) => {
  if (req.body.isPassing === "on") {
    req.body.isPassing = true;
  } else {
    req.body.isPassing = false;
  }

  Student.create(req.body, (err, createdStudent) => {
    console.log(err);
  });

  res.redirect("/students");
});

// Teacher POST

app.post("/teachers", (req, res) => {
  if (req.body.isEmployed === "on") {
    req.body.isEmployed = true;
  } else {
    req.body.isEmployed = false;
  }

  Teacher.create(req.body, (err, createdTeacher) => {
    console.log(err);
  });

  res.redirect("/teachers");

})
// edit
app.get("/students/:id/edit", (req, res) => {
  Student.findById(req.params.id, (err, foundStudent) => {
    console.log(err);
    if (!err) {
      res.render("Edit", {
        student: foundStudent,
        //pass in the foundStudent so we can prefill the form
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// Teacher Edit

app.get("/teachers/:id/edit", (req, res) => {
  Teacher.findById(req.params.id, (err, foundTeacher) => {
    console.log(err);
    if (!err) {
      res.render("TeacherEdit", {
        teacher: foundTeacher,
        //pass in the foundTeacher so we can prefill the form
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});
// put patch to update
app.put("/students/:id", (req, res) => {
  if (req.body.isPassing === "on") {
    req.body.isPassing = true;
  } else {
    req.body.isPassing = false;
  }
  Student.findByIdAndUpdate(req.params.id, req.body, (err, updatedStudent) => {
    console.log(err);
    res.redirect(`/students/${req.params.id}`);
  });
});

// DELETE
app.delete("/students/:id", (req, res) => {
  Student.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/students");
  });
});
// Teacher DELETE
app.delete("/teachers/:id", (req, res) => {
  Teacher.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/teachers");
  });
});
// SEEDS -- a route where we create content dynamically

app.get("/students/seed", (req, res) => {
  Student.create(
    [
      { name: "student1", gpa: "2.0", isPassing: false },
      { name: "student2", gpa: "4.0", isPassing: true },
    ],
    // callback function
    (err, data) => {
      res.redirect("/students");
    }
  );
});

// show
app.get("/students/:id", (req, res) => {
  Student.findById(req.params.id, (err, foundStudent) => {
    console.log(err);
    res.render("Show", {
      student: foundStudent,
    });
  });
});
// Teacher show
app.get("/teachers/:id", (req, res) => {
  Teacher.findById(req.params.id, (err, foundTeacher) => {
    console.log(err);
    res.render("Show", {
      teacher: foundTeacher,
    });
  });
});

// Run the server
app.listen("3000", () => {
  console.log("Server running on port 3000");
});
