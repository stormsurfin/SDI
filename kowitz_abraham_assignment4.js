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

var number = 566.8337;
var twoDecimal = function (n){
	if (n = number.toFixed(2));
	console.log("Converting" + n + " to two decimal places.");
	};


















