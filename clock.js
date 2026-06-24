function clock(){
const time=new Date();
document.querySelector('.hour').innerHTML=time.getHours().toString().padStart(2,'0');
document.querySelector('.min').innerHTML=time.getMinutes().toString().padStart(2,'0');
document.querySelector('.sec').innerHTML=time.getSeconds().toString().padStart(2,'0');
document.querySelector('.colon1').innerHTML=':';
document.querySelector('.colon2').innerHTML=':';
}
 const interval=setInterval(clock,1000);


