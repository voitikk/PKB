$(document).scroll(function() {
    var scroll_top = $(document).scrollTop();
    var div_one_top = $('#main').position().top;
    var div_two_top = $('#idealvideo').position().top;
    var div_three_top = $('#email_ins').position().top;

    if(scroll_top > div_one_top && scroll_top < div_two_top) {
        //You are now past div one
        $('#idvid').color(Blue);
    } else if( scroll_top > div_two_top) {
        //You are now past div two
       $('#sidebar').text('Two');
    }
});