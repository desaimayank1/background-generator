const colorone= document.getElementById('colorone');
const colortwo=document.getElementById('colortwo');
const bodybg=document.getElementById('bodybg'); 
const showdata=document.getElementById('showvalue');

function setbg(){
   bodybg.style.background=`linear-gradient(to right,${colorone.value} ,${colortwo.value})`;
   showdata.textContent=`${colorone.value} to ${colortwo.value}`;
}

colorone.addEventListener('input',setbg);

colortwo.addEventListener('input',setbg);