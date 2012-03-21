/* Author:

*/


$('#content, header, footer').click(function(){
  $('header, footer, #content').removeClass('active-face');
  $(this).addClass('active-face');
})
