#pragma strict

var Key : KeyCode;


function Start () {

}

function Update() {

if (Input.GetKeyUp(Key)){
Application.LoadLevel("Level1");
}
}