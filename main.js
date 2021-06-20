canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=120;
rover_height=70;
rover_img="https://i.postimg.cc/YqdnnNX1/car1.png";
rover_X=10;
rover_Y=10;

rover_width=120;
rover_height=70;
rover_img="https://www.pngjoy.com/pngm/60/1323781_car-png-birds-eye-view-car-png-hd.png";
rover_X=10;
rover_Y=100;



background_img="https://i.postimg.cc/bv5d35nK/racing.jpg";
function add(){
    Background_ImageTag = new Image();
    Background_ImageTag.onload=uploadBackground;
    Background_ImageTag.src = background_img;
    
    rover_ImageTag = new Image();
    rover_ImageTag.onload=uploadrover;
    rover_ImageTag.src = rover_img;  
}


function uploadBackground(){
    ctx.drawImage(Background_ImageTag,0,0, canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage( rover_ImageTag,rover_X,rover_Y, rover_width,rover_height);
}


window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        Up();
        console.log("Up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }     
      if(keyPressed == '37'){
        left();
        console.log("left");
    }
      if(keyPressed == '39'){
        right();
        console.log("right");
    }
}

function up(){
if(rover_Y>=0){
rover_Y = rover_Y- 10
console.log("When up arrow is pressed,x="+rover_X + "Y="+rover_Y);
uploadBackground();
uploadrover();    
   }

}
function down(){
    if(rover_Y<=500){
    rover_Y = rover_Y+ 10
    console.log("When down arrow is pressed,x="+rover_X + "Y="+rover_Y);
    uploadBackground();
    uploadrover();    
       }
    }

    function left(){
        if(rover_X<=0){
        rover_X = rover_X+ 10
        console.log("When left arrow is pressed,x="+rover_X + "Y="+rover_Y);
        uploadBackground();
        uploadrover();    
           }
        }

            function right(){
            if(rover_X<=700){
            rover_X = rover_X+ 10
            console.log("When right arrow is pressed,x="+rover_X + "Y="+rover_Y);
            uploadBackground();
            uploadrover();    
               }
            }