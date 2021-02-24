let slideIndex = 1;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let paging = $("#content2 .right .paging p");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    i = 1;
    let slash = $("#content2 .right .slash");
    paging.each(function(){
        $(this).removeClass("selected");
        if(i == slideIndex) {
            $(this).toggleClass("selected");
            let diff = 4.5 - (i-1) * 3.5;
            slash.css("top",`calc(50% - ${diff}rem)`)
        }
        i++;
    })
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
}