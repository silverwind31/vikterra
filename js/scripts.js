$(document).ready(function(e){
    $('.search_btn a').on('click', function(e){
        e.preventDefault();
        $('.search_popup').addClass('active');
        $('.overlay').addClass('active');
        disableScroll();
    });
    $('.search_popup .close_btn').on('click', function(){
        $('.search_popup').removeClass('active');
            $('.overlay').removeClass('active');
        setTimeout(function() {
            enableScroll();
        }, 300);
    });
    function disableScroll() {
        var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        var pagePosition = window.scrollY;
        var header = $('header');
    
        if (header.hasClass('fixed')) {
            header.css('paddingRight', paddingOffset);
        }
    
        $('body').css('paddingRight', paddingOffset).addClass('disable-scroll').attr('data-position', pagePosition).css('top', -pagePosition + 'px');
    }
    function enableScroll() {
        var pagePosition = parseInt($('body').attr('data-position'), 10);
        $('body').css('top', 'auto').removeClass('disable-scroll');
        
        var header = $('header');
        if (header.hasClass('fixed')) {
            header.css('paddingRight', '0px');
        }
        
        $('body').css('paddingRight', '0px');
        window.scroll({ top: pagePosition, left: 0 });
        $('body').removeAttr('data-position');
    }
    $('.overlay').on('click', function() {
        if ($('.callback_popup').hasClass('active')) {
            $(this).removeClass('active');
            $('.callback_popup').removeClass('active');
            setTimeout(function() {
                enableScroll();
            }, 300);
        }
        if ($('.search_popup').hasClass('active')) {
            $(this).removeClass('active');
            $('.search_popup').removeClass('active');
            setTimeout(function() {
                enableScroll();
            }, 300);
        }
    });
    // CALLBACK
    $('.callback .callback_btn').on('click', function(e){
        e.preventDefault();
        $('.callback_popup').addClass('active');
        $('.overlay').addClass('active');
        disableScroll();
    });
    $('.header_bottom .hamburger_btn').on('click', function(e){
        e.preventDefault();
        $('.hamburger_menu').addClass('active');
        $('body').addClass('disable-scroll');
    });
    $('.hamburger_menu ').on('click', function(){
        $('.hamburger_menu').removeClass('active');
        $('body').removeClass('disable-scroll');
    });
    let input = $("#phone");
    input.intlTelInput({
        utilsScript: "vendors/telinput/js/utils.js?1687509211722"
    }); 
    
    $('[data-fancybox]').fancybox({
        beforeShow: function(instance, slide) {
          $(slide.opts.$orig).siblings('.zoom').addClass('hidden');
        },
        afterClose: function(instance, slide) {
          $(slide.opts.$orig).siblings('.zoom').removeClass('hidden');
        }
      });
    var header = $('header');
    var main = $('main');
    var headerTop = $('.header_top');
    
    function myFunction() {
      var scrollTop = $(window).scrollTop();
    
      if (scrollTop > 150) {
        header.addClass('fixed');
        main.addClass('fixed');
        headerTop.hide();
      } else {
        header.removeClass('fixed');
        main.removeClass('fixed');
        headerTop.show();
      }
    }
    
    myFunction();
    $(window).on('scroll', myFunction);

    // VACANCIES ACCORDION
    $('.vacancies_accordion .vacancy_item .vacancy_infos').on('click', function(e) {
        var $itemContent = $(this).closest('.vacancy_item').find('.item_content');
    
        $itemContent.slideToggle(300);
        $(this).find(".item_action").toggleClass("active");
    
        $('.vacancies_accordion .vacancy_item').not($(this).closest('.vacancy_item')).removeClass('active');
        $('.vacancies_accordion .vacancy_item').not($(this).closest('.vacancy_item')).find('.item_content').slideUp(300);
    
    });

    $(".vacancies_accordion .vacancy_item .item_content").hide();
    $(".vacancies_accordion .vacancy_item:first").addClass("active").show();

    // FAQ ACCORDION

    $(".faq_accordion_item .faq_item .item_content").hide();
    $(".faq_accordion_item .faq_item .item_header").click(function() {
        $('.faq_accordion_item .faq_item').not($(this).closest('.faq_item')).find('.item_content').slideUp(300);
        $(this).siblings(".item_content").slideToggle(300);
        $(this).find(".item_action").toggleClass("active");
    });

    $("ul.faq_tabs li").click(function() {
        var activeTab = $(this).attr("rel");
        $(".faq_accordion_item").removeClass("active").slideUp(300);
        $("#" + activeTab).addClass("active").slideDown(300);

        $("ul.faq_tabs li").removeClass("active");
        $(this).addClass("active");
    });

    $("ul.faq_tabs li").first().addClass("active");
    $(".faq_accordion_item").removeClass("active").hide();
    $(".faq_accordion_item:first").addClass("active").show();
})