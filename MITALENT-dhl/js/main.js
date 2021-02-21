// FUNCTION & SETTING
$('.vid-gallery').flickity({
    // options
    cellAlign: 'left',
    contain: true
});

// Chinh SLide
var slideIndex = 1;
var slideCount = 4;
function setSlide(n){
    slideIndex += n;
    let i = 1;
    let paging = $('#header .paging p');
    // Thay bg
    if(slideIndex % 2 == 0)
        $('#header .content .center').css('background','#b4d3d3');
    else
        $('#header .content .center').css('background','#e2e8e8');

    if(slideIndex > slideCount) slideIndex = 1;
    $('#header .center .item-img img').attr('src',`images/${data[slideIndex-1].img.square}`)

    // Chinh paging
    paging.each(function(){
        $(this).removeClass("selected");
        if(i == slideIndex) $(this).toggleClass("selected");
        i++;
    })
    $('#header .slide-num span').html('0'+slideIndex);
    $('#header .slide-num .slash').css('width','100px');
    setTimeout(function(){
        $('#header .slide-num .slash').css('width','50px');
    }, 800);

    // Paging right
    $('#header .right .paging .slash').css('top',95+54*(slideIndex-1)+"px")

    // Thay text
    let info = $('#header .content .info');
    info.html('');
    info.css({
        'left':'500px',
        'opacity': '0.7',
        'transition':'none'
    });
    let timer3 = setTimeout(function(){
        let newInfo = `<h2>${data[slideIndex-1].name.toUpperCase()}</h2>` +
                        `<p>${data[slideIndex-1].awards[0].toUpperCase()}</h2>`;
        info.html(newInfo);
        info.css({
            'left':'-80px',
            'opacity': '1',
            'transition': '1s ease-in-out'
        });
    }, 400);
}   

// Lay fakedata
let data = getFakeData("fakedata/client.json");
data = data.clients;


// START POINT
loadClients(data,"AAA",8);

let items = $('#talent .nav-item');
items.each(function(){
    this.addEventListener("click", function(){
        items.each(function(){
            $(this).removeClass("selected");
        });
        $(this).toggleClass("selected");
        let genre = $(this).html();
        loadClients(data,genre,8);
    })
})

setTimeout(function heroSlide(){
    $('.hero1').css('max-width','100%');
    let timer1 = setTimeout(function(){
        $('.hero2').css('max-width','100%');
    }, 300);
    let timer2 = setTimeout(function(){
        setSlide(1);
        $('.hero1').css('max-width','0');
    }, 1700);
    let timer3 = setTimeout(function(){
        $('.hero2').css('max-width','0');
    }, 2000);
    setTimeout(heroSlide, 7000);
}, 5000);

sortTopData(data);
setSlide(0);
loadHomeNews(getFakeData("fakedata/news.json").news);