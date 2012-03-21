/* Author:

*/

var editor;

$(function(){

  $('#expose-playground').click(exposePlayground);
  $('#execute-playground').click(executePlayground);

  editor = CodeMirror.fromTextArea(document.getElementById("javascript-playground"), {
    mode: "text/javascript"
  });

});

function exposePlayground() {
  $(this).fadeOut(function(){$('#execute-playground').fadeIn()});
  $('#playground-container').animate({height:'100px'});
}

function executePlayground() {
  var script = editor.getValue();
  try {
    eval(script);
  } catch(e) {
    if (console) console.log(e.toString());
  }
}
