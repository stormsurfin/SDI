//SDI Project 3
//Abraham Kowitz
//May 16, 2012

// function for replacing console.log 

var say = function(message) { console.log(message); };

var foodNames = [ "Ribs", "Grilled Vegetables", "Garlic Bread"],
	minutesPerFoodItem = [ 45, 30, 15 ];
var food = function() {say("The " + foodName + " are cooked, I'll move it to the edge of the fire.")};

// Global Variables

/*
var json = {
	"hikers": [
	{
		name: "Janina",
		title: "Girlfriend",
		gear: "camelback", "fruit", "kind bars", "warm clothes", "yaktracks", "sunglasses"
	},
	{
		name: "Abe",
		title: "Boyfriend",
		gear: "camelback", "soup", "stove", "warm clothes", "yaktracks", "sunglasses"
	},
	{
		name: "Riley",
		title: "Dog",
		gear: ""
	}
	]
};
*/

// nested conditional

var offWork = true;
var temp = 73;

if (offWork === true, temp > 70) {
	say("I am going camping with my girlfriend this weekend!")
	} else { false
	};

// mutator 

weekendFun = [" camping", " hiking", " photography", " rock collecting", " skiing"];
popped = weekendFun.pop();
say("Our plan for the weekend:" + weekendFun);

// conditional

var packed = true
var offWork = true
var abeHungry = true
var janinaHungry = false
var rileyThirsty = true

if (packed && offWork) {
    say("We're packed and ready to leave.");
} else {
    say("We can't leave quite yet.");
}    
if (abeHungry || janinaHungry) {
	say("We'll stop and eat on the hiking trail.");
} else {
	say("Our food is packed, we can eat whenever we want.")
}	
if (!rileyThirsty) {
	say("Riley's tongue hangs out when he's thirsty.");
} else {
	say("Riley drinks from his own water bottle when he's thirsty.")
}
// string

say("We need to have water, food, and sunscreen packed before we go hiking.")

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
	say( hikers[i] + " is " + activities[i] );
};

// while loop

var riley = 0;
while (riley < 10) {
	say("Riley the dog is hiking near us, at " + riley + " feet away, what a great time!");
	riley++;
};

say("Riley is distracted.  Come Riley, stay with us!");

//	for loop

for (var snow = 0; snow < 3; snow++) {
	say("Lets keep hiking up Mt. Antero! The snow is only " + snow + " feet deep!");
};

say("We have to turn around, the snow is too deep.")

// nested loop

/* Back at our campsite we needed to collect firewood*/

var daylight = true;
var /*firewoood*/ findable = true;

if (daylight === true){
  if (findable === true){
    say("While there's still light out, I'm looking for firewood");
  } else {
    say("Its to dark so I can't find any more firewood!");
  }
} else {
  if (daylight === false){
    say("Gotta dress warm, we won't have a fire tonight!");
  } else {
    say("It's still light enough to find firewood.");
  }
}

var cookAnItem = function() {
	var foodName = foodNames[foodItem],
		minutesThisItem = minutesPerFoodItem[foodItem];
	say("Cooking the " + foodName + " will take about " + minutesThisItem + " minutes.");
	for (var minutes = 0; minutes < minutesThisItem; minutes += 15);
	food;
};
for (var foodItem = 0; foodItem < foodNames.length; foodItem++) {
	cookAnItem();
}

//object

var tent = {
	duffleBag: ["clothes", 
		"toiletries"
		],
	bed: ["sleeping bag", 
		"sleeping pad", 
		"down comforter", 
		"pillows"
		]
	};

//accessor	

var key = "bed";

say( tent[key] );


