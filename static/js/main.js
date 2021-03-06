$(document).ready(function () {
    let isMenuOpen = false

    let $win = $(window),
        $hero = $('.hero'),
        $nav = $('nav'),
        $hero_title = $('.hero h1'),
        $hero_call_button = $('.hero .hero__call_button')
    centerHero({ $win, $hero, $nav, $hero_call_button, $hero_title })
    $(window).on('resize', function () {
        $win = $(this)
        $hero = $('.hero')
        $nav = $('nav')
        $hero_title = $('.hero h1')
        $hero_call_button = $('.hero .hero__call_button')
        centerHero({ $win, $hero, $nav, $hero_call_button, $hero_title })
    })
    function centerHero({ $win, $hero, $nav, $hero_title, $hero_call_button }) {
        let planHeight = $win.height() - $nav.height()
        let realHeroHeight = $hero_call_button.position().top + $hero_call_button.outerHeight(true) - $hero_title.position().top
        console.log(planHeight, realHeroHeight)
        $hero_title.parent().css({ position: 'relative' })
        $hero_title.css({ marginTop: `${(planHeight - realHeroHeight) / 2 - 40}px` })
    }

    // let $menu_icon = $('.menu__icon')
    // $($menu_icon).on('click', function () {
    //     if ($(window).width() <= 1100) {

    //     }
    // })
    $('.hero__section a').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault()
            let hash = this.hash
            console.log(hash);

            // $('html, body').animate({
            //     scrollTop: $(hash).offset().top
            // }, 600, function () {
            //     
            //     console.log(hash);
            // })
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
            // window.location.hash = hash;
        }
    })

    $('.menu__icon').on("click", function () {
        isMenuOpen = !isMenuOpen
        $('.menu__section').slideToggle("fast")
    })

    $(window).on("resize", function () {
        if ($(window).width() > 1100 && isMenuOpen) {
            $('.menu__section').slideUp("fast")
            isMenuOpen = !isMenuOpen
        }
    })

    $(window).on("scroll", function () {
        stickyNav();
        if (isMenuOpen) {
            $('.menu__section').slideUp("fast")
            isMenuOpen = !isMenuOpen
        }
    })
    var stickyNavTop = $('nav').offset().top;

    var stickyNav = function () {
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top

        if (scrollTop > stickyNavTop) {
            $('nav').addClass('sticky');
            //$('.menu__section').style.position = 'fixed'
            $('.menu__section').addClass('sticky')
            $('.menu__section').css({
                top: $('nav').innerHeight() + 'px',
                left: '0'
            })
        } else {
            $('nav').removeClass('sticky');
            $('.menu__section').removeClass('sticky');
            $('.menu__section').css({
                top: '0',
                left: '-20px'
            })
        }
    };
    stickyNav();


    let $current__choose = $('.feedback__current--choose')
    let $feedback__list__item = $('.feedback__list__item')

    $($feedback__list__item).on('click', function (e) {
        if (!$(this).hasClass('feedback__current--choose')) {
            $('.feedback__list__item').removeClass('feedback__current--choose')
            $(this).addClass('feedback__current--choose')
        }
    })


})

