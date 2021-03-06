var ballSpeed= 1;
var ballDx=1;
var ballDy=1;

var PaddleSpeed= 10;
var randomVulnerable;
var bossInvincibility= false;
var bossHealth = 10;
function Bossfight(){
	ClearAllArrays();
	emerald.Sprite.src="images/BossArea/BossBackground.png";
	emerald.W = display.width;
	emerald.H = display.height;
	VFX_Background4.pause();
	VFX_Boss_Music.play();
	emerald.X=0;
	emerald.Y=0;
	ballSpeed=1;
	ballDx=1;
	ballDy=1;
	bossHealth = 10;
	BossBattle = true;
	PongBossBattle = true;//the level after this one needs to set this false
		test.X=500
		test.Y=372
		for (i=0; i<2; i++ ){
			Paddle[i] = new Object ("images/BossArea/PongNormal.png", 100, display.height -250,20,100);
			Paddle[i].Vulnerable = false;
		}
		for (i=0; i<40; i++ ){
			ground[i] = new Object ("images/BossArea/BossPlatform.png", 100*i, display.height -100,100,100);
		}
		Paddle[0].X = 50;
		Paddle[1].X = display.width - 50;
		Ball = new Object("images/BossArea/PongBall.png", Math.floor(Math.random() * 250+300) , display.height/2,20,20);
}
function Boss(){
	if(bossHealth ==0){
		Paddle.length=0
		Ball.X=-22222;
		endDoor.X= display.width/2-100;
		endDoor.Y=450;
		endDoor.W= 100
		endDoor.H=100;

}
	for (i=0; i<Paddle.length; i++ ){
		for(j=0; j<PaddleSpeed;j++){
			if (Ball.Y< Paddle[i].Y){
					Paddle[i].Y-=1;
			}
			if (Ball.Y> Paddle[i].Y&&Paddle[i].Y<=display.height-200){
					Paddle[i].Y+=1;
			}
		}
		if(!Paddle[0].Vulnerable&&!Paddle[1].Vulnerable){
			randomVulnerable = Math.floor(Math.random()*2)
			Paddle[randomVulnerable].Vulnerable = true;
		}
		if (Paddle[i].Vulnerable)
			Paddle[i].Sprite.src="images/BossArea/PongExposed.png";
		else 
			Paddle[i].Sprite.src="images/BossArea/PongNormal.png";
		if(test.isColl(Paddle[i])&&attacking&&Paddle[i].Vulnerable&&!bossInvincibility){
			VFX_Pong.play();
			bossHealth--;
			Paddle[i].Vulnerable = false;
			bossInvincibility = true
			setTimeout(BossIFrames,1500);
		}
	}
}
function BossIFrames(){
	bossInvincibility= false;
}
function BallFunc(){
	
	if (Ball.X<=0||Ball.X>= display.width){
		ballDx= -ballDx;
	}
	for (i=0; i<Paddle.length; i++ ){
		if (Ball.isCollTop(Paddle[i])){	
			ballDy=-ballDy;
			Ball.Y+=20
	 		if(Ball.Y>display.height-200){
				if(ballDx<0)
					Ball.X+=Ball.W+10;
				else
					Ball.X-=Ball.W-10;
				ballDx=-ballDx;
			} 
		}
	 
		if (Ball.isColl(Paddle[i])){
			ballDx= -ballDx;
			if (ballDx<0&&ballDx>-10) 
				ballDx--;
			else if (ballDx>0&&ballDx<10)
				ballDx++;
			if (ballDy<0&ballDy>-10)
				ballDy--;
			else if (ballDy>0&&ballDy<10)
				ballDy++;
			if(Ball.W<80)
				setTimeout(ballGrowth,2000)
			
		}
	}
	
	if (Ball.Y<=0){
		ballDy= -ballDy;
	}
	if (Ball.Y>= display.height-100-Ball.H){
		ballDy= -ballDy;
	}
	updateBall();
	
}
function ballGrowth(){
	Ball.W+=3;
	Ball.H+=3;
}
function updateBall(){

	Ball.X+=ballDx;
	Ball.Y +=ballDy;
}