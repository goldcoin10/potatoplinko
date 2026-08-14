const c = document.getElementById("canvas").getContext("2d");
const p = new Image();
let m = 170;
let n = 0;
const v = 355;
const k = 20;
p.src = "potato.svg";
const l = () => {
if(m > 450){
    m = 450;
}else if(m < 0){
    m = 0
} 
if(n < v){
c.clearRect(0, 0, canvas.width, canvas.height);
c.drawImage(p, m, n);
n = n + 1;
if((Math.random()) > 0.5) {
m=m-Math.random()*k;
} else {
m=(Math.random()*k)+m;
}
requestAnimationFrame(l);
} else {
c.drawImage(p, m, n);
}
};
p.onload = () => requestAnimationFrame(l);
