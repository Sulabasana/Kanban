$(document).ready(function () {
    console.log("Done")
    let but = $('#generate');
    but.click(function(event) {
          var items = {};
          items["items"] = $( this ).serializeArray();
          console.log(JSON.stringify(items));
          event.preventDefault();
          console.log( "clicked" );
      });



})