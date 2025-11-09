MAKING A TASK MANAGER : > 🐦

REQUIREMENTS 
- Express 
- Path 
- MethodOverride 

Setting Every Thing 
- app.use ( methodOveride express.urlencoded express.json public)
- app.set ( EJS and Views path.join )

STARTING : > 🐦‍🔥

- Requirement of 1 Variable which is going to store the id of Existing and upcoming tasks 
- Make a array to Store the Task in the form of Object 
- { 
    id : 1 
    title : 'Learn Node JS'
  }

ROUTING : > 🐦

- GET app.get for /tasks/new - TO SHOW THE FORM ADD NEW TASK 
- POST app.post for /tasks - TO ADD NEW TASK 
- GET app.get for /tasks/:id/edit - TO SHOW THE EDIT FORM FOR EDITING IN THE TASK 
- PATCH app.patch for /tasks/:id - TO UPDATE THE TASK 
- DELETE app.delete for /tasks/:id - TO DELETE THE TASK 

EJS TEMPLATING : > 🐦

- NEW EJS FOR ADD NEW TASK 
- EDIT EJS FOR EDITING IN THE TASK 
- INDEX EJS FOR SHOWING ALL THE TASKS 

PUBLIC : > 🐦

- CSS FOR STYLING 

SERVER : > 🐦

- PORT 
