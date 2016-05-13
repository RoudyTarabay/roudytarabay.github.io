
      alert();
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(get_jsons);
  
function get_jsons(){  
    $.ajax({
       url: "1996_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_1996p1 = $.parseJSON(dataTest);
          $.ajax({
       url: "1997_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest1) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_1997p1 = $.parseJSON(dataTest1);
                
        $.ajax({
       url: "1998_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest2) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_1998p1 = $.parseJSON(dataTest2);
                
        $.ajax({
       url: "1999_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest3) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_1999p1 = $.parseJSON(dataTest3);
                
        
        $.ajax({
       url: "2000_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest4) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_2000p1 = $.parseJSON(dataTest4);
                
        //drawChart(json_1996p1);
        $.ajax({
       url: "2001_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest5) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_2001p1 = $.parseJSON(dataTest5);
                
        $.ajax({
       url: "1999_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest6) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_1999p1 = $.parseJSON(dataTest6);
                
        $.ajax({
       url: "2003_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest7) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_2003p1 = $.parseJSON(dataTest7);
                
        $.ajax({
       url: "2004_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest8) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_2004p1 = $.parseJSON(dataTest8);
                $.ajax({
       url: "2005_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest9) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_2005p1 = $.parseJSON(dataTest9);
                $.ajax({
       url: "2006_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest9) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_2006p1 = $.parseJSON(dataTest9);
                
        $.ajax({
       url: "2007_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest10) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_2007p1 = $.parseJSON(dataTest10);
                
        $.ajax({
       url: "2008_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest11) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_2008p1 = $.parseJSON(dataTest11);
                $.ajax({
       url: "2009_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest12) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_2009p1 = $.parseJSON(dataTest12);
                $.ajax({
       url: "2010_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest13) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_2010p1 = $.parseJSON(dataTest13);
                
        $.ajax({
       url: "2011_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest14) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_2011p1 = $.parseJSON(dataTest14);
                $.ajax({
       url: "2012_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest15) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_2012p1 = $.parseJSON(dataTest15);
                $.ajax({
       url: "2013_part1.php",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest16) {

                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                 json_2013p1 = $.parseJSON(dataTest16);
               /* drawChart(json_1996p1,json_1997p1,json_1998p1,json_1999p1,json_2000p1,json_2001p1,json_1999p1,json_2003p1,json_2004p1,json_2005p1,json_2006p1,json_2007p1,json_2008p1,json_2009p1,json_2010p1,json_2011p1,json_2012p1,json_2013p1);*/
        
      }
  });
        
      }
  });
        
      }
  });
      }
  });
        
      }
  });
        
      }
  });
      }
  });
      }
  });
        
      }
  });
        
      }
  });
        //drawChart(json_1996p1);
             }
  });
        //drawChart(json_1996p1);
             }
  });
             }
  });
        
        
      //  drawChart(json_1996p1);
             }
  });
             }
  });
             }
  });
             }
  });
}
});
}
function facultysalary(datar96, datar97,datar98,datar99,datar00,datar01,datar02,datar03,datar04,datar05,datar06,datar07, datar08, datar09,datar10,datar11,datar12,datar13,uniname,divId) {
      var obj96 = datar96;
      var obj97 = datar97;
      var obj98 = datar98;
      var obj99 = datar99;
      
      


      var uniName = uniname;
      var uni96 = obj96[uniName];
     // console.log(uni96);
      var uni97 = obj97[uniName];
      //      console.log(uni97);
      var uni98 = obj98[uniName];
      //      console.log(uni98);
      var uni99 = obj99[uniName];
      
      

        //    console.log(uni99);

        console.log(uni96.avgfacsal)
    var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales'],
          ['1996',  parseInt(uni96.avgfacsal)],
          ['1997',  parseInt(uni97.avgfacsal)],
          ['1998',  parseInt(uni98.avgfacsal) ],
          ['1999',  parseInt(uni99.avgfacsal)]
      
     
         
        ]);
    

        var options = {
          title: 'Average Faculty Salary',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById(divId));

        chart.draw(data, options)
    
  //console.log(datar);
    /*var obj = datar;
    var uniName = "COMMUNITY COLLEGE OF THE AIR FORCE";
    var uni = obj[uniName];
    console.log(uni);
    var data = google.visualization.arrayToDataTable([
     ['Language', 'Speakers (in millions)'],
          ['Agriculture',  uni.agriculture],
          ['Architecture',  uni.architexture],
          ['Cultural Studies',  uni.culturestudies],
          ['Comm Arts',  uni.commArts],
      ['comm Tech',  uni.comTech],
          ['Computer Science',  uni.compsci],
          ['Culinary',  uni.culinary],
          ['Education',  uni.education],
          ['Engineering',  uni.engineering],
          ['Engineering Related',  uni.engineeringRelated],
          ['Linguistics',  uni.linguistics],
          ['Familial Sciences',  uni.famSciences],
          ['Legal',  uni.legal],
          ['Literature',  uni.literature],
      ['Liberal Arts',  uni.liberalArts],
          ['Library',  uni.library],
          ['Biology',  uni.Biology],
          ['Mathematics',  uni.mathematics],
          ['Military',  uni.military],
          ['Multiple Studies',  uni.multiStudies],
          ['Fitness Studies',  uni.fitnessStudies],
      ['Philosophy',  uni.philosophy],
      ['Theology',  uni.theology],
      ['Physical Sciences',  uni.physicalSciences],
      ['Tech',  uni.tech],
      ['Psychology',  uni.psychology],
      ['Law Enforcement',  uni.lawEnforcement],
      ['Public Administration',  uni.publicAdministration],
      ['Social Sciences',  uni.socialSciences],
      ['Construction',  uni.construction],
      ['Mechanics',  uni.mechanics],
      ['Precision Production',  uni.precisionproduction],
      ['Transport',  uni.transport],
      ['Visual Arts',  uni.visualArts],
      ['Health',  uni.healthProffessions],
      ['Business',  uni.business],
      ['History',  uni.history]
        ]);

      var options = {
        legend: 'none',
        pieSliceText: 'label',
        title: 'Swiss Language Use (100 degree rotation)',
        pieStartAngle: 100,
      };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);*/
      }
  