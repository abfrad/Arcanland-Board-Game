#pragma strict
//GamePlay Variables and References
static var MonsterMoral : int;
static var PlayerMoral : int;
var monster : MonsterControl;
var MonsterCard : int;
var piece : GameObject;
var piecespeed : int = 7;
static var lastresult : int;

function Play (PlayerCard :int ) {
	monster = gameObject.AddComponent(MonsterControl);
	//Calling MonsterControl MonasterMove() function mentioning wether it won or lost in last move
	MonsterCard = monster.MonsterMove(lastresult);
	//All possbile moves of Monster and Player Combinations
	if (MonsterCard==1 && PlayerCard==1)
	{

	}
	else if (MonsterCard==1 && PlayerCard==2)
	{
		PlayerMoral=PlayerMoral + 2;
		MonsterMoral=MonsterMoral -2;
		lastresult=0;
		piece = GameObject.Find("MPos");
		piece.rigidbody2D.transform.position.x++;
		piece = GameObject.Find("PPos");
		piece.rigidbody2D.transform.position.x--;
	}
	else if (MonsterCard==1 && PlayerCard==3)
	{
		PlayerMoral=PlayerMoral - 2;
		MonsterMoral=MonsterMoral + 2;
		lastresult=1;
		piece = GameObject.Find("MPos");
		piece.rigidbody2D.transform.position.x--;
		piece = GameObject.Find("PPos");
		piece.rigidbody2D.transform.position.x++;
	}
	else if (MonsterCard==2 && PlayerCard==1)
	{
		PlayerMoral=PlayerMoral - 2;
		MonsterMoral=MonsterMoral + 2;
		lastresult=1;
		piece = GameObject.Find("MPos");
		piece.rigidbody2D.transform.position.x--;
		piece = GameObject.Find("PPos");
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
		piece = GameObject.Find("MPos");
		piece.rigidbody2D.transform.position.x++;
		piece = GameObject.Find("PPos");
		piece.rigidbody2D.transform.position.x--;
	}
	else if (MonsterCard==3 && PlayerCard==1)
	{
		PlayerMoral=PlayerMoral + 2;
		MonsterMoral=MonsterMoral - 2;
		lastresult=0;
		piece = GameObject.Find("MPos");
		piece.rigidbody2D.transform.position.x++;
		piece = GameObject.Find("PPos");
		piece.rigidbody2D.transform.position.x--;
	}
	else if (MonsterCard==3 && PlayerCard==2)
	{
		PlayerMoral=PlayerMoral - 2;
		MonsterMoral=MonsterMoral + 2;
		lastresult=1;
		piece = GameObject.Find("MPos");
		piece.rigidbody2D.transform.position.x--;
		piece = GameObject.Find("PPos");
		piece.rigidbody2D.transform.position.x++;
	}
	else if (MonsterCard==3 && PlayerCard==3)
	{

	}
	Debug.Log(PlayerMoral);

	//Checkpoint of Scores
	if (PlayerMoral==8 && MonsterMoral<8)
	{
		reset();
		Application.LoadLevel("win");
	}
	else if (MonsterMoral<-8)
	{
		reset();
		Application.LoadLevel("win");
	}
	else if (MonsterMoral==8 && PlayerMoral<8)
	{
		reset();
		Application.LoadLevel("lose");
	}
	else if (PlayerMoral<-8)
	{
		reset();
		Application.LoadLevel("lose");
	}

}
//This funtion will be called to reset static variables by end of combat

function reset () {
	monster.counter=0;
	MonsterMoral=0;
	PlayerMoral=0;
	lastresult=0;
}
