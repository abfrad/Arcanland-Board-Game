#pragma strict
//Card script for Level 2
// Card2 Variables
var valu :int ;
var ID :int ;
var speed: int =14;
var card : GameObject;
var gamer : GamePlay2;

// On Mouse Click the clicked card will be played
function OnMouseUp() {

	// The clicked card will be moved forward or Up
	rigidbody2D.velocity.y=speed;

	gamer = gameObject.AddComponent(GamePlay2);
	
	// The clicked card's id will be passed to Game Play script's Play() function
	gamer.Play(this.ID);
	if (this.ID==1){
		card = GameObject.Find("Parry2");
		card.rigidbody2D.velocity.y=-speed;
		card = GameObject.Find("Rally2");
		card.rigidbody2D.velocity.y=-speed;
		card = GameObject.Find("Rupture2");
		card.rigidbody2D.velocity.y=-speed;
		
	}
	if (this.ID==2){
		card = GameObject.Find("Rally2");
		card.rigidbody2D.velocity.y=-speed;
		card = GameObject.Find("Attack2");
		card.rigidbody2D.velocity.y=-speed;
		card = GameObject.Find("Rupture2");
		card.rigidbody2D.velocity.y=-speed;
	}
	else if (this.ID==3){
		card = GameObject.Find("Parry2");
		card.rigidbody2D.velocity.y=-speed;
		card = GameObject.Find("Attack2");
		card.rigidbody2D.velocity.y=-speed;
		card = GameObject.Find("Rupture2");
		card.rigidbody2D.velocity.y=-speed;
	}
	

}