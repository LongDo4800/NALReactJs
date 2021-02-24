loadClients(getFakeData("fakedata/client.json").clients,"AAA",4);

let items = $('#talent .nav-item');
items.each(function(){
    this.addEventListener("click", function(){
        items.each(function(){
            $(this).removeClass("selected");
        });
        $(this).toggleClass("selected");
        let genre = $(this).html();
        loadClients(getFakeData("fakedata/client.json").clients,genre,4);
    })
})
