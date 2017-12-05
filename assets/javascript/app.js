// script file for Giftastic HW //

// Initial set of characters //
var initialChar = ["Darth Vader", "Luke Skywalker", "Obi-wan Kenobi", "Princess Leia", "Han Solo", "Chewbacca", "Emperor Palaptine"];

function renderButtons() {

    $("#characterButtons").empty();

    // Looping through the array of characters //
    for (var i = 0; i < initialChar.length; i++) {

        var a = $("<button>");
        // Adding a class
        a.addClass("movie");
        // Adding a data-attribute with a value of the movie at index i
        a.attr("data-name", movies[i]);
        // Providing the button's text with a value of the movie at index i
        a.text(movies[i]);
        // Adding the button to the HTML
        $("#characterButtons").append(a);
    }
}


// Click event that triggers AJAX call //
$("#addCharacter").on("click", function (event) {

    event.preventDefault();

    // pulls user input from character input box //
    var charToFind = $("#characterInput").val().trim();

    // Constructed queryURL //
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BbMS1ak8XlKRe7Ku7ltGvHPnCKyc9PXk&q=" +
        charToFind + "&limit=10&offset=0&rating=G&lang=en";

    //  This is our AJAX call //

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response);
    });


});