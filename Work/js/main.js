document.addEventListener('DOMContentLoaded', function(event) {
    // Menu dropdown
    let menuBar = document.querySelector(".nav-icon");
    menuBar.addEventListener("click",function(){
        this.classList.toggle("change");

        let menu = document.querySelector(".navbar-nav");
        if (menu.style.maxHeight) {
            menu.style.maxHeight = null;
        } else {
            menu.style.maxHeight = menu.scrollHeight + "px";
        }
    })

    
    window.onscroll = function() {followingNav()};

    function followingNav() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        let nav = document.querySelector(".navbar");
        nav.classList.add("follow")
    } else {
        let nav = document.querySelector(".navbar");
        nav.classList.remove("follow")
    }
    }

    // Accordion
    let acc = document.querySelectorAll(".faq-item");
    
    for (let i = 1; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            let top = acc[i].querySelector(".item");

            top.classList.toggle("active");
            let panel = acc[i].querySelector(".panel");
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // Payment select
    
    let sel = document.querySelector("#selector");
    let items = sel.querySelectorAll("div");
    items.forEach(element => {
        element.addEventListener("click", function(){
            items.forEach(element => {
                element.classList.toggle("blueButton")
            });
        })
    });



})