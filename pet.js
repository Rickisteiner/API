var express = require('express');
var app = express();

var arr = []

app.get('/create/:pet_name/:pet_type',function(req,res) {
    
    var data =
        {
        "name": req.params.pet_name,	
        "type": req.params.pet_type
        }
        
        arr.push(data);
        //console.log(arr);
      
      res.send(arr);
      
});

app.get('/read/:pet_name', function(req, res){

  str = {msg: "Cannot find name, you can't spell"}

  arr.forEach(function(animal){
    if(req.params.pet_name === animal.name){
      str = {msg: animal}
    }
  });
  res.send(str.msg)
});

app.get('/update/:pet_name/:new_pet_name', function(req, res){

  var current = req.params.pet_name;
  var newName = req.params.new_pet_name;
  
  arr.forEach(function(animal){
    if(animal.name === current){
      animal.name = newName;
    }
  });

  res.send(arr);
});


app.get('/destroy/:pet_name', function(req, res){

  var namedPet = req.params.pet_name;

  arr.forEach(function(animal){
    var petRmv = arr.indexOf(animal);
    if(namedPet === animal.name){
      arr.splice(petRmv, 1);
    }
  })
  res.send("Removed " + namedPet);
});

app.get('/all_pets',function(req,res) {
   
  res.send(arr);

});






app.listen(3000);