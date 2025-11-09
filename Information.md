MAKING A TASK MANAGER : > 🐦
-

REQUIREMENTS 
-
- Express 
- Path 
- MethodOverride 

Setting Every Thing 
-
- app.use ( methodOveride express.urlencoded express.json public)
- app.set ( EJS and Views path.join )

STARTING : > 🐦‍🔥
-

- Requirement of 1 Variable which is going to store the id of Existing and upcoming tasks 
- Make a array to Store the Task in the form of Object 
- { 
    id : 1 
    title : 'Learn Node JS'
  }

ROUTING : > 🐦
-

- GET app.get for /tasks/new - TO SHOW THE FORM ADD NEW TASK 
- POST app.post for /tasks - TO ADD NEW TASK 
- GET app.get for /tasks/:id/edit - TO SHOW THE EDIT FORM FOR EDITING IN THE TASK 
- PATCH app.patch for /tasks/:id - TO UPDATE THE TASK 
- DELETE app.delete for /tasks/:id - TO DELETE THE TASK 

EJS TEMPLATING : > 🐦
-

- NEW EJS FOR ADD NEW TASK 
- EDIT EJS FOR EDITING IN THE TASK 
- INDEX EJS FOR SHOWING ALL THE TASKS 

PUBLIC : > 🐦
-

- CSS FOR STYLING 

SERVER : > 🐦
-

- PORT 


Question and Doubt Regarding Project ✌️
------------------------------------

## 1. Why We Use Method-Override
- **Purpose:** HTML forms only support `GET` and `POST`.
- **Use:** `method-override` lets us use `PUT`, `PATCH`, or `DELETE` via a query string like `?_method=DELETE`.
- **When:** In CRUD apps where we edit or delete using forms.
- **Where:** Middleware in Express:  
  ```js
  app.use(methodOverride('_method'))
  ```
- **Advantage:** Enables RESTful routes using simple HTML forms.

---

## 2. How to Handle Form in Backend
1. Add middleware:  
   ```js
   app.use(express.urlencoded({ extended: true }))
   ```
2. Access form data:  
   ```js
   req.body
   ```
3. Validate and store data (e.g., database).

**When to use forms:**  
When collecting user input (login, signup, feedback, etc.) from a webpage.

**Advantage:**  
Simple and secure way to send structured data from frontend to backend.

---

## 3. Using Form for Edit or Delete
- **With plain HTML:** Yes, forms are used for edit and delete.
- **Edit:**  
  ```html
  <form action="/users/123?_method=PATCH" method="POST">
  ```
- **Delete:**  
  ```html
  <form action="/users/123?_method=DELETE" method="POST">
  ```
- **With JavaScript (fetch/Axios):** No form needed; send direct PUT/PATCH/DELETE requests.

---

## 4. Importance of `action` Attribute
- Defines **where** the form data is sent.
- Example:  
  ```html
  <form action="/users" method="POST">
  ```
  → Sends data to `/users` route.

If editing:
```html
<form action="/users/123?_method=PATCH" method="POST">
```
→ Sends request to update user with ID 123.

Without `action`, the form has no destination.

---

## 5. How `action` Connects to Backend
1. Form sends request to URL in `action`.
2. Backend route catches the request.
3. Server performs required operation (update/delete).

Example:
```js
app.delete('/recipes/:id', (req, res) => {
  // delete recipe with id
})
```

---

## 6. Why We Use ID in Edit/Delete
- **Reason:** ID uniquely identifies a record.
- **Form relation:**  
  ID is included in `action` to tell backend which record to modify.
  ```html
  <form action="/recipes/5?_method=PATCH" method="POST">
  ```
- Backend receives `req.params.id` = `5` and updates or deletes that item.

**In short:** Form sends the ID → backend uses ID to target the correct record.


### 7. How this Edit Patch Request Work 

 
- app.get('/something/:id/edit') → Renders the edit form page with existing data filled in.

- User tweaks whatever they want inside the form inputs.

- Form’s action points to something like /something/:id?_method=PATCH with method="POST".

- When the “Update” button is clicked → that request goes to backend.

- Backend (app.patch) grabs new data from req.body, updates the database, and redirects or renders the updated view.



### 8. Find / Filter / FindIndex Use Case 

1. **`find()`** → Used for **edit** because you want to **get** one specific record (like finding a user to pre-fill the edit form).

   ```js
   const item = items.find(i => i.id === req.params.id)
   ```

2. **`filter()`** → Used for **delete**, because you want to **remove** one record and keep the rest.

   ```js
   items = items.filter(i => i.id !== req.params.id)
   ```

3. **`findIndex()`** → Used when you need the **position** of the record (like to directly replace or splice it).

   ```js
   const index = items.findIndex(i => i.id === req.params.id)
   items[index] = updatedItem
   ```

So:

* **find → edit/view**
* **filter → delete**
* **findIndex → update (in arrays)**

