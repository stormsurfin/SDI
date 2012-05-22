// Detecting a phone number
var phone = "980-980-0098";
function validate (phone) {
    var regex = /^([0-9]{3})[-]?([0-9]{3})[-]?([0-9]{4})$/;
	    if (regex.test(phone)) {
	    console.log("Valid phone number.")
		} else {
		console.log("Invalid phone number.")
	}
};
	
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
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ 
    '((\d{1,3}\.){3}\d{1,3}))'+ 
    '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ 
    '(\?[;&a-z\d%_.~+=-]*)?'+ 
    '(\#[-a-z\d_]*)?$','i'); 
  if(!pattern.test(str)) {
    console.log("Not a valid URL.");
    return false;
  } else {
    console.log("This is a valid web address.");
    return true;
  }
};

// Replace characters in a string

var str = "A,B,C,D,E";
var s = str.replace(/,/g,"/"); // uses .replace to change , to /
console.log(s);

// Format a number to a specific number of decimal places

var n = 566.8337;
var twoDecimal = function (){
	var n = number.toFixed(2);  // uses .tofixed to round to hundredths
	console.log("Converted " + twoDecimal + "to two decimal places.");
	};

	
//  Fuzzy match percentages

Number.prototype.isFuzzy= function(compare, percent){
    var dev= compare*(percent/100), n= +this;
    return n>= compare-dev && n<= compare+dev;
};
var n= 151;
console.log(n.isFuzzy(140,10));

// Number of hours between two dates

var startdate = 12/31/2000,
	enddate = 05/25/2012;
function dateDiff(startDate, endDate) {
    return endDate.getDate() - startDate.getDate();
    console.log(dateDiff);
};

// Convert a string to a number

var stringNum = "9 years";
console.log(parseFloat(stringNum));

// Smallest value in an array that is greater than 9

var min=9;
var r=[4, 7, 12, 24];
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

