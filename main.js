function setup(){
    c1=createCanvas(900,650)
    c1.center()
    w1=createCapture(VIDEO)
    w1.hide()
}
tint_color=""
function change_color(){
    tint_color=document.getElementById("colorname").value

}
function draw(){
    i1=image(w1,0,0,900,650)
    tint(tint_color)
}

function take_snapshot(){
    save("soham.jpg")
}
