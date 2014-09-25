

	
	var pRank = 1;
	var pSkill = 10;
	var pAwarenessPerc = 65;
	var pSpeed = 100;
	
	var lateCounter = 0;
	var proCounter = 0;
	

		

		console.log("What is your name?")
		
	var pName = prompt("What is your name?", "name");
		
		
				
		begin();

	
	function begin()
	{
		if(lateCounter<3){
		console.log("Player Name: " + pName +
				"\nPlayer Rank: " + pRank +
				"\nPlayer Skill: " + pSkill +
				"\nPlayer Awareness: " + pAwarenessPerc +
				"\nPlayer Speed: " + pSpeed);
				
				
		
	
	console.log("Do you wish to 'sleep' more or 'wake up'?")
	
		var continue1 = prompt("Do you wish to 'sleep' more or 'wake up'?", "sleep")
		if(continue1 == "sleep")
		{
			Sleep();
		}
		else if (continue1 == "wake up")
		{
			WakeUp();	
		}
		}
	}
	
	function WakeUp()
	{
		console.log("Wake Up")
		console.log("Get ready for work? yes or no")
		var continue2 = prompt("Get ready for work?", "yes or no")
		
		
		if(continue2 == "yes")
		{
			console.log(continue2)
		console.log("You got to work on time! You Win!")
		
		}
		else if
		(continue2 == "no")
		{
			console.log(continue2)
			proCounter+=1;
			if(proCounter==3)
			{
				console.log("You took too long, you're now running late!")
				gameOver();
			}
		if(proCounter<3){
		WakeUp();
		}
			
		}
		else
		{
			console.log(continue2)
			console.log("Please answer one or the other. 'yes' or 'no'")
			WakeUp();
			
		}
		
	}
	
	function Sleep()
	{
		console.log("Sleep")
		lateCounter += 1;
		if(lateCounter >= 3)
		{
			
			console.log("You slept in and are running late!")
			
		gameOver();
			
		}
		
		pAwarenessPerc+=5;
		
		begin();
		
		
	}
	
	function gameOver()
	{
		
		console.log("You lose!")
		
		
	}