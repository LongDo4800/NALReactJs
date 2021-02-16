$('.vid-gallery').flickity({
    // options
    cellAlign: 'left',
    contain: true
});

function isGenre(data){
    return data.genre === fgenre;
}

function addEventItem(){
    $('.item').each(function(){
        this.addEventListener("mouseover", function(){
            $(this).toggleClass("selected");
        })
        this.addEventListener("mouseout", function(){
            $(this).toggleClass("selected");
        })
    })
}

function loadClients(data, genre, n){
    var fgenre = genre;
    if(fgenre != null){
        data = data.filter(client => client.genre.toUpperCase() == genre);
    }
    $('.clients').empty();
    for(let i = 0; i < n; i++){
        let ctn = '<div class="item">' +
                `<img src="images/${data[i].img.square}">` +
                '<div class="item-btn">' +
                '<img src="images/iconArrow.png">' +
                '</div>' +
                '<div class="item-content">' +
                `<h3>${data[i].name.toUpperCase()}</h3>` +
                `<p>${data[i].developer.toUpperCase()}</p>` +
                '</div>' +
                '</div>';
        $('.clients').append(ctn);
    }
    addEventItem();
}

let request = new XMLHttpRequest();
request.open("GET", "../fakedata/client.json", false);
request.send(null)
let data = JSON.parse(request.responseText);
data = data.clients;

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