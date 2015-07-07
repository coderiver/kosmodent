head.ready(function() {

    // accordeon

    $('.js-accordeon').on('click', function(){
        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $(this).find('.js-accordeon-data').slideUp();
        }
        else {
            $('.js-accordeon').removeClass('is-active');
            $('.js-accordeon-data').slideUp();

            $(this).addClass('is-active');
            $(this).find('.js-accordeon-data').slideDown();
        }
    });

    // popup

    $('.js-popup').on('click', function(){
        var link = $(this).data('link');

        $('#' + link).fadeIn('fast');
    });

    $('.js-popup-close').on('click', function(){
        $(this).parents('.popup').fadeOut('fast');
    });
    $('.popup').on('click', function(event){
        $(this).fadeOut('fast');
    });
    $('.popup__in').on('click', function(){
        event.stopPropagation();
    });

    // validation

    var form_validate = $('.js-validate');
    if (form_validate.length) {
        form_validate.each(function () {
            var form_this = $(this);
            $.validate({
                form : form_this,
                validateOnBlur : false,
                borderColorOnError : false,
                scrollToTopOnError : false
            });
        });
    };
	// fancybox init

    $('.fancybox').fancybox({
        padding: 0
    });

  // tabs
	function tab() {
       $(".js-tab").each(function(){
        	var tab_link = $(this).find("a");
        	var tab_item = $(this).find("li");
        	var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
        	tab_cont.hide();
        	tab_item.first().addClass("is-active");
        	$(this).parents(".js-tab-group").find(".tab1").show();

        	tab_link.on("click", function() {
        	   	var index = $(this).attr("href");
        	   	var activeTab = $(this).parents(".js-tab-group").find("."+index);
        	   	tab_item.removeClass("is-active");
        	   	$(this).parent().addClass("is-active");
        	   	tab_cont.hide();
        	   	activeTab.show();
        	   	return false;
        	});
       });
  	}
  	tab();

  	// slider
    $('.js-slider').on('init', function(event, slick){
      $(this).addClass('is-loaded');
    });

  	$('.js-slider').slick({
  		dots: true,
      adaptiveHeight: true,
  		autoplay: true,
		  autoplaySpeed: 5000
  	});

  	// mobile nav

  	$('.js-hamburger').on('click', function(){
  		$('.js-mob-menu').slideDown();
  	});
  	$('.js-mob-menu-close').on('click', function(){
  		$('.js-mob-menu').slideUp();
  	});	

});