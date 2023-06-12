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
        game.load.image('piedras', 'assets/images/piedras.png');     
        game.load.image('ovni', 'assets/images/ovni.png');   
    },
    
    create: function() {
        game.add.sprite(0, 0, 'background');
        this.piedras = game.add.sprite(500,20,'piedras');         
        this.ovni = game.add.sprite(100, 350, 'ovni');     

        game.input.onDown.add(this.onTap, this);
        
    },

        
    update: function() {
        

            this.piedras.x--;           
            if(this.piedras.x<-300){    
                this.piedras.x = 1300;  
            }
            
            this.ovni.x+=0.3;        
            if(this.ovni.x>1300){    
                this.ovni.x = -300;  
            }                            
          
    }
}
var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");
