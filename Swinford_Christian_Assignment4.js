/*I would like to use this towards any applicable extra credit.
All of these functions are working correctly to the best of my abilities.
Each does the requested action that is in the description for the assignment.
If any of these functions do not perform the exact task you had intended then
I misunderstood the desired outcome, however the function does still work properly
as I intended for it to work.

Due to the fact that I was able to implement everything I have learned in this class
(and then some) successfully, I feel as though I have proven my understanding of the
course and what I was supposed to learn. At the moment I understand that I am in
danger of failing this class, and I would very much appreciate for this to boost my
grade in any applicable areas so that I am able to pass with at least a "D" so that my
accademic probation is not violated.

Thank You, 
Christian Swinford

Term 1409 SDI
09/25/2014

*/
start();
function start()
{
	entry = prompt("Please input a number from 1-12");
	if (entry==="1"){isPhoneNumber();}else
	if (entry==="2"){isEmailAddress();}else
	if (entry==="3"){isUrlAddress();}else
	if (entry==="4"){firstWordCap();}else
	if (entry==="5"){changeDelimiter();}else
	if (entry==="6"){decPlaces();}else
	if (entry==="7"){fuzzyMatch();}else
	if (entry==="8"){dateDifference();}else
	if (entry==="9"){stringNumToIntNum();}else
	if (entry==="10"){minNumArr();}else
	if (entry==="11"){numTotValue();}else
	if (entry==="12"){sortArray();}
	
}

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
	   start();
}
//Does a string follow an aaa@bbb.ccc pattern like an email address? 
//#2//
function isEmailAddress() {
	
	var text = prompt("please enter an email address in the following format:", "user@domain.com") 
    
	   if(/^[^@]+@[^@]+\..{2,6}$/.test(text))
		   {
		   console.log("This is the correct format.");
		   }
	   else
		   {
		   console.log("This is not the correct format.")
		   }
		   start();
}
//Is the string a URL? (Does it start with http: or https:?) 
//#3//
function isUrlAddress() {
	
	var text = prompt("please enter a URL in the space below.","") 
    
	   if(/^(?:(http|https):\/\/)?(?:[\w\-]+\.)+[a-z]{2,6}([\:\/?#].*)?$/i.test(text))
		   {
		   console.log("This is a valid URL.");
		   }
	   else
		   {
		   console.log("This is not a valid URL.")
		   }
		   start();
}

//Title-case a string (split into words, then uppercase the first letter of each word) 
//#4//
function firstWordCap(){
	var str = prompt("Please enter a string into the place below.", "this is a sample string")
	
	var newStr = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	
	console.log(newStr);
	start();
	}

//Given a string that is a list of things separated by a given string,
//as well as another string separator, return a string with the first
//separator changed to the second: "a,b,c" + "," + "/" → "a/b/c". 
//#5//
function changeDelimiter(){
	var str = prompt("Please enter a string of words and numbers with a delimiter of ','","e, x, a, m, p, l, e, 1, 2, 3")
	var newStr = str.replace(/,/g, "/");
	
	console.log(newStr);
	start();
	}
	
//Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
//#6//
function decPlaces(){
	var text = prompt("please enter a number in the space below.","") 
	var num = parseFloat(text, 10);
	var decNum = parseFloat(Math.round(num * 100) / 100).toFixed(2);
	console.log("Number '" + text + "' is now: " + decNum);
	start();
	}
	
//Fuzzy-match a number: is the number above or below a number within a certain percent?
//#7//
function fuzzyMatch(){
	    var text = prompt("Please type in a number at that is within 20% of 100.", "80");	
    var num = parseInt(text, 10);
	var percNum = 100 * 0.2;

	//console.log(percNum);
    if(num > 100 & num >100+percNum)
    {
    console.log("You are too far above 100");
    }
    else if(num < 100 & num <100-percNum)
    {
    console.log("You are too far below 100");
    }
    else
    {
    console.log("You are within range");
    }
	start();
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
  //  console.log(date0ms);
    var date1ms = Date1.getTime();
  //  console.log(date1ms);

    var differenceInMs = date1ms - date0ms;
    var days = Math.round(differenceInMs/day);
  //  console.log(days);
    var hours = days*42;
    console.log("There are " + days + " days, or " + hours + " hours between the dates listed.");
	start();
	}	
	
//Given a string version of a number such as "42", return the value as an actual Number, such as 42. 
//#9//
function stringNumToIntNum() {
	
	var text = prompt("please enter a number in the space below.","") 
	var num = parseInt(text, 10);
	console.log("Text '" + text + "' is now: " + num);
    
	start(); 
}
//Find the smallest value in an array that is greater than a given number.
//#10//
function minNumArr(){
	var min = 85;
	var arr = [89, 34, 20, 15, 25, 86];
	var minNum;
	var i;
	for(i=0; i<arr.length; i++){
    	if(i===0){
   		minNum = arr[0];
   		}
    	if(arr[i]>min&&arr[i]<minNum){
   		minNum = arr[i];
    	}
	}
	console.log(minNum);
	start();
}
//Find the total value of just the numbers in an array, even if some of the items are not numbers.
//#11//
function numTotValue(){
	
	var arr = [1, "a",59, "b",10, "c",5, "d",5, "e",2, "f",8, "g",3, "h",2, "i",5, "j"];
    var total = 0;
	var i;
	console.log("Array: " + arr);
	for (i=0; i<arr.length; i++)
	{
        if(!isNaN(parseFloat(arr[i])) && isFinite(arr[i])){  
        total+=arr[i];
        }        
	}
console.log("Total values for just the numerical values is: " + total);
start();
	}
//Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
//#12//
function sortArray(){
	var example_array = [{a:2},{a:3},{a:1}];
    example_array.sort(sortArray2);
    console.log("Sorted Array:"+sortArray3(example_array));
	start();   	
}
function sortArray2(element1, element2){
        if (element1.a > element2.a) return 1;
        else return -1;
    }
function sortArray3(array){
    var string ="";
    for (var i = 0; i < array.length; i++)
        string+= ",{a:"+array[i].a+"}";
    return ""+string+"";
}