using UnityEngine;
using System.Collections;

public class CarOne : MonoBehaviour {
	
	private Vector3 endPoint = new Vector3(615, 27, 580);
	private float duration = 100.0f;
	
	private Vector3 startPoint;
	private float startTime;
//	private GameObject parede;

	// Use this for initialization
	void Start () {
	//	parede 	= GameObject.FindGameObjectWithTag("Parede");
		startPoint = transform.position;
    	startTime = Time.time;
	}
	
	// Update is called once per frame
	void Update () {
		Debug.Log("XXXXXX");
		gameObject.transform.Translate( new Vector3(0,0,1) * Time.deltaTime * 3);
		//transform.position = Vector3.Lerp(startPoint, endPoint, (Time.time - startTime) / duration);
	
	}
	
	
	void OnControllerColliderHit(ControllerColliderHit theCollision){
		Debug.Log("Game Over");
		if(theCollision.gameObject.tag == "Parede"){ 
			Debug.Log("Game Over");
			
		}
	

  
	}
}
