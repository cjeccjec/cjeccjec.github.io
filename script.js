var days = {
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday",
    0:"Sunday"
};

var kids = ["Ethan", "Chris", "Estela"];

function name(name, index) {
    console.log(index);
    switch(index) {
        case 0:
            $("#binchild")[0].innerHTML = name;
            break;
        case 1: 
            $("#recyclechild")[0].innerHTML = name;
            break;
        case 2: 
            $("#dishwasherchild")[0].innerHTML = name;
            break;
    }
}

$(document).ready(function() {
    var originalDate = new Date("11/18/2019");  
    var today = new Date();
    //var today = new Date("12/2/2019");  <<<- Change this and comment out the other today to test, times are in US
    $("#date")[0].innerHTML = "Today is " +  days[today.getDay()] + " and here are your chores";

    var Difference_In_Time = today.getTime() - originalDate.getTime(); 
  
    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

    var weeks = Math.round(Difference_In_Days / 7);
    
    for (var i = 0; i < 3; i++) {
        var index = (i + weeks) % 3;
        name(kids[i], index);
    }

});