#pragma strict
//GamePlay script for Level 2
static var MonsterMoral : int;
static var PlayerMoral : int;
var monster : MonsterControl2;
var Rup : Rupture;
var MonsterCard : int;
var piece : GameObject;
var piecespeed : float = 3.5;
static var lastresult : int;

// all possible monster and player combinations
function Play (PlayerCard :int ) {
	monster = gameObject.AddComponent(MonsterControl2);
	MonsterCard = monster.MonsterMove(lastresult);
	Rup = gameObject.AddComponent(Rupture);
	
	//CoolDown flag checkpoint and reset via reference
	if (Rup.cooldown>0) {
		Rup.cooldown--;
	}
		
	if (MonsterCard==1 && PlayerCard==1)
	{

	}
	else if (MonsterCard==1 && PlayerCard==2)
	{
		PlayerMoral=PlayerMoral + 2;
		MonsterMoral=MonsterMoral -2;
		lastresult=0;
		piece = GameObject.Find("MPos2");
		piece.rigidbody2D.transform.position.x++;
		piece = GameObject.Find("PPos2");
		piece.rigidbody2D.transform.position.x--;
	}
	else if (MonsterCard==1 && PlayerCard==3)
	{
		PlayerMoral=PlayerMoral - 2;
		MonsterMoral=MonsterMoral + 2;
		lastresult=1;
		piece = GameObject.Find("MPos2");
		piece.rigidbody2D.transform.position.x--;
		piece = GameObject.Find("PPos2");
		piece.rigidbody2D.transform.position.x++;
	}
	else if (MonsterCard==1 && PlayerCard==4)
	{
		PlayerMoral=PlayerMoral + 4;
		MonsterMoral=MonsterMoral - 4;
		lastresult=1;
		piece = GameObject.Find("MPos2");
		piece.rigidbody2D.transform.position.x++;
		piece.rigidbody2D.transform.position.x++;
		piece = GameObject.Find("PPos2");
		piece.rigidbody2D.transform.position.x--;
		piece.rigidbody2D.transform.position.x--;
	}
	else if (MonsterCard==2 && PlayerCard==1)
	{
		PlayerMoral=PlayerMoral - 2;
		MonsterMoral=MonsterMoral + 2;
		lastresult=1;
		piece = GameObject.Find("MPos2");
		piece.rigidbody2D.transform.position.x--;
		piece = GameObject.Find("PPos2");
		piece.rigidbody2D.transform.position.x++;
	}
	else if (MonsterCard==2 && PlayerCard==2)
	{

	}
	else if (MonsterCard==2 && PlayerCard==3)
	{
		PlayerMoral=PlayerMoral + 2;
		MonsterMoral=MonsterMoral - 2;
		lastresult=0;
		piece = GameObject.Find("MPos2");
		piece.rigidbody2D.transform.position.x++;
		piece = GameObject.Find("PPos2");
		piece.rigidbody2D.transform.position.x--;
	}
	else if (MonsterCard==2 && PlayerCard==4)
	{
		PlayerMoral=PlayerMoral + 2;
		MonsterMoral=MonsterMoral - 2;
		lastresult=0;
		piece = GameObject.Find("MPos2");
		piece.rigidbody2D.transform.position.x--;
		piece = GameObject.Find("PPos2");
		piece.rigidbody2D.transform.position.x++;
	}
	else if (MonsterCard==3 && PlayerCard==1)
	{
		PlayerMoral=PlayerMoral + 2;
		MonsterMoral=MonsterMoral - 2;
		lastresult=0;
		piece = GameObject.Find("MPos2");
		piece.rigidbody2D.transform.position.x++;
		piece = GameObject.Find("PPos2");
		piece.rigidbody2D.transform.position.x--;
	}
	else if (MonsterCard==3 && PlayerCard==2)
	{
		PlayerMoral=PlayerMoral - 2;
		MonsterMoral=MonsterMoral + 2;
		lastresult=1;
		piece = GameObject.Find("MPos2");
		piece.rigidbody2D.transform.position.x--;
		piece = GameObject.Find("PPos2");
		piece.rigidbody2D.transform.position.x++;
	}
	else if (MonsterCard==3 && PlayerCard==3)
	{

	}
	else if (MonsterCard==3 && PlayerCard==4)
	{
		PlayerMoral=PlayerMoral - 2;
		MonsterMoral=MonsterMoral + 2;
		lastresult=1;
		piece = GameObject.Find("MPos2");
		piece.rigidbody2D.transform.position.x--;
		piece = GameObject.Find("PPos2");
		piece.rigidbody2D.transform.position.x++;
	}
	else if (MonsterCard==4 && PlayerCard==1)
	{
		PlayerMoral=PlayerMoral - 4;
		MonsterMoral=MonsterMoral + 4;
		lastresult=1;
		piece = GameObject.Find("MPos2");
		piece.rigidbody2D.transform.position.x--;
		piece.rigidbody2D.transform.position.x--;
		piece = GameObject.Find("PPos2");
		piece.rigidbody2D.transform.position.x++;
		piece.rigidbody2D.transform.position.x++;
	}
	else if (MonsterCard==4 && PlayerCard==2)
	{
		PlayerMoral=PlayerMoral - 2;
		MonsterMoral=MonsterMoral + 2;
		lastresult=1;
		piece = GameObject.Find("MPos2");
		piece.rigidbody2D.transform.position.x--;
		piece = GameObject.Find("PPos2");
		piece.rigidbody2D.transform.position.x++;
	}
	else if (MonsterCard==4 && PlayerCard==3)
	{
		PlayerMoral=PlayerMoral + 2;
		MonsterMoral=MonsterMoral -2;
		lastresult=1;
		piece = GameObject.Find("MPos2");
		piece.rigidbody2D.transform.position.x++;
		piece = GameObject.Find("PPos2");
		piece.rigidbody2D.transform.position.x--;
	}
	else if (MonsterCard==4 && PlayerCard==4)
	{

	}
	Debug.Log(PlayerMoral);

	//Scores checkpoint
	if (PlayerMoral==16 && MonsterMoral<16)
	{
		reset();
		Application.LoadLevel("win");
	}
	else if (MonsterMoral<-16)
	{
		reset();
		Application.LoadLevel("win");
	}
	else if (MonsterMoral==16 && PlayerMoral<16)
	{
		reset();
		Application.LoadLevel("lose");
	}
	else if (PlayerMoral<-16)
	{
		reset();
		Application.LoadLevel("lose");
	}

}

// this function rsets all static variables of all scripts for level 2 on end of combat 
function reset () {

	monster.counter=0;
	MonsterMoral=0;
	PlayerMoral=0;
	lastresult=0;
	Rup.cooldown=0;
}
