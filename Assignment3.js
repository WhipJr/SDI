//I would like to use this towards any applicable extra credit.
/*

Christian Swinford

*/

//Does a string follow a 123-456-7890 pattern like a phone number? 
//#1//
function isPhoneNumber() {
    var text = prompt("please enter a phone number in the following format:", "xxx-xxx-xxxx") 
    
   if(/^[2-9]\d{2}-\d{3}-\d{4}$/.test(text))
	   {
	   console.log("This is the correct format.");
	   }
   else
	   {
	   console.log("This is not the correct format.")
	   }
}
//Does a string follow an aaa@bbb.ccc pattern like an email address? 
//#2//
function isEmailAddresses() {
	
	var text = prompt("please enter an email address in the following format:", "user@domain.com") 
    
	   if(/^[^@]+@[^@]+\..{2,6}$/.test(text))
		   {
		   console.log("This is the correct format.");
		   }
	   else
		   {
		   console.log("This is not the correct format.")
		   }
}
//Is the string a URL? (Does it start with http: or https:?) 
//#3//
function findEmailAddresses() {
	
	var text = prompt("please enter a URL in the space below.","") 
    
	   if(/^(?:(http|https):\/\/)?(?:[\w\-]+\.)+[a-z]{2,6}([\:\/?#].*)?$/i.test(text))
		   {
		   console.log("This is a valid URL.");
		   }
	   else
		   {
		   console.log("This is not a valid URL.")
		   }
}

//Title-case a string (split into words, then uppercase the first letter of each word) 
//#4//
function firstWordCap(){
	var str = prompt("Please enter a string into the place below.", "this is a sample string")
	
	var newStr = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	
	console.log(newStr);
	}

//Given a string that is a list of things separated by a given string,
//as well as another string separator, return a string with the first
//separator changed to the second: "a,b,c" + "," + "/" → "a/b/c". 
//#5//
function changeDelimiter(){
	var str = prompt("Please enter a string of words and numbers with a delimiter of ','","e, x, a, m, p, l, e, 1, 2, 3")
	var newStr = str.replace(/,/g, "/");
	
	console.log(newStr);
	}
	
//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
//#6//
function decPlaces(){
	var text = prompt("please enter a number in the space below.","") 
	var num = parseFloat(text, 10);
	var decNum = parseFloat(Math.round(num * 100) / 100).toFixed(2);
	alert("Number '" + text + "' is now: " + decNum);
	
	}
	
//Fuzzy-match a number: is the number above or below a number within a certain percent?
//#7//
function fuzzyMatch(){
	    var text = prompt("Please type in a number at that is within 20% of 100.", "80");	
    var num = parseInt(text, 10);
	var percNum = 100 * 0.2;

	//alert(percNum);
    if(num > 100 & num >100+percNum)
    {
    alert("You are too far above 100");
    }
    else if(num < 100 & num <100-percNum)
    {
    alert("You are too far below 100");
    }
    else
    {
    alert("You are within range");
    }

	}
	
//Find the number of hours or days difference between two dates.
//#8//
function dateDifference(){
	var Date0 = new Date(2000, 1, 14);
    var Date1 = new Date(2014, 9, 25);
    var day = 1000*60*60*24; 
    //var days;
    //var hours;
    var date0ms = Date0.getTime();
    alert(date0ms);
    var date1ms = Date1.getTime();
    alert(date1ms);

    var differenceInMs = date1ms - date0ms;
    var days = Math.round(differenceInMs/day);
    alert(days);
    var hours = days*42;
    alert("There are " + days + " days, or " + hours + " hours between the dates listed.");
	
	}	
	
//Given a string version of a number such as "42", return the value as an actual Number, such as 42. 
//#9//
function stringNumToIntNum() {
	
	var text = prompt("please enter a number in the space below.","") 
	var num = parseInt(text, 10);
	alert("Text '" + text + "' is now: " + num);
    
	   
}