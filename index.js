// listing planets and their values 
var planets = [
    ['Sun', 27.9],
    ['Jupiter', 2.54],
    ['Neptune', 1.19],
    ['Saturn', 1.08],
    ['Earth', 1],
    ['Moon', 0.1655],
    ['Mars', 0.3895],
    ['Jupiter', 2.640],
    ['Saturn', 1.139],
    ['Uranus', 0.917],
    ['Neptune', 1.148],
    ['Pluto', 0.06]
];
// populate the options bar with planet names 
for (var i = 0; i < planets.length; i++) {
    $("<option>").val(planets[i][1]).html(planets[i][0]).appendTo('#gravity');

}
// getting the values from the user weight and the planet selected and calculating the total
$(document).ready(function() {
    $('#button').on('click', function() {
        var weight = $('#weight').val();
        var gravity = $('#gravity').val();
        var total = weight * gravity;
        var names = $('#planets, option:selected').html();

        // posting the results in the html page
        $('#results').html('if you were on ' + names + ' you would weigh ' + parseInt(total) + ' lbs');


    })

});
