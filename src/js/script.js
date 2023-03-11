$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png" alt="left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png" alt="right"></button>',
        responsive: [
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                arrows: false,
              }
            },
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn(300);
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut(300);
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, #order').fadeIn(300);
        })
    });

    // Validaton
    
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                  required: true,
                  email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Необходимо как минимум {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введён адрес почты"
                }
              }
        });
    };
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
});