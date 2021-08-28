var mouseEvent="empty";
var last_x,last_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=2;
canvas.addEventListener("mouseDown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_mouse_y=e.clientY - canvas.offsetTop;
    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("last position of X and Y= ");
        console.log("X= "+last_x+"Y= "+last_y);
        ctx.lineTo(current_position_mouse_x,current_position_mouse_y);
        ctx.stroke();
    }
    } 
canvas.addEventListener("mouseup",my_mouseup);
    function my_mouseup(e){
        mouseEvent="mouseup";
    }
    
    canvas.addEventListener("mouseleave",my_mouseleave);
    function my_mouseleave(e){
        mouseEvent="mouseleave";
    }