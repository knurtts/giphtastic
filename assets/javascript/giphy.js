var buttons = ["dark souls", "Cthulhu", "super sayan", "whoa", "mic drop", "yay", "high five"];

$(document).ready( function() {

    $("#addNew").focus();

    for (let i = 0; i < buttons.length; i++) {
        var newButton = $("<button>");
        newButton.attr("class", "gifButton");
        newButton.attr("type", "button");
        newButton.attr("value", buttons[i])
        newButton.text(buttons[i]);
        $("#buttons").append(newButton);
    }

    $("#add").click(function() {
        event.preventDefault();

        if ($("#addNew").val() == "") {
            alert("Please type somethig first");
        } else {
            var button = $("<button>");
            var buttonName = $("#addNew").val();
            button.attr("class", "gifButton");
            button.attr("type", "button");
            button.attr("value", buttonName);
            button.text(buttonName);
            $("#buttons").append(button);
            $("#addNew").val("");
        }

    });

});

//make onclick event to trigger search for clicked button

//add ajax logic to pull json from giphy
//api URL: "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=OBz62G0QMIkfMedRwBTJ62a7gIqb8Tsm&limit:15&rating:g"

//build logic to prepend results to $("#gif-space")

//build pause/play logic for gifs