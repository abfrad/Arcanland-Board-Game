#pragma strict
//Card variables
var valu :int ;
var ID :int ;
var Key : KeyCode;
var speed: int =7;
var card : GameObject;
var gamer : GamePlay;

//On Update events key ups will be handles as assigned to the cards, its the start point for all scripts
function OnMouseUp(){

		//Plays the clicked card
		rigidbody2D.velocity.y=speed;
		
        
		gamer = gameObject.AddComponent(GamePlay);
		//Calls Game Play script and mentions the card that have been played
		gamer.Play(this.ID);
		if (this.ID==1){
			//rest of the cards will be pulled back here
			card = GameObject.Find("Parry");
			card.rigidbody2D.velocity.y=-speed;
			card = GameObject.Find("Rally");
			card.rigidbody2D.velocity.y=-speed;
			
		}
		if (this.ID==2){
			card = GameObject.Find("Rally");
			card.rigidbody2D.velocity.y=-speed;
			card = GameObject.Find("Attack");
			card.rigidbody2D.velocity.y=-speed;
			
		}
		else if (this.ID==3){
			card = GameObject.Find("Parry");
			card.rigidbody2D.velocity.y=-speed;
			card = GameObject.Find("Attack");
			card.rigidbody2D.velocity.y=-speed;
			
		}
			

}