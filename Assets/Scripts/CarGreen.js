#pragma strict


var startPosition;
var colisor : Transform;

var isTurning;
var translateZ : float;
var translate : float;
var translate2 : float;
var z: float;
var x: float;
var direction : int;


var endPoint : Vector3;
var duration : float;
  

function Start () {

	endPoint = new Vector3(615, 27, 580);
	duration = 100.0f;
	
	isTurning = false;
	translateZ = 0.7;
	translate = 1;
	translate2 = 0;
	
}


function Update () {
	
	Debug.Log("function Update");
	
	gameObject.transform.Translate( new Vector3(0,0,1) * Time.deltaTime * 3);

	//if (!isTurning) {
	//	if(direction == 1) {
		//	gameObject.transform.rotation = Quaternion(0, 0.7, 0, translateZ );
		//	gameObject.transform.position.z = z;			
		//	gameObject.transform.Translate( Vector3(0,0,1) * Time.deltaTime * 3);
	//	}else{		
		//	gameObject.transform.position.x = x;			
		//	gameObject.transform.rotation = Quaternion(0, translate2, 0, translate );			
		//	Debug.Log("quartenion="+ gameObject.transform.rotation);			
		//	gameObject.transform.Translate( Vector3(0,0,1) * Time.deltaTime * 3);		
		//}
		
	//}
}


function OnCollisionEnter(theCollision : Collision){
	
	Debug.Log("OnCollisionEnter");
	
	//if(theCollision.gameObject.tag == "Player"){ 
	//	Debug.Log("Game Over");
	//	Application.Quit();
	//}
	

    if(theCollision.gameObject.tag == "Parede"){  
    
      Debug.Log("if Collision Parede");  
    	//isTurning = true;    	
    	//if(direction == 1) {	    
	    //	translateZ = translateZ * -1;    
	    //  	gameObject.transform.rotation = Quaternion(0, 0.7, 0, translateZ );  	      
	    //   	gameObject.transform.Translate( Vector3(0,0,1) * Time.deltaTime * 3 );	      
    	//}else{    
	   // 	translate = translate == 1   ? 0 : 1;
	    //	translate2 = translate2 == 0 ? 1 : 0;	    
	    //  	gameObject.transform.rotation = Quaternion(0, translate2, 0, translate ); 	 
	    //    gameObject.transform.Translate( Vector3(1,0,0) * Time.deltaTime * 3);     
    	//}
    	//isTurning = false;
    }
}