/* Author:

*/

var editor,evalError;

$(function(){

  $('#expose-playground').click(exposePlayground);
  $('#execute-playground').click(executePlayground);

  editor = CodeMirror.fromTextArea(document.getElementById("javascript-playground"), {
    mode: "text/javascript"
  });

  //setup error popup
  $('.CodeMirror').popover({
    title     : 'Oops!',
    content   : showError,
    trigger   : 'manual',
    placement : 'bottom'
  });

  setTimeout(showSocial,750);
});

function exposePlayground() {
  $(this).fadeOut(250,function(){$('#execute-playground').fadeIn(250)});
  $('#playground-container').animate({height:'100px'});
}

function showError() {
  return evalError;
}

function executePlayground() {
  var script = editor.getValue();
  try {
    eval(script);
    $('.CodeMirror').popover('hide');
  } catch(e) {
    evalError = e.toString();
    $('.CodeMirror').popover('show');
    if (console) console.log(e.toString());
  }
}

function showSocial() {
  $('#social-buttons').fadeIn();
}
