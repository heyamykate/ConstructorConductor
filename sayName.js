//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

 var NewPerson = function(name, age) {
 	this.name = name;
 	this.age = age;
 }


//Now create three instances of Person with data you make up

 var amy = new NewPerson('Amy', 26);
 var james = new NewPerson('James', 23);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

NewPerson.prototype.sayName = function() {
	alert(this.name);
}
