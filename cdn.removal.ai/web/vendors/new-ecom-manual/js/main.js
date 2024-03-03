const imgNotiElement = document.querySelector('.section-heading__img-noti');
const fiveNotificationElement = document.querySelector('.section-heading__five-notification');

imgNotiElement.addEventListener('click', function () {
    if (window.innerWidth <= 768) {
        if (fiveNotificationElement.style.display === 'none' || fiveNotificationElement.style.display === '') {
            fiveNotificationElement.style.display = 'block';
            console.log("🚀 ~ fiveNotificationElement:", fiveNotificationElement)
        } else {
            fiveNotificationElement.style.display = 'none';
            console.log("🚀 ~ fiveNotificationElement:", fiveNotificationElement)
        }
    }
});
//768
const imgNoti = document.getElementById("section-heading__img-noti");
const fiveNotification = document.getElementById("section-heading__five-notification");
imgNoti.addEventListener('click', function () {
    if (window.innerWidth <= 768) {
        if (fiveNotification.style.display === 'none' || fiveNotification.style.display === '') {
            fiveNotification.style.display = 'block';
            console.log("🚀 ~ fiveNotification:", fiveNotification)
        } else {
            fiveNotification.style.display = 'none';
        }
    }
});



const cookieSection = document.querySelector('.cookie-section');
const closeCookieLink = document.querySelector('.close-cookie');

closeCookieLink.addEventListener('click', function (event) {
    event.preventDefault();

    cookieSection.style.display = 'none';
});


function main() {
    (function () {
        'use strict'
        jQuery(document).ready(function ($) {

            var currentActive = null;

            $('.section-heading__box-question').click(function () {
                var isActive = $(this).hasClass('active');

                if (currentActive && currentActive !== this) {
                    $(currentActive).removeClass('active');
                    $(currentActive).find('img').attr('src', '/images/add.svg');
                }
                $('.section-heading__answer').slideUp();
                $('.section-heading__box-question').removeClass('active');

                if (!isActive) {
                    $(this).addClass('active');
                    $(this).find('img').attr('src', '/images/minus.svg');
                } else {
                    $(this).find('img').attr('src', '/images/add.svg');
                }

                currentActive = this;

                if (!isActive) {
                    $(this).parent().find('.section-heading__answer').slideDown();
                }

                return false;
            });
            $('.rst-toggle-menu').click(function () {
                $('.header-right').slideToggle(400);
                $(this).toggleClass('exit');
                $('body').toggleClass('menu_show');
                $('.header-right').toggleClass('show');

                return false;
            });

            var wd = jQuery(window).width();
            if (wd < 1199) {
                $('.menu-item-has-children').click(function () {
                    $(this).stop().find('.sub-menu').slideToggle();
                    $(this).stop().find('.rst-container-submenu').slideToggle();

                    return false;
                });
                $('.rst-lang-menu').click(function () {
                    $(this).stop().find('.rst-list-lang').slideToggle();
                    return false;
                });
            }


        });

        jQuery(window).scroll(function ($) {

            var hg_scroll = jQuery(window).scrollTop();
            if (jQuery(this).scrollTop() > 1) {
                jQuery('header').stop().addClass('rst_sticky');

            } else {
                jQuery('header').stop().removeClass('rst_sticky');

            }

        });

    }());

}
main();
