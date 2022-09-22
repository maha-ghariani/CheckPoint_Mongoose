const Person = require("../models/Person");
//Find all the people
const getAllPersons = async () => {
  try {
    const persons = await Person.find();
    if (persons.length === 0) {
      console.log("your db is empty");
    } else {
      console.log(persons);
    }
  } catch (error) {
    console.log("get all persons is failed");
  }
};
//Create and Save a Record of a Model:
const addPerson = async (personInfo) => {
  try {
    const persons = await Person.find();
    const searchedPerson = persons.find(
      (elt) => elt.email === personInfo.email
    );
    if (searchedPerson) {
      console.log("Person already exist");
    } else {
      const newPerson = new Person({
        name: personInfo.name,
        age: personInfo.age,
        email: personInfo.email,
        favFood: personInfo.favFood,
      });
      await newPerson.save((e) => {
        e ? console.log(e) : console.log("Person added successfully");
      });
    }
  } catch (error) {
    console.log("add person is failed");
  }
};
//Create Many Records with model.create()
const addPersons = async (persons) => {
  try {
    const personsList = await Person.create(persons);
    console.log(personsList);
  } catch (error) {
    console.log("add persons failed");
  }
};
//Find just one person which has a certain food in the person's favorites
const getOnePerson = async (food) => {
  try {
    const serchedPerson = await Person.findOne({ favFood: food });
    console.log("Person is found", serchedPerson);
  } catch (error) {
    console.log("get one person failed");
  }
};
//Find just one person by his id :
const getOnePersonById = async (id) => {
  try {
    const serchedPerson = await Person.findById({ _id: id });
    console.log("Person is found", serchedPerson);
  } catch (error) {
    console.log("get one person by id failed");
  }
};
//Perform New Updates on a Document Using model.findOneAndUpdate()
const updatePerson = function (name, newAge) {
  Person.findOneAndUpdate(
    { name: name },
    { $set: { age: newAge } },
    { returnNewDocument: true },
    (err, doc) => {
      if (err) {
        console.log("Something wrong when updating person!");
      }
      console.log(doc);
    }
  );
};
//Delete One Document Using model.findByIdAndRemove
const deletePerson = function (id) {
  Person.findOneAndRemove({ id: id }, (err, doc) => {
    if (err) {
      console.log("Something wrong when deleting person!");
    }
    console.log("Person deleted successfully", doc);
  });
};

// Delete Many Documents with model.remove()
const removeManyPeople = (nameToRemove) => {
  Person.remove({ name: nameToRemove }, (err, doc) => {
    if (err) {
      console.log("Something wrong when deleting persons!");
    }
    console.log("Persons deleted successfully", doc);
  });
};

//Chain Search Query Helpers to Narrow Search Results
const queryChain = (done) =>{
    let foodToSearch = "pizza";
    Person.find({favFood:foodToSearch}).sort({name : "desc"}).limit(2).select("-age").exec((err, data) => {
       if(err)
         done(err);
      done(null, data);
    })
  };


module.exports = {
  getAllPersons,
  addPerson,
  addPersons,
  getOnePersonById,
  getOnePerson,
  updatePerson,
  deletePerson,
  removeManyPeople,
  queryChain
};
