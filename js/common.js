head.ready(function() {

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