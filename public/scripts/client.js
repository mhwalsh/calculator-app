console.log('sourced');

//short hand for document ready
$(function() {
  console.log('ready');

  //click listener for calculate button
  $('#calculate').on('click', function() {
    console.log('click calculate');

    var x = $('#val1').val();
    var y = $('#val2').val();
    var operator = $('#operator').val();

    //build object to send
    var toSend = {
      x: x,
      y: y,
      type: operator
    };
    console.log('to Send', toSend);

    $.ajax({
      type: 'POST',
      url: '/',
      data: toSend,
      success: function(result) {
        console.log('result = ', result);
        display(result);
      }, // end success
      error: function() {
        console.log('error connecting to server');
      }
    }); // end ajax
  }); // end calculate onclick

  function display(result) {
    console.log('display');
  }

}); // end document ready
