#pragma strict
//variables of Rupture
var valu :int ;
var ID :int ;
var speed: int =14;
var card : GameObject;
var gamer : GamePlay2;
static var cooldown=0;
function OnMouseUp () {

if (this.ID==4){
// checkpoint for Rupture cooldown flag
if (cooldown==0) 
{
rigidbody2D.velocity.y=speed;
gamer = gameObject.AddComponent(GamePlay2);
//Telling GamePay2 script Rupture in particular have been played
gamer.Play(this.ID);
	card = GameObject.Find("Parry2");
	card.rigidbody2D.velocity.y=-speed;
	card = GameObject.Find("Rally2");
	card.rigidbody2D.velocity.y=-speed;
	card = GameObject.Find("Attack2");
	card.rigidbody2D.velocity.y=-speed;
	cooldown=3;
}
}
}