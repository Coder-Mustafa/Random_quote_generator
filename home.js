$(document).ready( function(){
  var html = "";
  getquote();

  $("#next").click(function(e){
    e.preventDefault();
    getquote();
  });
});





  function getquote(){
    console.log("reached getquote");

    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
      $("#quote-content").html(json.quoteText);
      $("#quote-author").html(json.quoteAuthor);
    });




    }
