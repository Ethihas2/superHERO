var canvas = new fabric.Canvas('Canvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var super_image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);

        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    })
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
 keypressed = e.keyCode;
 console.log(keypressed);

 if(keypressed == '70'){
    
     new_image("ironman_face.png")
     console.log("ironman_face.png");
 }

 if(keypressed == '66'){

    new_image("spiderman_body.png")
    console.log("spiderMAN");
}
if(keypressed == '76'){

    new_image("hulk_legs.png")
    console.log("hulk SMASH");
}
if(keypressed == '82'){
    
    new_image("thor_right_hand.png")
    console.log("thor");
}
if(keypressed == '72'){
    
    new_image("captain_america_left_hand.png")
    console.log("cap");
}
if(keypressed == '38'){
    up();
}





}

function left(){
    if(player_x > 0){
        player_x -= 10;
        console.log("block image height" + block_image_height);
        console.log("playerobject x =  " + player_x + "playerobject y =  " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <= 900){
        player_x += 10;
        console.log("block image height" + block_image_height);
        console.log("playerobject x =  " + player_x + "playerobject y =  " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}