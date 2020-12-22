const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
  name : {
    type:String,
    required:[true,"<<<<<<<<<<<<<Name is required"]
  },
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review:String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit= new Fruit({
  rating: 7,
  review: " Pretty solid. "
});


fruit.save();

// const kivi= new Fruit({
//   name:"KIWI",
//   score:10,
//   revire:"i like it "
// });
// const orange= new Fruit({
//   name:"orange",
//   score:4,
//   revire:"i like it "
// });

// const banana= new Fruit({
//   name:"banana",
//   score:5,
//   revire:"i like it "
// });


// Fruit.insertMany([kivi,orange,banana], function(err){
//   if (err){
//     console.log("error");
//   }else{
//     console.log("Succesfully saved")
//   }
// })


Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }else{

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

  // const findDocuments = function(db, callback) {
  //   // Get the documents collection
  //   const collection = db.collection('fruits');
  //   // Find some documents
  //   collection.find({}).toArray(function(err, fruits) {
  //     assert.equal(err, null);
  //     console.log("Found the following records");
  //     console.log(docs)
  //     callback(docs);
  //   });
  // }
