// creation
var names = new Array();

// populate array
names["hat"] = "Kalima";
names["dog"] = "banana";
names[0] = "Sean Smith";
names[1] = "Colton Phillips";
names[2] = "Danny B"

// alter the array
names.push(7);

console.log("names: ", names);
//names.remove("Danny B"); What! I don't know how!""
// "How about we do it like this!""
var index = names.indexOf("Danny B");
names.splice(index, 1)
console.log("Danny B stinks", names);

// output
console.log("length", names.length);
console.log("index of Colton", names.indexOf("Colton Phillips"));
