//Global Variables
var userName;


//Start

console.log("Hello, you may begin by typing your name.");

//prompt for the user's name.
userName = prompt("What is your name?", "Please input your name.");

console.log(verifyName(userName));

function isPhoneNumber() {
    text = prompt("please enter a phone number in the following format:", "xxx-xxx-xxxx") 
    
   if(/^[2-9]\d{2}-\d{3}-\d{4}$/.test(text))
	   {
	   console.log("This is the correct format.");
	   }
   else
	   {
	   console.log("This is not the correct format.")
	   }
}

function isEmailAddresses() {
	
	text = prompt("please enter an email address in the following format:", "user@domain.com") 
    
	   if(/^[^@]+@[^@]+\..{2,6}$/.test(text))
		   {
		   console.log("This is the correct format.");
		   }
	   else
		   {
		   console.log("This is not the correct format.")
		   }
}

function findEmailAddresses() {
	
	text = prompt("please enter a URL in the space below.","") 
    
	   if(/^(?:(ftp|http|https):\/\/)?(?:[\w\-]+\.)+[a-z]{2,6}([\:\/?#].*)?$/i.test(text))
		   {
		   console.log("This is a valid URL.");
		   }
	   else
		   {
		   console.log("This is not a valid URL.")
		   }
}