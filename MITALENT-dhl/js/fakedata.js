function isGenre(data){
    return data.genre === fgenre;
}

function getFakeData(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null)
    return JSON.parse(request.responseText);
}

  
// Them event cho div chua clients
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
    if(n == -1) n = data.length;
    if(fgenre != null){
        data = data.filter(client => client.genre.toUpperCase() == genre);
    }
    $('.clients').empty();
    for(let i = 0; i < n; i++){
        let ctn = `<a href="profile.html"><div class="item">
                    <img src="images/${data[i].img.square}">
                    <div class="item-btn">
                        <img src="images/iconArrow.png">
                    </div>
                    <div class="item-content">
                        <h3>${data[i].name.toUpperCase()}</h3>
                        <p>${data[i].developer.toUpperCase()}</p>
                    </div>
                </div></a>`;
        $('.clients').append(ctn);
    }
    addEventItem();
}

function loadClientsToCarousel(data, genre, n){
    var fgenre = genre;
    if(n == -1) n = data.length;
    if(fgenre != null){
        data = data.filter(client => client.genre.toUpperCase() == genre);
    }
    $('.talent-carousel').empty();
    for(let i = 0; i < n; i++){
        let ctn = `<div class="carousel-cell"><a href="profile.html"><div class="item">
                    <img src="images/${data[i].img.square}">
                    <div class="item-btn">
                        <img src="images/iconArrow.png">
                    </div>
                    <div class="item-content">
                        <h3>${data[i].name.toUpperCase()}</h3>
                        <p>${data[i].developer.toUpperCase()}</p>
                    </div>
                </div></a></div>`;
        console.log(ctn);
        $('.talent-carousel').append(ctn);
    }
    addEventItem();
}

function applyToTrend(item){
    let trendContent
        = `<div class="itemImg">
                <a href="blog.html"><img src="images/news/thumbnail/${item.img.thumbnail}"></a>
            </div>
            <div class="itemContent col">
                <div class="info">
                <a href="blog.html">
                    <img src="images/iconPlay.png">
                    <h3>${item.title}</h3>
                    <p>${item.date}</p>
                </a>
                </div>
            </div>
            <div class="trendTag">TRENDING</div>`
    $('.trend').html(trendContent);
}

function loadNewBase(data,i){
    let thumbSrc = 'images/news/thumbnail/';
    $('.newItem').each(function(){
        if(data[i].trending == 'true'){
            applyToTrend(data[i]);
            i++
        };
        let newContent 
            = `<div class="newImg">
                <a href="blog.html"><img src="${thumbSrc + data[i].img.thumbnail}"></a>
            </div>
            <div class="newContent col">
                <a href="blog.html"><h3>${data[i].title}</h3></a>
                <p>${data[i].date}</p>
            </div>`;
        $(this).html(newContent);
        i++;
    })
    return i;
}

function loadNewsPage(data){
    let i = 0;
    let thumbSrc = 'images/news/thumbnail/';
    i = loadNewBase(data,i);
    $('.newItem2').each(function(){
        let newContent 
            = `<div class="newImg">
                <a href="blog.html"><img src="${thumbSrc + data[i].img.thumbnail}"></a>
            </div>
            <div class="newContent col">
                <a href="blog.html"><h3>${data[i].title}</h3></a>
                <p>${data[i].date}</p>
            </div>`;
        $(this).html(newContent);
        i++;
    });
}
function loadHomeNews(data){
    let i = 0;
    let thumbSrc = 'images/news/thumbnail/';
    i = loadNewBase(data,i);
    let newContent 
        = `<div class="newImg">
            <a href="blog.html"><img src="${thumbSrc + data[i].img.thumbnail}"></a>
        </div>
        <div class="newContent">
            <a href="blog.html"><h3>${data[i].title}</h3></a>
            <p>${data[i].date}</p>
        </div>`;
    $('.new4').html(newContent);
}

function sortTopData(data){
    return data.sort(function(a, b){
        return b.awards.length - a.awards.length;
    })
}
