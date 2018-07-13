


var Mongo_Crud = require("mongodb-crud");

Mongo_Crud.connect("mongodb://localhost:27017/Resource", function (err, db) {
    //   To get the data from database
    //   Mongo_Crud.find(db,"Database_Name","Collection_Name");
    Mongo_Crud.find(db, "Resource", "locations");

    //   Insert the data in database
    //   Mongo_Crud.insert(db,"Database_Name","Collection_Name","Data_you_want_to_Insert");
    Mongo_Crud.insert(db, "Resource", "locations", { "Locations": "Pune" });

    //    Update the data in database
    //    Mongo_Crud.update(db,"Database_Name","Collection_Name","Insert_Object_Id","Data_you_want_to_Update");
    Mongo_Crud.update(db, "Resource", "locations", "5b4868ab0fee982830818fde", { "Locations": "Pune" });

    //    Delete the data from database
    //   Mongo_Crud.delete(db,"Database_Name","Collection_Name","Insert_Object_Id");
    Mongo_Crud.delete(db, "Resource", "locations", "5b4868ab0fee982830818fde");

});


  
