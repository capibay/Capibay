$(document).ready(function () {

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
    $('.nav__list__item a').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault()
            let hash = this.hash
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function () {
                window.location.hash = hash
            })
        }
    })

})

