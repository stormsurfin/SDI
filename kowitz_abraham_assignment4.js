// Detecting a phone number

var phone = "980-980-0098";
function validate(phone) {
    var regex = /^([0-9]{3})[-]?([0-9]{3})[-]?([0-9]{4})$/;
	    if (regex.test(phone)) {
	    console.log("Valid phone number.")
		} else {
		console.log("Invalid phone number.");
	};
}

	
//  Detecting an email address

var x = "mye@mail.com";
function detectEmail(){
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){ //checks for @ || checks for . || then checks for a second .
			console.log("Not a valid e-mail address");
			return false;
  	}
};

// Detect Url

function ValidURL(str) {
  var pattern = new RegExp('^(https?:\/\/)?'+  //checks for http:// or https://
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ //checks for domain name sequence
    '((\d{1,3}\.){3}\d{1,3}))'+ // checks for ip address
    '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port number or path detection
    '(\\?[;&a-z\d%_.~+=-]*)?'+  // detects a query string
    '(\#[-a-z\d_]*)?$','i'); // recognizes # and its referring fragment
  if(!pattern.test(str)) {
    console.log("Not a valid URL.");
    return false;
  } else {
    console.log("This is a valid web address.");
    return true;
  }
};

// Title case a string

function toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

// Replace characters in a string

var str = "A,B,C,D,E";
var s = str.replace(/,/g,"/"); // uses .replace to change , to /
console.log(s);

// Format a number to a specific number of decimal places

var n = 566.8337;
var twoDecimal = function(){
	var n = number.toFixed(2);  // uses .tofixed to round to hundredths
	console.log("Converted " + twoDecimal + "to two decimal places.");
	};

	
//  Fuzzy match percentages

Number.prototype.isFuzzy = function(compare, percent){ // isFuzzy function compares a number and by what percentage
    var dev = compare*(percent/100), n = +this; // math equation to make the number a percentage
    return n >= compare-dev && n <= compare+dev;
};
var n = 151; // number to compare to
console.log(n.isFuzzy(140,10)); // number compared, percentage

// Number of days between two dates

var startDate = 12/31/2000,
	endDate = 05/25/2012;
function dateDiff(startDate, endDate) {
    return endDate.getDate() - startDate.getDate();
    console.log(dateDiff);
};

// Convert a string to a number

var stringNum = "9 years";
console.log(parseFloat(stringNum));

// Smallest value in an array that is greater than 9

var min = 9;
var r = [4, 7, 12, 24];
function gt(a){return a>this; }

console.log(
  Math.min.apply(0,
     r.filter(gt, min)
  )
);

// Sum of numbers in a string

function sum(){
var val = document.getElementById('userInput').value;
var temp = val.split(" ");

var total = 0;
var v;
for(var i = 0; i < temp.length; i++) {
	v = parseFloat(temp[i]);
	if (!isNaN(v)) total += v;
}

document.getElementById('resultSum').innerHTML=total;

}

// Sort an array of objects by a key's value

var array=[655, 77, 190, 1, 2004]
console.log(array.sort(function(x,y){return x - y})); 

/* the array is sorted based on the relationship 
between each pair of elements and the return value.*/

