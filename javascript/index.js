const anchorMenu = document.getElementsByClassName("anchor");

const menuList = Array.from(anchorMenu);
menuList.forEach(active => {
    active.addEventListener("click", ()=>{
        menuList.forEach(btn =>{
            btn.style.borderBottom = "2px solid black";
            btn.style.transition = "0s";
            btn.style.color = "white";
        });
        
        active.style.borderBottom = "2px solid #0071ff";
        active.style.transition = "0.3s";
        active.style.color = " #0071ff";
    }); 

});