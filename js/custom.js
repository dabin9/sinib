$(function () {
    //music
    $('header .sun .img_wrap').click(function () {
        if ($('header .sun .img_wrap').hasClass('on')) {
            $('header .sun .img_wrap').removeClass('on');
            $('header .musicOn').animate({ marginLeft: '-100%' }, 1)
            $('header .sunClick').css('display', 'inline');
            document.getElementById('music').pause();

        } else {
            $('header .sun .img_wrap').addClass('on');
            $('header .sunClick').css('display', 'none');
            $('header .musicOn').animate({ marginLeft: '0' })
            document.getElementById('music').play();
        }
    })
    //현재 스크롤위치값
    // $(window).on('scroll', function () {
    //     console.log($(window).scrollTop());
    // })


    //slide
    var swiper = new Swiper(".proj_slide", {
        slidesPerView: "1",
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".project_area .btn.next",
            prevEl: ".project_area .btn.prev",
        },
    });

    const menuTrigger = document.querySelector('.menu-btn');

    menuTrigger.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('open');
    });

    $('.menu-btn').click(function () {
        if ($('.sub_menu').hasClass('on')) {
            $('.sub_menu').removeClass('on');
        } else {
            $('.sub_menu').addClass('on');
        }
    })
    $('.sub_menu').click(function (e) {
        var blackBackground = $('.sub_menu');
        if (blackBackground.has(e.target).length === 0) {
            $('.sub_menu').removeClass('on');
            $('.menu-btn').removeClass('open');
        }
    });
    $('.sub_menu a').click(function () {
        $('.menu-btn').removeClass('open');
    })


    // cloud animation 
    var controller = new ScrollMagic.Controller();

    var tween1 = TweenMax.to('.list01', 0.5, {
        x: '100%'
    });
    var tween2 = TweenMax.to('.list02', 0.5, {
        x: '-100%'
    });
    var scene = new ScrollMagic.Scene({
        triggerElement: ".cloud_wrap",
        duration: "100%",
        offset: 150
    })
        .setTween(tween2)
        .addTo(controller)
    var scene = new ScrollMagic.Scene({
        triggerElement: ".cloud_wrap",
        duration: "100%",
        offset: 150
    })
        .setTween(tween1)
        .addTo(controller)



    $(".paraNav ul li").click(function (e) {
        e.preventDefault();             //#의 기본 기능을 차단
        let target = $(this);           //사용자가 클릭한 버튼의 타겟이 저장
        let index = target.index();     //인덱스를 부여하여 저장
        let section = $(".content__item").eq(index);
        let offset = section.offset().top;          //offset() : 요소의 위치(문서)
        $("html, body").animate({ scrollTop: offset }, 600);  //offset 값을 scrollTop에 대입(애니메이션)
        $('.sub_menu').removeClass('on');
    });

    //인적사항

    $('#detailBtn').on('click', function () {
        $('.myself').css('display', 'block');
    });


    $('.myself_btn').on('click', function () {
        $('.myself').fadeOut();
    })


    $(window).scroll(function (event) {
        hasScroll()
    });


    //boat scroll
    function hasScroll() {
        var wScroll = $(this).scrollTop();

        var boatStep1 = $('.boat_step1').offset().top - 450;
        var boatStep2 = $('.boat_step2').offset().top - 450;
        var boatStep3 = $('.boat_step3').offset().top - 450;
        var boatStep4 = $('.boat_step4').offset().top - 200;
        var boatStep5 = $('.boat_step5').offset().top - 400;
        var boatStep6 = $('.boat_step6').offset().top - 450;

        var textStep1 = $('.text_step1').offset().top - 450;
        var textStep2 = $('.text_step2').offset().top - 450;
        var textStep3 = $('.text_step3').offset().top - 450;
        var textStep4 = $('.text_step4').offset().top - 450;
        var textStep5 = $('.text_step5').offset().top - 450;
        var textStep6 = $('.text_step6').offset().top - 450;



        if (wScroll < boatStep1) {
            boatMove('center');
            $('.boatlight').css('display', 'none');
        } else if (wScroll > boatStep1 && wScroll < boatStep2) {
            boatMove('right');
            $('.boatlight').css('display', 'none');
        } else if (wScroll > boatStep2 && wScroll < boatStep3) {
            boatMove('left');
            $('.boatlight').css('display', 'none');
        } else if (wScroll > boatStep3 && wScroll < boatStep4) {
            boatMove('right');
            $('.boatright').show();
            $('.boatlight').css('display', 'none');
        } else if (wScroll > boatStep4 && wScroll < boatStep5) {
            boatMove('right');
            $('.boatright').hide();
            $('.boatlight').css('display', 'block');
        } else if (wScroll > boatStep5 && wScroll < boatStep6) {
            boatMove('right');
            $('.boatright').show();
            $('.boatlight').css('display', 'none');
        } else if (wScroll > boatStep6) {
            boatMove('left');
        }
        if (wScroll < textStep1) {
            $('.about_area .text_step1').addClass('textOn');
            $('.about_area .text_step2').removeClass('textOn');
        } else if (wScroll > textStep1 && wScroll < textStep2) {
            $('.about_area .text_step1').removeClass('textOn');
            $('.about_area .text_step2').addClass('textOn');
        } else if (wScroll > textStep2 && wScroll < textStep3) {
            $('.about_area .text_step2').removeClass('textOn');
            $('.about_area .text_step3').addClass('textOn');
        } else if (wScroll > textStep3 && wScroll < textStep4) {
            $('.about_area .text_step3').removeClass('textOn');
            $('.about_area .text_step4').addClass('textOn');
        } else if (wScroll > textStep4 && wScroll < textStep5) {
            $('.about_area .text_step4').removeClass('textOn');
            $('.about_area .text_step5').addClass('textOn');
        } else if (wScroll > textStep5 && wScroll < textStep6) {
            $('.about_area .text_step5').removeClass('textOn');
            $('.about_area .text_step6').addClass('textOn');
        } else if (wScroll > textStep6) {
            $('.about_area .text_step6').removeClass('textOn');
        }
    }

    function boatMove(position) {
        if (position === 'left') {
            $('.boatright').removeClass('step1');
            $('.boatright').addClass('step2');
            $('.boatlight').removeClass('step1');
            $('.boatlight').addClass('step2');
        } else if (position === 'right') {
            $('.boatright').removeClass('step2');
            $('.boatright').addClass('step1');
            $('.boatlight').removeClass('step2');
            $('.boatlight').addClass('step1');
        } else if (position === 'center') {
            $('.boatright').removeClass('step2');
            $('.boatright').removeClass('step1');
            $('.boatlight').removeClass('step2');
            $('.boatlight').removeClass('step1');
        }
    }


    function boatLeft() {
        $('.boatright').removeClass('step1');
        $('.boatright').addClass('step2');
        $('.boatlight').removeClass('step1');
        $('.boatlight').addClass('step2');
    }

    function boatCenter() {
        $('.boatright').removeClass('step2');
        $('.boatright').removeClass('step1');
        $('.boatlight').removeClass('step2');
        $('.boatlight').removeClass('step1');
    }

    function boatRight() {
        $('.boatright').removeClass('step2');
        $('.boatright').addClass('step1');
        $('.boatlight').removeClass('step2');
        $('.boatlight').addClass('step1');
    }


































});








































