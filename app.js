const express = require("express");
const connect = require("./config/connectionDB");
const {
  getAllPersons,
  addPerson,
  addPersons,
  getOnePersonById,
  getOnePerson,
  updatePerson,
  deletePerson,
  removeManyPeople,

} = require("./Controllers/PersonController");
const port = 5000;
const app = express();
app.listen(port, (e) => {
  e
    ? console.log("Server is failed" + e)
    : console.log(`Server is running on port ${port}`);
});
const persoOne = {
  name: "med",
  age: 40,
  email: "med@gmail.com",
  favFood: ["pizza", "Pasta"],
};
connect();
getAllPersons();
 addPerson(persoOne);
 const persons=[{name:"yesmine",age:40,email:"yesmine@gmail.com",favFood:["pizza","Pasta"]},
 {name:"cherif",age:40,email:"cherif@gmail.com",favFood:["Tacos","lablabi"]},
 {name:"maha",age:40,email:"maha@gmail.com",favFood:["couscous","kefta"]}];
 addPersons(persons);
getOnePersonById('632c72550af50e869c15ba39');
getOnePerson(["pizza","Pasta"]);
updatePerson("med",60);
deletePerson("632c722ce9a8f320969f68ef");
removeManyPeople("med");
