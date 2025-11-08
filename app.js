const express = require("express");
const path = require("path");
const methodOverride = require("method-override");

const app = express();
const port = 8080;

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let nextid = 3

// MAKE A ARRAY OF LIST 
let tasks = [
    {
        id: 1,
        title: "Learn Node JS"
    },
    {
        id: 2,
        title: "Learn Express JS"
    }
]

// ROUTE TO ADD NEW TASK
app.get("/tasks/new", (req, res) => {
    res.render('new.ejs')
})

// HERE WE WILL CREATE A POST ROUTE WHEN USE CLICKS THE EDIT BUTTON IT WILL SEND REQ HERE AND THIS LOGIC WILL RUN AND ADD NEW TSK IN THE ARRAY OBJECT
app.post('/tasks', (req, res) => {
    const { title } = req.body // TAKES THE TITLE FROM THE FORM INPUT
    const newTask = { id: nextid++, title } // CREATING A NEW TASK OBJECT BY GIVING HIM A NEW ID INCREAMENT PROCESS 
    tasks.push(newTask) // PUSH TO MAIN ARRAY 
    res.redirect('/') // REDIRECT TO THE HOME PAGE 
})

// ROUTE TO EDIT TASK THIS PART WILL SHOW THE FORM IN WHICH WE CAN DO EDIT
app.get("/tasks/:id/edit", (req, res) => {
    const taskid = parseInt(req.params.id) // TAKING ID FROM URL
    const task = tasks.find(t => t.id === taskid) // FINDING THE TASK THROUGH ID 
    res.render("edit.ejs", { task })
})

// HERE IS THE MAIN UPDATE LOGIC AND WILL UPDATE THE TASK FROM THIS ROUTE
app.patch("/tasks/:id", (req, res) => {
    const taskid = parseInt(req.params.id)
    const task = tasks.find(t => t.id === taskid)
    task.title = req.body.title // UPDATE HERE
    res.redirect('/')
})


// DELETE ROUTE 
app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;
    tasks = tasks.filter(task => task.id != id);
    res.redirect('/');
});


// HOME PAGE ROUTE TO SHOW ALL THE TASKS 
app.get("/", (req, res) => {
    res.render('index.ejs', { tasks })
});

app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});