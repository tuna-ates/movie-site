const arrows=document.querySelectorAll(".arrow");
const movieLists=document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    const widthRatio=Math.floor(window.innerWidth/300);
        console.log(Math.floor(window.innerWidth/300));
    let cliclkCounter=0;
    const imageItem=movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click",function(){
        cliclkCounter++;
        if(imageItem-(4+cliclkCounter)+(4-widthRatio)>=0){
             movieLists[i].style.transform= `translateX(${movieLists[i].
        computedStyleMap().get("transform")[0].x.value - 300}px)`;
        }else{
            movieLists[i].style.transform=`translateX(0)`;
            cliclkCounter=0;
        }
    })
})


// dark mode

const ball = document.querySelector(".toogle-ball");

const items=document.querySelectorAll(".container,.navbar,.movie-list-title,.sidebar,.sidebar i,.toogle,.toogle-ball,.movie-list-filter select");

ball.addEventListener("click",function(){
    console.log("click");
    items.forEach((item)=>item.classList.toggle("active"));
})
