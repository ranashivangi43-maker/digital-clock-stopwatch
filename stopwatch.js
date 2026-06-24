let time=JSON.parse(localStorage.getItem("time"))||{
    h:0,
    m:0,
    s:0
};

document.getElementById("hr").innerHTML=time.h.toString().padStart(2,'0');
document.getElementById("sec").innerHTML=time.s.toString().padStart(2,'0');
document.getElementById("min").innerHTML=time.m.toString().padStart(2,'0');
let start=document.getElementById("start");
let btncontainer=document.querySelector(".btn");
let timer=null;
start.addEventListener("click",function(){
timer=setInterval(start_btn,1000);

start.remove();
let resume=document.createElement("button");
resume.id="resume";
resume.innerText="Resume";

let pause=document.createElement("button");
pause.id='pause';
pause.innerText='Pause';

let reset=document.createElement("button");
reset.id="reset";
reset.innerText="Reset";


btncontainer.append(resume,pause,reset);

resume.addEventListener("click",function(){
  timer=setInterval(start_btn,1000);  
})

pause.addEventListener("click",function(){
clearInterval(timer);
timer=null;
});

reset.addEventListener("click",function(){
clearInterval(timer); 
timer=null;
resume.remove();
pause.remove();
reset.remove();
time.h=0,time.m=0,time.s=0;
document.getElementById("hr").innerHTML='00';
document.getElementById("sec").innerHTML='00';
document.getElementById("min").innerHTML='00';
 btncontainer.prepend(start);
});
});


function start_btn(){
    if(timer){
        time.s++;
        }
        if(time.s===60)
        {
            time.m++;
            time.s=0;
        }
        if(time.m===60){
            time.h++;
            time.m=0;
            time.s=0;
        }
document.getElementById("hr").innerHTML=time.h.toString().padStart(2,'0');
document.getElementById("sec").innerHTML=time.s.toString().padStart(2,'0');
document.getElementById("min").innerHTML=time.m.toString().padStart(2,'0');
localStorage.setItem("time",JSON.stringify(time));
}