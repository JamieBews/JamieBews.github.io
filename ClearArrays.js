function ClearAllArrays(){
	ground.length = 0;
	platform.length = 0;
	platformX.length = 0;
	fallingSpikes.length = 0;
	fakeGround.length = 0;
	jumpwalls.length = 0;
	spikes.length = 0;
	fallAwayBlock.length = 0;
	iceBlock.length = 0;
	shooter.length = 0;
	newEnemy.length = 0;
	HealthPowerUp.length = 0;
	endDoor.X=33333;
	ExtraDoor.X=3333333;
	WASD.X=-33332;
	fire.length=0;
	StoneBoss.X=-10000;
	shield.X=-10000;
	Paddle.length = 0;
	Ball.X=-100000;
	//newEnemy = 0;
}//we never deleted the objects !!!!!!!! memory leak