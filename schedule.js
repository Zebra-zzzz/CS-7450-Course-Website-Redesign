
d3.csv ('./hw2-papers.csv').then(function (data) {
    // console.log(data)

    var weeks = [];
    var wee = [1];
    var include = false;
    
    // var mainpage = d3.select('.mainpage');

    
    var filterData = data.filter(function(d) {
        include = weeks.includes(d['Week']);
        weeks.push(d['Week']);
        return include == false;
    });

    // console.log(filterData);
    // console.log(weeks);

    var mainpage = d3.select('.mainpage').selectAll('.section')
        .data(filterData)
        .enter()
        .append('div')
        .attr('id', function(paper) {return 'ww' + paper['Week']})
        .attr('class', 'section')
        // .append('div')
    
    mainpage.append('div')
        .attr('class', 'title')
        .attr('id', function(paper) {return 'w' + paper['Week']});

    mainpage.append('div')
        .attr('class', 'reading');

    d3.selectAll('.reading')
        .append('h4')
        .text('Reading');
    
    mainpage.append('div')
        .attr('class', 'para')
        .attr('class', 'paper para')
        .attr('id', function(paper) {return 'www' + paper['Week']});


    mainpage.append('svg')
        .attr('class', 'line')
        .attr('height', '10')
        .attr('width', '685');

    d3.selectAll('svg.line')
    .append('line')
    .attr('class', 'line')
    .attr('x1', '0')
    .attr('y1', '4')
    .attr('x2', '683')
    .attr('y2', '4')
    .style('stroke', 'rgb(234, 137, 72, 0.6)')
    .style('stroke-width', '1.5');
    
    var titles = d3.selectAll('.title');

    console.log(titles);
    titles.each(function(d) {
        var idd = d3.select(this).attr('id');

        var ffData = filterData.filter(function(d) {
            // console.log(idd);

            return 'w' + d['Week'] == idd;
            // return 1;
        });
        // console.log(ffData[0]);
        d3.select(this)
        .selectAll('h4')
        .data(ffData)
        .enter()
        .append('h4')
        .text(function (paper) {
            return 'Week ' + paper['Week'] + '\u00A0\u00A0\u00A0' + paper['Date'] + '\u00A0\u00A0\u00A0' + paper['Topic'];
        });
    });    

    

    d3.selectAll('.para.paper').each(function(d) {
        var iddd = d3.select(this).attr('id');

        d3.select(this)
        .append('ul')
        .attr('class', 'paper')
        .attr('id', 'w' + d3.select(this).attr('id'));
    });    

    d3.selectAll('ul.paper').each(function(d) {
        var iddd = d3.select(this).attr('id');

        var fffData = data.filter(function(d) {
            // console.log(idd);

            return 'wwww' + d['Week'] == iddd;
            // return 1;
        });
        console.log(fffData[0]['Paper']);
        d3.select(this)
        .selectAll('li')
        .data(fffData)
        .enter()
        .append('li')
        .attr('class', 'text paper')
        .text(function (paper) {
            return paper['Paper'];
        });
    });
    

    d3.selectAll('li.paper').each(function(d,i) {
        var num = i;

        var eachData = data.filter(function(da,ind) {
            // console.log(idd);

            return num == ind;
            // return 1;
        });
        console.log(eachData);
        // console.log(fffData[0]['Paper']);
        d3.select(this)
        .selectAll('a')
        .data(eachData)
        .enter()
        .append('a')
        .attr('href', function(paper) {return paper['Link']})
        .attr('class', 'highlight')
        .text('(link)');
        // .text('hello');
    });
    
});