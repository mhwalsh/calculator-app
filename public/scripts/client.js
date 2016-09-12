console.log('sourced');

//short hand for document ready
$(function() {
  console.log('ready');

  //click listener for calculate button
  $('#calculate').on('click', function() {
    console.log('click calculate');

    var x = Number($('#val1').val());
    var y = Number($('#val2').val());

    // check for number inputs
    if(isNaN(x) || isNaN(y)){
      alert('Please enter numbers!');
      clear();
      return; //exit early
    }

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

  $('#clear').on('click', function() {
    clear();
  });

  // function to display answer on the dom
  function display(result) {
    console.log('display');

    // var myPTag = $('<p>').text("Answer = " + result.answer);
    // $('#answerDiv').empty().append(myPTag);

    $('#answerDiv').text("Answer = " + result.answer);
  }

  //function to clear the input fields
  function clear() {
    console.log('clear');
    $('#val1').val('');
    $('#val2').val('');
  }

}); // end document ready
