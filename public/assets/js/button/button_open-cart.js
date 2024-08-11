const button_open_cart = document.querySelector(".fa-cart-shopping");
const form_cart = `
    <div class="header_nav_form_buy">
        <div class="header_nav_form_buy_flex">
            <h3>Giỏ hàng của bạn</h3>
            <div class="header_nav_form_buy_empty">
                <img src="./assets/img/cart_emty/Screenshot_2024-08-06_195541-removebg-preview.png" alt="Giỏ hàng rỗng" sizes="(max-width:600px) 100vw,(max-width:1200px) 50vw,30vw" srcset="">
            </div>
            <p><a href="">Tiếp tục mua hàng</a></p>
        </div>
    </div>`;

const bodys = document.body;

// Open cart form when button is clicked
button_open_cart.addEventListener("click", function() {
    if (!document.querySelector(".header_nav_form_buy")) {
        bodys.insertAdjacentHTML("afterbegin", form_cart);
        bodys.style.backgroundColor = "#7f7f7f";
    }
});

// Close cart form when clicking outside of it
document.addEventListener("click", function(event) {
    const form_cart_empty = document.querySelector(".header_nav_form_buy");
    if (form_cart_empty && !form_cart_empty.contains(event.target) && event.target !== button_open_cart) {
        bodys.removeChild(form_cart_empty);
        bodys.removeAttribute("style");
    }
});

// Prevent clicks inside the form from closing it
// document.addEventListener("click", function(event) {
//     if (event.target.closest(".header_nav_form_buy")) {
//         event.stopPropagation();
//     }
// });
