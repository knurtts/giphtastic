var buttons = ["dark souls", "Cthulhu", "super sayan", "whoa", "mic drop", "yay", "high five"];
var groupNumber = 0;

$(document).ready(function () {

    $("#addNew").focus();

    for (let i = 0; i < buttons.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("gifButton btn btn-secondary");
        newButton.attr("type", "button");
        newButton.attr("value", buttons[i])
        newButton.text(buttons[i]);
        $("#buttons").append(newButton);
    }
    
    $("#add").click(function () {
        event.preventDefault();

        if ($("#addNew").val() == "") {
            alert("Please type somethig first");
        } else {
            var button = $("<button>");
            var buttonName = $("#addNew").val();
            button.addClass("gifButton btn btn-secondary");
            button.attr("type", "button");
            button.attr("value", buttonName);
            button.text(buttonName);
            $("#buttons").append(button);
            $("#addNew").val("");
        }

    });
    
});

$(document).on("click", ".gifButton", function () {
    var searchTerm = $(this).val();
    var url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=OBz62G0QMIkfMedRwBTJ62a7gIqb8Tsm&limit=4&rating=pg-13";
    console.log(searchTerm);

    $.ajax({
        url: url,
        method: "GET",
    }).done(function (result) {
        console.log(result);

        cardGroup = $("<div>");
        cardGroup.addClass("card-group");
        cardGroup.attr("id", "group" + groupNumber);
        $("#gif-space").prepend(cardGroup);

        for (let i = 0; i < result.data.length; i++) {
 

            cardDiv = $("<div>");
            cardDiv.addClass("card col-md-3");

            newGif = $("<img>");
            newGif.addClass("gif card-img-top");
            newGif.attr("src", result.data[i].images.fixed_height_still.url);
            newGif.attr("data-still", result.data[i].images.fixed_height_still.url);
            newGif.attr("data-animate", result.data[i].images.fixed_height.url);
            newGif.attr("data-state", "still");

            newP = $("<p>");
            newP.addClass("card-text");
            newP.html("Rating: " + result.data[i].rating);

            cardDiv.html(newGif);
            cardDiv.append(newP);
            $("#group"+groupNumber).prepend(cardDiv);


        };
        groupNumber++;
    });

});

$(document).on("click", ".gif", function () {
    var state = $(this).attr("data-state");
    console.log(state);

    if (state == "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");  
      } else if (state == "animate") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    
});