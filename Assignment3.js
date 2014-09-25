//I would like to use this towards any applicable extra credit.
/*

Christian Swinford

*/

//Does a string follow a 123-456-7890 pattern like a phone number? //#1//
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
//Does a string follow an aaa@bbb.ccc pattern like an email address? //#2//
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
//Is the string a URL? (Does it start with http: or https:?) //#3//
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

function stringNumToIntNum() {
	
	var text = prompt("please enter a number in the space below.","") 
	var num = parseInt(text, 10);
	alert("Text '" + text + "' is now: " + num);
    
	   
}