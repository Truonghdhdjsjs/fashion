const button_open_menu_respnosive = document.querySelector(".fa-bars");
const form_menu_responsive =   ` <div class="header_nav_menu_responsive_item">
                        <div class="header_nav_menu_responsive_item_close">
                            <p><i class="fa-solid fa-x close"></i></p>
                        </div>
                        <ul>
                            <li>
                                <h2><a href="">Trang chủ</a></h2>
                            </li>
                            <li>
                                <h2><a href="">Về chúng tôi</a></h2>
                            </li>
                            <li>
                                <h2><a href="">Sản phẩm </a></h2>
                            </li>
                            <li>
                                <h2><a href="">Tin tức</a></h2>
                            </li>
                            <li>
                                <h2><a href="">Liên hệ</a></h2>
                            </li>
                            <li>
                                <h2><a href="">Đăng kí</a></h2>
                            </li>
                            <li>
                                <h2><a href="">Đăng Nhập</a></h2>
                            </li>
                        </ul>
                    </div>`;
button_open_menu_respnosive.addEventListener("click",function(){
    if(!document.querySelector(".header_nav_menu_responsive_item"))
        {
            document.body.insertAdjacentHTML("beforeend",form_menu_responsive);
            document.body.style.backgroundColor="#7f7f7f";
        }
     const animation_form = document.querySelector(".header_nav_menu_responsive_item");
     if(animation_form)
     {
        animation_form.classList.add("active");
     }
})
const button_close_menu_respnosive = document.querySelector(".close");
document.addEventListener("click",function(event){
    // console.log(event.target)
    if(event.target.matches(".close")||event.target.matches(".header_nav_menu_responsive_item_close"))
    {
        const menu = document.querySelector(".header_nav_menu_responsive_item");
        if (menu) {
            menu.remove();
            document.body.style.backgroundColor = ""; // Reset background color
        } 
    }
   else if(!event.target.contains(event.target)&&!event.target.matches(".header_nav_menu_responsive_item"))
   {
        menu.remove();
        document.body.style.backgroundColor = "";
   }

})
