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
	var x=document.forms["myForm"]["email"].value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
			console.log("Not a valid e-mail address");
			return false;
  	}
};

// Detect Url

function ValidURL(str) {
  var pattern = new RegExp('^(https?:\/\/)?'+ 
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
var s = str.replace(/,/g,"/");
console.log(s);

// Format a number to a specific number of decimal places

var n = 566.8337;
var twoDecimal = function (){
	var n = number.toFixed(2);
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

//