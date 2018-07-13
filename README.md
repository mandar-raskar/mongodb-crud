# mongodb-crud
This is used to make CRUD operations in Node.js with MongoDB.
# Install 
```
    npm install mongodb-crud
```

# Usage
 This is used to make the connection and generate CRUD operations(find,insert, update, delete)  in Node.js with MongoDB.

#index.js
```JavaScript
var Mongo-Crud = require("npm-mongodb-crud");
  Mongo-Crud.connect("mongodb://localhost:27017/"Database_Name",function(err,db){
      //To get the data from database
        Mongo-Crud.find(db,"Database_Name","Collection_Name");

      //Insert the data in database
        Mongo-Crud.insert(db,"Database_Name","Collection_Name","Data_you_want_to_Insert");

      //Update the data in database
        Mongo-Crud.update(db,"Database_Name","Collection_Name","Insert_Object_Id","Data_you_want_to_Update");

      //Delete the data from database
        Mongo-Crud.delete(db,"Database_Name","Collection_Name","Insert_Object_Id");
        })

```

#Run from Terminal
```
    node index.js
```
