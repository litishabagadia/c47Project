class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",gunImage1);
    
    player2 = createSprite(200,300);
    player2.addImage("player2", gunImage2);
    player2.scale=.8
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     y = 500-allPlayers[plr].distance;
                     x=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                     if(players[index-1]===player1){
                         if(keyIsDown(13)){
                             bullet1=createSprite(players[index-1].x, players[index-1].y,20, 10)
                             bullet1.velocityX=10
                             bulletGroup1.add(bullet1)
                         }
                     }
                     if(players[index-1]===player2){
                        if(keyIsDown(8)){
                            bullet2=createSprite(players[index-1].x, players[index-1].y,20, 10)
                            bullet2.velocityX=10
                            bulletGroup2.add(bullet2)
                        }
                    }
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +allPlayers.player1.score,50,50);
                        text("Player 2 :" + allPlayers.player2.score, 50, 100);
                        if (player.index !== null) {
                            for (var i = 0; i < bubbleGroup.length; i++) {
                                if (bubbleGroup.get(i).isTouching(bulletGroup1)) {
                                    bubbleGroup.get(i).destroy();
                                    allPlayers.player1.score =allPlayers.player1.score+1;
                                    player.update()
                                    
                                }
                                
                            }
                        }
                      
                        if (player.index !== null) {
                          for (var i = 0; i < bubbleGroup.length; i++) {
                              if (bubbleGroup.get(i).isTouching(bulletGroup2)) {
                                  bubbleGroup.get(i).destroy();
                                  allPlayers.player2.score =allPlayers.player2.score+1;
                                  player.update()
                                  
                              }
                              
                          }
                      }
                 
                 }
                
              
                 

                if (keyIsDown(UP_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(DOWN_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 20 === 0) {
                     var bubbles = createSprite(random(800, 1000), 0);
                     bubbles.scale=0.5
                     bubbles.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1:bubbles.addImage("fruit1",bubbleImg1);  bubbleImg1.scale=.5;
                         break;
                         case 2:bubbles.addImage("fruit1", bubbleImg2);  bubbleImg2.scale=.5
                         break;
                         case 3:bubbles.addImage("fruit1", bubbleImg3);  bubbleImg3.scale=.5
                         break;
                         case 4:bubbles.addImage("fruit1", bubbleImg4);  bubbleImg4.scale=.5
                         break;
                         case 5:bubbles.addImage("fruit1", bubbleImg5);  bubbleImg5.scale=.5
                         break;
                     }
                     bubbleGroup.add(bubbles);
                     
                 }
                 
                 
         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}