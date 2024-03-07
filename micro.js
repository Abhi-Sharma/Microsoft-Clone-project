let button = document.querySelector(".top");
console.log(button);

button.addEventListener("click",()=>
{Top = 0;
    document.documentElement.scrollTop = 0;
    
    document.body.style.scroll=0;
});