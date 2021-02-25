// FUNCTION & SETTING
$('.profile-gallery').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: 2000,
    pauseAutoPlayOnHover: false
});

loadClientsToCarousel(getFakeData("fakedata/client.json").clients,null,-1);


let slideIndex = [1];
let slideCount = [3];
let slidePos = ["#header"];
showSlides(0,0);

function plusSlides(no,n) {
    showSlides(no,n);
}
function showSlides(no,n){
    slideIndex[no] += n;
    let i = 1;
    let slides = $(slidePos[no] + " .mySlides");

    if(slideIndex[no] > slideCount[no]) slideIndex[no] = 1;
    if(slideIndex[no] < 1) slideIndex[no] = slideCount[no];
    $('#header .paging .slash').css('top',`calc(2.5rem + ${(slideIndex-1)* 5.5}rem)`);
    $('#header .paging p').each(function(){
        $(this).removeClass('selected');
        if(i == slideIndex) $(this).toggleClass('selected');
        i++;
    });
    i = 1;
    slides.each(function(){
        $(this).css('display','none');
        if(i == slideIndex[no]) $(this).css('display','block');
        i++;
    });
    
}