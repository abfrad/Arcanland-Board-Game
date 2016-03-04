#pragma strict

//MonsterControll Variables
var card : GameObject;
static var counter : int;
var playing : int;
var speed : int = 7;
//This function defines a pattern for minster moves
function MonsterMove (lastresult: int) {
	if (counter==4)
	counter =0;
	if (counter==0) {
		card = GameObject.Find("Mattack");
		card.rigidbody2D.velocity.y=-speed;
		playing =1;
		card = GameObject.Find("Mparry");
		card.rigidbody2D.velocity.y=speed;
		card = GameObject.Find("Mrally");
		card.rigidbody2D.velocity.y=speed;
	}
	else if (counter==1){
		card = GameObject.Find("Mparry");
		card.rigidbody2D.velocity.y=-speed;
		playing =2;
		card = GameObject.Find("Mattack");
		card.rigidbody2D.velocity.y=speed;
		card = GameObject.Find("Mrally");
		card.rigidbody2D.velocity.y=speed;
	}
	else if (counter==2) {
	  if (lastresult==1){
	  	card = GameObject.Find("Mattack");
		card.rigidbody2D.velocity.y=-speed;
		playing =1;
		card = GameObject.Find("Mparry");
		card.rigidbody2D.velocity.y=speed;
		card = GameObject.Find("Mrally");
		card.rigidbody2D.velocity.y=speed;
	  }
	   else {
	   	card = GameObject.Find("Mrally");
		card.rigidbody2D.velocity.y=-speed;
		playing =3;
		card = GameObject.Find("Mparry");
		card.rigidbody2D.velocity.y=speed;
		card = GameObject.Find("Mattack");
		card.rigidbody2D.velocity.y=speed;
	  }
	}
	else if (counter==3) {
		card = GameObject.Find("Mattack");
		card.rigidbody2D.velocity.y=-speed;
		playing =1;
		card = GameObject.Find("Mparry");
		card.rigidbody2D.velocity.y=speed;
		card = GameObject.Find("Mrally");
		card.rigidbody2D.velocity.y=speed;
	}
	counter++;

	//After deciding which card to play, it will be returned to GamePlay script
	return playing;

}

