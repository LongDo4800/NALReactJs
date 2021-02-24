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
    showSlides(no,n);
}
function showSlides(no,n){
    slideIndex[no] += n;
    let i = 1;
    let slides = $(slidePos[no] + " .mySlides");

    if(slideIndex[no] > slideCount[no]) slideIndex[no] = 1;
    if(slideIndex[no] < 1) slideIndex[no] = slideCount[no];

    slides.each(function(){
        $(this).css('display','none');
        if(i == slideIndex[no]) $(this).css('display','block');
        i++;
    });
    
}