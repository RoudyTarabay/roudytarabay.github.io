
	var width=$(window).width()*0.95;
	var height=$(window).height()*0.95;;	

	var svg= d3.select("body")
			.append("svg")
			.attr("width",width)
			.attr("height",height);

	d3.json("world.json",function(error,world){

  		if (error) return console.error(error);
		var subunits = topojson.feature(world, world.objects.subunits);


		var projection = d3.geo.mercator()
	    .translate([width / 2, height / 2])
	    .scale((width - 1) / 2 / Math.PI);

	    var path = d3.geo.path()
		.projection(projection); 


		svg.selectAll(".subunits")
			.data(topojson.feature(world, world.objects.subunits).features)
		 	.enter().append("path")
		    .attr("class", function(d) {  ;return "subunit " + d.id; })
		    .attr("id", function(d){ 
	    		var str=String(d.properties.name);
		    	if(str.replace(/[\s \.]/g, '').localeCompare("KoreanDMZ(north)")==0){
		    		return "Northkorea"
		    	}
		    	else
		    		return d.properties.name.replace(/[\s \.]/g, '');})
		    .attr("d", path)
		    .on("mouseover",function(d){
		    	this.style.fill="green";
		    }).on("mouseout",function(d){
		    	this.style.fill="";
		    }); ; 

		svg.append("path")
		    .datum(topojson.mesh(world, world.objects.subunits, function(a, b) { return a !== b && !(a.id==="RUA"&&b.id==="RUE") }))
		    .attr("d", path)
		    .attr("class", "subunit-boundary");


	});