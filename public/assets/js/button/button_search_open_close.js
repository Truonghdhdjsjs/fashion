const button_search = document.querySelector(".fa-magnifying-glass");
const body = document.body;
const form_search = `
    <div class="header_nav_form_search">
        <form action="" method="post">
            <div class="header_nav_form_search_input">
                <div class="header_nav_form_search_input_flex">
                    <input type="search" name="input_search" id="input_search" class="input_search" placeholder="Tìm kiếm sản phẩm">
                    <button type="submit" class="header_nav_button_search">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div> 
        </form>
    </div>`;

button_search.addEventListener('click', function(event) {
    // Prevent event from propagating to the document click handler
    event.stopPropagation();

    // Check if the form is already open to avoid duplications
    if (!document.querySelector(".header_nav_form_search")) {
        body.insertAdjacentHTML("afterbegin", form_search);
    }
});

// Close the search form when clicking outside of it
document.addEventListener("click", function(event) {
    const form = document.querySelector(".header_nav_form_search");

    // Only remove the form if clicking outside of it
    if (form && !form.contains(event.target) && event.target !== button_search) {
        form.remove(); // Better to use remove() than removeChild()
    }
});

// Prevent clicks inside the form from closing it
body.addEventListener('click', function(event) {
    // Prevent clicks inside the form from propagating to the document click handler
    if (event.target.closest(".header_nav_form_search")) {
        event.stopPropagation();
    }
});
