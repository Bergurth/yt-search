// yt_search.js


$(function() {

      $("#search-input").keyup(function(event){
    if(event.keyCode == 13){
        $("#search-btn").click();
    }
});

      $("#search-btn").click( function()
           {
           	 var search_info = $('#search-input').val();
           	 // https://www.youtube.com/results?search_query=brad+pitt    for example
           	 search_info = search_info.split(" ").join("+");

           	 var yt_search_string = 'https://www.youtube.com/results?search_query=';
           	 var search_string = yt_search_string + search_info;
             //alert(search_string);
             window.location.replace(search_string);

           }
      );

});