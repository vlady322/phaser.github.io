
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;

        this.flagFirstMouseDown = false;               
    },
    preload: function() {
        game.load.image('background', 'assets/images/background.png');
        //las demas imagenes
        game.load.image('piedras', 'assets/images/piedras.png');     // 1 ********** 
        game.load.image('ovni', 'assets/images/ovni.png');   // 1 ********** 
    },
    
    create: function() {
        game.add.sprite(0, 0, 'background');
        this.shark = game.add.sprite(500,20,'piedras');          // 2 ********** 
        this.fishes = game.add.sprite(100, 350, 'ovni');     // 2 ********** 

        this.horse = game.add.sprite(0,0);
        this.horse.frame = 0;
        this.horse.anchor.setTo(0.5);
        game.input.onDown.add(this.onTap, this);
        
    },

        
    onTap:function(){                      
          this.flagFirstMouseDown = true;  
    },                                     
    update: function() {
        if(this.flagFirstMouseDown){ 
            //para que las imagenes se muevan
            this.shark.x--;           // 3 **********
            if(this.shark.x<-300){    // 3 **********
                this.shark.x = 1300;  // 3 **********
            }
            
            this.fishes.x+=0.3;        // 3 **********
            if(this.fishes.x>1300){    // 3 **********
                this.fishes.x = -300;  // 3 **********
            }                         


            var pointerX = game.input.x;          
            var pointerY = game.input.y;           
          
            var distX = pointerX - this.horse.x;    
            var distY = pointerY - this.horse.y;   

            if(distX>0){ 
                this.horse.scale.setTo(1,1);           
            }else{       
                this.horse.scale.setTo(-1,1);          
            }
            this.horse.x += distX * 0.02;              
            this.horse.y += distY * 0.02;            
        }  
    }
}
var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");
