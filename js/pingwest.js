
$(".navSlideDown").slideUp();
$(".navBlock").hover(function(){
	$(this).children(".navSlideDown").stop(true, false).slideDown();
}, function(){
	$(this).children(".navSlideDown").stop(true, false).slideUp();
});



$(".indexBannerTextHot").css("background","#ff5624");
$(".indexMainSlideLeft").css("display","none");
$(".indexBannerTextDongtai").click(function(){
	$(".indexBannerTextDongtai").css("background","#ff5624");
	$(".indexBannerTextHot").css("background","#D4D4D4");
    $(".indexMainSlideRight").fadeOut("show", function(){
	$(".indexMainSlideLeft").fadeIn("show");
});
});
$(".indexBannerTextHot").click(function(){
	$(".indexBannerTextDongtai").css("background","#D4D4D4");
	$(".indexBannerTextHot").css("background","#ff5624");
    $(".indexMainSlideLeft").fadeOut("show", function(){
	$(".indexMainSlideRight").fadeIn("show");
});
});

$(".indexAbout").hover(function(){
	$(this).children("span").animate({bottom:'-100px'},500);
}, function(){
	$(this).children("span").animate({bottom:'0px'},500);
});


// 弹出框jQuery

// leanModal v1.1 by Ray Stone - http://finelysliced.com.au
// Dual licensed under the MIT and GPL
$(function(){
  $('.loginform').submit(function(e){
    return false;
  });
  
  $('.modaltrigger').leanModal({ top: 110, overlay: 0.45, closeButton: ".hidemodal" });
});

(function($) {
    $.fn.extend({
        leanModal: function(options) {
            var defaults = {
                top: 100,
                overlay: 0.5,
                closeButton: null
            };
            var overlay = $("<div id='lean_overlay'></div>");
            $("body").append(overlay);
            options = $.extend(defaults, options);
            return this.each(function() {
                var o = options;
                $(this).click(function(e) {
                    var modal_id = $(this).attr("href");
                    $("#lean_overlay").click(function() {
                        close_modal(modal_id)
                    });
                    $(o.closeButton).click(function() {
                        close_modal(modal_id)
                    });
                    var modal_height = $(modal_id).outerHeight();
                    var modal_width = $(modal_id).outerWidth();
                    $("#lean_overlay").css({
                        "display": "block",
                        opacity: 0
                    });
                    $("#lean_overlay").fadeTo(200, o.overlay);
                    $(modal_id).css({
                        "display": "block",
                        "position": "fixed",
                        "opacity": 0,
                        "z-index": 11000,
                        "left": 50 + "%",
                        "margin-left": -(modal_width / 2) + "px",
                        "top": o.top + "px"
                    });
                    $('#listContact').css({
                        "position": "absolute",
                        "margin-bottom":"50px"
                    });
                    $(modal_id).fadeTo(200, 1);
                    e.preventDefault()
                })
            });
            function close_modal(modal_id) {
                $("#lean_overlay").fadeOut(200);
                $(modal_id).css({
                    "display": "none"
                })
            }
        }
    })
})(jQuery);