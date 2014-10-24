$(document).ready(function() {
    $("#calendar-container").calendar({
        tipsy_gravity: 'n', // How do you want to anchor the tipsy notification? (n / s / e / w)
        click_callback: function(date) {
            console.log(date);
            
        }, // Callback to return the clicked date object
        //year: "2012", // Optional start year, defaults to current year - pass in a year - Integer or String
        scroll_to_date: false, // Scroll to the current day?
        flow: function() {
            return randomFlow();
        }
    });
    
    //$('div.day[data-date="1/20/2014"]').addClass('heavy');
    //$('div.day[data-date="1/21/2014"]').addClass('medium');
    //$('div.day[data-date="1/22/2014"]').addClass('light');
    $('div.day[data-date="1/22/2014"]').addClass('moon flaticon-moon108');
});

function randomFlow() {
    var num = Math.floor((Math.random() * 4)); // return whole number from 0 to 3 inclusive
    if(num == 0) return 'none';
    else if(num == 1) return 'light';
    else if(num == 2) return 'medium';
    else if(num == 3) return 'heavy';
}