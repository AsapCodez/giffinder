// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
function giphyURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the giphy API with
    // the searchTerm provided in the parameters
var searchTerm = $("input").val();
var url= "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
    return url;

}


function appendImageToBody(srcURL) {
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
    $('body').append('<img src=' + srcURL + '>');
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    var url = giphyURLWithSearchTerm(searchTerm);
    $.ajax({
      url: url,
      method: "GET",
      success: function(response) {
          //console.log(response);
           var image_url = response.data[0].images.original.url; // Get the url from response
           console.log(image_url);
           
           appendImageToBody(image_url);
      },
    }); 
}

//Add a click handler beloe to call the function when the button is clicked
$('button').click(function() {
    var searchTerm = $('input').val();
    callGiphyAPIWithSearchTerm("searchTerm");
});














  
  
  
});
