loadClients(getFakeData("fakedata/client.json").clients,null,-1);

let items = $('#talent .nav-item');
items.each(function(){
    this.addEventListener("click", function(){
        items.each(function(){
            $(this).removeClass("selected");
        });
        $(this).toggleClass("selected");
        let genre = $(this).html();
        loadClients(getFakeData("fakedata/client.json").clients,genre,-1);
    })
})

let slideIndex = [1,1];
let slideCount = [3,3];
let slidePos = ["#header","#social"];
showSlides(0,0);
showSlides(1,0);

function plusSlides(no,n) {
    let hero1 = $("#header .hero1");
    let hero2 = $("#header .hero2");
    hero1.toggleClass("superHero");
    setTimeout(() => hero2.toggleClass("superHero"), 200);
    setTimeout(() => {
        showSlides(no,n);
        hero1.toggleClass("superHero");
    }, 1500);
    setTimeout(() => hero2.toggleClass("superHero"), 1700);
}
function showSlides(no,n){
    slideIndex[no] += n;
    let i = 1;
    let slides = $(slidePos[no] + " .mySlides");

    if(slideIndex[no] > slideCount[no]) slideIndex[no] = 1;
    if(slideIndex[no] < 1) slideIndex[no] = slideCount[no];
    $('.slide-num span').html("0"+slideIndex[no]);
    slides.each(function(){
        $(this).css('display','none');
        if(i == slideIndex[no]) $(this).css('display','block');
        i++;
    });
    
}