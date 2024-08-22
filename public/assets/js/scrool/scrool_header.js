window.addEventListener("scroll",function(){
    const header = document.querySelector("#header");
    const main = document.querySelector(".wrapper");
    const height_header = header.offsetHeight;
    main.style.paddingTop=`${height_header}px`;
    const pgY = Math.floor(window.pageYOffset)
    if(pgY>150)
    {
        header.classList.add("scroll");
    }
    else
    {
        header.classList.remove("scroll");
    }
})