/*
Class "disabled" make the top level menu item clickable
when there is a dropdown

*/
$(window).load(function() {
  console.log("window load")

  if($(this).width() <= 768){
    $('a.dropdown-toggle').removeClass('disabled')
  }
  else{
    $('a.dropdown-toggle').addClass('disabled')
  }
})
$(function(){

  $(window).bind("resize",function(){
    console.log("window resized"+$(this).width())
    if($(this).width() <= 768){
      $('a.dropdown-toggle').removeClass('disabled')
    }
    else{
      $('a.dropdown-toggle').addClass('disabled')
    }
  })
})

/*
Make dropdown menu shows on mouse hover
*/
$(function(){

    $(".dropdown").hover(

      function() {
        if ($(window).width() > 768) {
        $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
        // $(this).toggleClass('open');
        // $('b', this).toggleClass("caret caret-up");
        }
      },
      function() {
        if ($(window).width() > 768) {
        $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
        // $(this).toggleClass('open');
        // $('b', this).toggleClass("caret caret-up");
      }
      });
});
