var main = d3.select('#main');


d3.selectAll('.assignment-tab')
    .on('click', function(){
        // On click, activate the selected tab (this), and de-select the previously active
        var clickedTab = d3.select(this);

        console.log('clicked');

        d3.select('.assignment-tab.active').classed('active',false);
        clickedTab.classed('active',true);

        // Get which component was selected, call updateTabs
        var assignment = clickedTab.attr('component');
        updateTabs(assignment);
    });


// Show default tab on page load
d3.select(window).on('load', function(){
    updateTabs('c1');
});


var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");

function updateTabs(assignment) {
    c1.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "none";
    c4.style.display = "none";
    c5.style.display = "none";
    if (assignment == 'c1') {
        c1.style.display = "inline-block";
    }
    if (assignment == 'c2') {
        c2.style.display = "inline-block";
    }
    if (assignment == 'c3') {
        c3.style.display = "inline-block";
    }
    if (assignment == 'c4') {
        c4.style.display = "inline-block";
    }
    if (assignment == 'c5') {
        c5.style.display = "inline-block";
    }
}



