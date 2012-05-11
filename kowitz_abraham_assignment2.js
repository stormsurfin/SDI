// conditional

var offWork = true;

if (offWork === true) {
	console.log("I am going camping with my girlfriend this weekend!")
}; 
var packed = true
var offWork = true
var abeHungry = true
var janinaHungry = false
var rileyThirsty = true

if (packed && offWork) {
    console.log("We're packed and ready to leave.");
} else {
    console.log("We can't leave quite yet.");
}    
if (abeHungry || janinaHungry) {
	console.log("We'll stop and eat on the hiking trail.");
} else {
	console.log("Our food is packed, we can eat whenever we want.")
}	
if (!rileyThirsty) {
	console.log("Riley's tongue hangs out when he's thirsty.");
} else {
	console.log("Riley drinks from his own water bottle when he's thirsty.")
}
// string

console.log("We need to have water, food, and sunscreen packed before we go hiking.")

// arrays

var hikers = [
	"Abe",
	"Janina",
	"Riley"
];

var activities = [
	"collecting rocks.",
	"taking pictures.",
	"sniffing everywhere."
];

for (var i=0, g=hikers.length; i < g; i++) {
	console.log( hikers[i] + " is " + activities[i] );
};

// while loop

var riley = 0;
while (riley < 10) {
	console.log("Riley the dog is hiking near us, at " + riley + " feet away, what a great time!");
	riley++;
};

console.log("Riley is distracted.  Come Riley, stay with us!");

//	for loop

for (var snow = 0; snow < 3; snow++) {
	console.log("Lets keep hiking up Mt. Antero! The snow is only " + snow + " feet deep!");
};

console.log("We have to turn around, the snow is too deep.")
