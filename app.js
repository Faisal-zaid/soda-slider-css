let list = document.querySelectorAll('.carousel .listn.item');
let carousel=document.querySelector('.carousel');
let dots=document.querySelectorAll('.dots li');
let nextBtn=document.getElementById('next');
let prevBtn=document.getElementById('prev');

let lastPosition= list.lenth-1;
let active=0;
let zIndex=2;

nextBtn.onclick=()=>{
    let newValue=active+1>lastPosition ?0:active+1;
    setItemActive(newValue, showSlider);
}
prevBtn.onclick=()=>{
    let newValue =active -1<0? lastPosition : active - 1;
    setItemActive(newValue, showSlider);
}
const showSlider =()=>{

}

