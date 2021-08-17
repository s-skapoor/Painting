canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
var mouse_event = "empty";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    radius = document.getElementById("input").value;
    color = document.getElementById("input2").value;
    width = document.getElementById("input3").value;
    mouse_event = "mousedown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown"){
        console.log("Current position of mouse x and y: ");
        console.log("x = " + current_position_of_mouse_x + " y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_event = "mouseleave";
}
function fdf(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}