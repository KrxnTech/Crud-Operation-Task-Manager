const express = require("express"); // IMPORTING EXPRESS
const path = require("path"); // IMPORTING PATH
const methodOverride = require("method-override"); // IMPORTING METHOD OVERRIDING

const app = express(); // INITIATING THE APP
const port = 8080; // PORT NUMBER

app.use(methodOverride("_method")); // USING METHOD OVERRIDING 
app.use(express.urlencoded({ extended: true })); // USING URL ENCODED
app.use(express.json()); // USING JSON

app.set("view engine", "ejs"); // SETTING VIEW ENGINE
app.set("views", path.join(__dirname, "views")); // SETTING VIEWS

app.use(express.static(path.join(__dirname, "public"))); // USING PUBLIC


let nextid = 3 // WE HAVE MADE A VARIABLE WHICH WILL HELP TO PROVIDE ID TO THE NEWLY CREATED TASK 

// MAKE A ARRAY OF LIST 
let tasks = [
    // INDEX 0
    {
        id: 1,
        title: "Learn Node JS"
    },
    // INDEX 1
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
    const taskid = parseInt(req.params.id) // FIND THE ID 
    const task = tasks.find(t => t.id === taskid) // ALSO FIND THE OBJECT 
    task.title = req.body.title // UPDATE HERE
    res.redirect('/')
})


// DELETE ROUTE 
app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id; // FIND THE ID 
    tasks = tasks.filter(task => task.id != id); // FILTER THE ARRAY REMOVE THE TASK 
    res.redirect('/'); // UPDATE AND SHOW 
});


// HOME PAGE ROUTE TO SHOW ALL THE TASKS 
app.get("/", (req, res) => {
    res.render('index.ejs', { tasks })
});

app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});