$(document).ready(function(){
    var scrollTop =0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop > 100){
            $('.navbar').addClass ('scrollNav');
			$('.backToTop').addClass ('visible');
        }
       else if (scrollTop < 100){
        $('.navbar').removeClass('scrollNav');
        $('.backToTop').removeClass ('visible');
    };
});
   
$('.backToTop').click(function(){
    $("body,html").animate({
        scrollTop : 0},
        800);
});
});

