$(document).ready(function(){

  $("#randomBtn").click(function(){            window.open('https://en.wikipedia.org/wiki/Special:Random','_blank');
  })//rendomBtn

  $("#searchBtn").click(function(){

    var html = "";
    $("#result").html("");//html

    //borderAnimate
    function changeBorderColor() {
      var colors = ["#BC872F","#BF3434","#88BC2F", "#BF5734", "#BF7A34", "#BF9C34", "#BFBF34", "#9CBF34"];
      for (i = 0; i < colors.length; i++) {
        $(".jumbotron").animate({
          borderColor: colors[i]}, 200);

    }//forloop
    }//changeBorderColor
    changeBorderColor();


var searchTerm = $("#searchTerm").val();//value that user search
var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";

$.getJSON(url,function(data){

  var arrTitle = data[1];
  var arrDes = data[2];
  var arrUrl = data[3];

  if (arrTitle[0] !== null){
    for (i=0 ; i<arrTitle.length ; i++){
      html += "<h4><a target ='_blank' href = '"+ arrUrl[i] +"'> "+arrTitle[i]+"</a></h4>"+ arrDes[i];
      console.log("hello");
      }//for loop
    $("#intro").html("Your search " + '<span class="intro">' + searchTerm + "</span> comes with the following results");
    $("#result").html(html);
   console.log("hello");
  } else {
    $("#result").html("Oops... "+ searchTerm +" is not found" );

  }//else


});//getJSON
});//searchBtnClick

  $("#searchTerm").keypress(function(e){
    if (e.which == 13) {//enter key
      $("#searchBtn").click();

    }// if

  });//keypress

});//ready function

 
