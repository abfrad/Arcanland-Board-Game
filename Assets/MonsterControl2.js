#pragma strict

//Mosnter Control for the Level 2
var card : GameObject;
static var counter : int;
var playing : int;
var speed : int = 14;

// This function creates the move pattern for the monster
function MonsterMove (lastresult: int) {
	//Reseting the counter for monster moves since monster uses 4 step pattern in level 2
	if (counter==5)
		counter =0;
	if (counter==0) {
		card = GameObject.Find("MAttack2");
		card.rigidbody2D.velocity.y=-speed;
		//This defines what card was played
		playing =1;
		card = GameObject.Find("MParry2");
		card.rigidbody2D.velocity.y=speed;
		card = GameObject.Find("MRally2");
		card.rigidbody2D.velocity.y=speed;
		card = GameObject.Find("MRupture2");
		card.rigidbody2D.velocity.y=speed;
	}
	else if (counter==1){
		card = GameObject.Find("MParry2");
		card.rigidbody2D.velocity.y=-speed;
		playing =2;
		card = GameObject.Find("MAttack2");
		card.rigidbody2D.velocity.y=speed;
		card = GameObject.Find("MRally2");
		card.rigidbody2D.velocity.y=speed;
		card = GameObject.Find("MRupture2");
		card.rigidbody2D.velocity.y=speed;
	}
	else if (counter==2) {
		//If Monsters last round was sucessfull it will play first option else the else{} will be executed
		if (lastresult==1){
		 	card = GameObject.Find("MAttack2");
			card.rigidbody2D.velocity.y=-speed;
			playing =1;
			card = GameObject.Find("MParry2");
			card.rigidbody2D.velocity.y=speed;
			card = GameObject.Find("MRally2");
			card.rigidbody2D.velocity.y=speed;
			card = GameObject.Find("MRupture2");
			card.rigidbody2D.velocity.y=speed;
		}
		else {
			card = GameObject.Find("MRally2");
			card.rigidbody2D.velocity.y=-speed;
			playing =3;
			card = GameObject.Find("MParry2");
			card.rigidbody2D.velocity.y=speed;
			card = GameObject.Find("MAttack2");
			card.rigidbody2D.velocity.y=speed;
			card = GameObject.Find("MRupture2");
			card.rigidbody2D.velocity.y=speed;
		}
	}
	else if (counter==3) {
		card = GameObject.Find("MAttack2");
		card.rigidbody2D.velocity.y=-speed;
		playing =1;
		card = GameObject.Find("MParry2");
		card.rigidbody2D.velocity.y=speed;
		card = GameObject.Find("MRally2");
		card.rigidbody2D.velocity.y=speed;
		card = GameObject.Find("MRupture2");
		card.rigidbody2D.velocity.y=speed;
	}
	else if (counter==4) {
		card = GameObject.Find("MRupture2");
		card.rigidbody2D.velocity.y=-speed;
		playing =4;
		card = GameObject.Find("MAttack2");
		card.rigidbody2D.velocity.y=speed;
		card = GameObject.Find("MParry2");
		card.rigidbody2D.velocity.y=speed;
		card = GameObject.Find("MRally2");
		card.rigidbody2D.velocity.y=speed;
	}
	//Incrementing the counter
	counter++;
	//Returning the ID of played card
	return playing;

}

