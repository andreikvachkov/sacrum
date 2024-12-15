const header = document.getElementById("header");
function toggleHeaderClass() {
    if (window.scrollY > 0) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
}
toggleHeaderClass();
window.addEventListener("scroll", toggleHeaderClass);




const searchButton = document.querySelector('.header__search');
const searchWrap = document.querySelector('.header__search__wrap');

searchButton.addEventListener('click', () => {
    searchButton.classList.add('hidden');
    searchWrap.classList.add('active');
});



const main_catalog__swiper = new Swiper('.main_catalog__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,

    navigation: {
        nextEl: '.main_catalog__swiper__next',
        prevEl: '.main_catalog__swiper__prev',
    },

});

const catalog_two__swiper = new Swiper('.catalog_two__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,

    navigation: {
        nextEl: '.catalog_two__swiper__next',
        prevEl: '.catalog_two__swiper__prev',
    },

});


function openMenu() {
    $('.mobile_menu').addClass('open');
    $('.popup_bg').addClass('open');
    $('body').addClass('no-scroll');
}

function closeMenu() {
    $('.mobile_menu').removeClass('open');
    $('.popup_bg').removeClass('open');
    $('body').removeClass('no-scroll');
}

$('.header__menu_mobile').on('click', openMenu);

$('.mobile_menu__close').on('click', closeMenu);

// $(document).on('click', function (e) {
//     if (!$(e.target).closest('.mobile_menu').length && !$(e.target).closest('.header__menu_mobile').length) {
//         closeMenu();
//     }
// });


function openAddProduct() {
    $('.addproduct_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closeAddProduct() {
    $('.addproduct_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.addproduct_popup__open').on('click', function (event) {
    event.preventDefault();
    openAddProduct();
});

$('.addproduct_popup__close').on('click', function (event) {
    event.preventDefault();
    closeAddProduct();
});



let currentRotation = 0;

document.getElementById("spinButton").addEventListener("click", function () {
    const wheel = document.getElementById("wheel");
    const wheelBg = document.querySelector(".roll_popup__whell_bg");
    const mainBlock = document.querySelector(".roll_popup__right__main");
    const loadBlock = document.querySelector(".roll_popup__load");
    const successBlock = document.querySelector(".roll_popup__sucsess");

    mainBlock.style.display = "none";
    loadBlock.style.display = "flex";

    wheelBg.style.display = "none";

    const sections = 12;

    const randomSection = Math.floor(Math.random() * sections);

    const sectionAngle = 360 / sections;
    const stopAngle = randomSection * sectionAngle;

    const spins = 5;
    const totalAngle = spins * 360 + stopAngle;

    const newRotation = currentRotation + totalAngle;

    wheel.style.transform = `rotate(${newRotation}deg)`;

    currentRotation = newRotation;

    wheel.addEventListener("transitionend", function onTransitionEnd() {
        loadBlock.style.display = "none";
        successBlock.style.display = "flex";

        wheelBg.style.display = "block";

        wheel.removeEventListener("transitionend", onTransitionEnd);
    });
});

function openRollPopup() {
    $('.roll_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closeRollPopup() {
    $('.roll_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.promo__btn').on('click', function (event) {
    event.preventDefault();
    openRollPopup();
});

$('.roll_popup__close').on('click', function (event) {
    event.preventDefault();
    closeRollPopup();
});




function openWishlist() {
    $('.wishlist_popup').addClass('active');
    $('.popup_bg').addClass('open');
    $('body').addClass('no-scroll');
}

function closeWishlist() {
    $('.wishlist_popup').removeClass('active');
    $('.popup_bg').removeClass('open');
    $('body').removeClass('no-scroll');
}
$('.header__wishlist').on('click', function (event) {
    event.preventDefault();
    openWishlist();
});

$('.wishlist_popup__close').on('click', function (event) {
    event.preventDefault();
    closeWishlist();
});

// $(document).on('click', function (e) {
//     if (!$(e.target).closest('.wishlist_popup').length && !$(e.target).closest('.header__wishlist').length) {
//         closeWishlist();
//     }
// });




function openReviewPopup() {
    $('.review_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closeReviewPopup() {
    $('.review_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.reviews__add').on('click', function (event) {
    event.preventDefault();
    openReviewPopup();
});

$('.review_popup__close').on('click', function (event) {
    event.preventDefault();
    closeReviewPopup();
});




function openTableSize() {
    $('.tablesize_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closeTableSize() {
    $('.tablesize_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.product_page__popup_size').on('click', function (event) {
    event.preventDefault();
    openTableSize();
});

$('.tablesize_popup__close').on('click', function (event) {
    event.preventDefault();
    closeTableSize();
});





function openFilterPopup() {
    $('.filter_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closeFilterPopup() {
    $('.filter_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.catalog__filter_btn_mobile').on('click', function (event) {
    event.preventDefault();
    openFilterPopup();
});

$('.filter_popup__close').on('click', function (event) {
    event.preventDefault();
    closeFilterPopup();
});

function openSortPopup() {
    $('.sort_popup').addClass('active');
}

function closeSortPopup() {
    $('.sort_popup').removeClass('active');
}

$('.filter_popup__sort_btn').on('click', function (event) {
    event.preventDefault();
    openSortPopup();
});

$('.sort_popup__close').on('click', function (event) {
    event.preventDefault();
    closeSortPopup();
});



function openPhilosophy() {
    $('.philosophy_popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closePhilosophy() {
    $('.philosophy_popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.about_promo__btn').on('click', function (event) {
    event.preventDefault();
    openPhilosophy();
});

$('.philosophy_popup__close').on('click', function (event) {
    event.preventDefault();
    closePhilosophy();
});




const seealso__swiper = new Swiper('.seealso__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 14,

    navigation: {
        nextEl: '.seealso__swiper__next',
        prevEl: '.seealso__swiper__prev',
    },
    breakpoints: {
        768: {
            spaceBetween: 20,
        }
    }
});



function openColection() {
    $('.construkrot_page__colection__content').toggleClass('active');
}

$('.construkrot_page__colection__btn').on('click', function (event) {
    event.preventDefault();
    openColection();
});
// $(document).on('click', function (e) {
//     if (!$(e.target).closest('.construkrot_page__colection__content').length && !$(e.target).closest('.construkrot_page__colection__btn').length) {
//         $('.construkrot_page__colection__content').removeClass('active');
//     }
// });



$('body').on('click', '.number-minus, .number-plus', function () {
    var $row = $(this).closest('.number');
    var $input = $row.find('.number-text');
    var step = $row.data('step');
    var val = parseFloat($input.val());
    if ($(this).hasClass('number-minus')) {
        val -= step;
    } else {
        val += step;
    }
    $input.val(val);
    $input.change();
    return false;
});

$('body').on('change', '.number-text', function () {
    var $input = $(this);
    var $row = $input.closest('.number');
    var step = $row.data('step');
    var min = parseInt($row.data('min'));
    var max = parseInt($row.data('max'));
    var val = parseFloat($input.val());
    if (isNaN(val)) {
        val = step;
    } else if (min && val < min) {
        val = min;
    } else if (max && val > max) {
        val = max;
    }
    $input.val(val);
});



const reviews__swiper = new Swiper('.reviews__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 8,

    navigation: {
        nextEl: '.reviews__swiper__next',
        prevEl: '.reviews__swiper__prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
    }
});



const sliderThumbs = new Swiper(".slider__thumbs .swiper-container", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {

        nextEl: ".slider__next",
        prevEl: ".slider__prev"
    },
    freeMode: true,
    breakpoints: {

        0: {

        },
        768: {

        }
    }
});
const sliderImages = new Swiper(".slider__images .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".slider__next",
        prevEl: ".slider__prev"
    },
    grabCursor: true,
    thumbs: {
        swiper: sliderThumbs
    },
    breakpoints: {
        0: {

        },
        768: {

        }
    }
});
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("product_page__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("product_page__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
const product_page_mobile__swiper = new Swiper('.product_page_mobile__swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 8,
});




// Фильтр цены 
const rangevalue =
    document.querySelector(".slider-container .price-slider");
const rangeInputvalue =
    document.querySelectorAll(".range-input input");

let priceGap = 500;

const priceInputvalue =
    document.querySelectorAll(".price-input input");
for (let i = 0; i < priceInputvalue.length; i++) {
    priceInputvalue[i].addEventListener("input", e => {

        let minp = parseInt(priceInputvalue[0].value);
        let maxp = parseInt(priceInputvalue[1].value);
        let diff = maxp - minp

        if (minp < 0) {
            alert("minimum price cannot be less than 0");
            priceInputvalue[0].value = 0;
            minp = 0;
        }

        if (maxp > 10000) {
            alert("maximum price cannot be greater than 10000");
            priceInputvalue[1].value = 10000;
            maxp = 10000;
        }

        if (minp > maxp - priceGap) {
            priceInputvalue[0].value = maxp - priceGap;
            minp = maxp - priceGap;

            if (minp < 0) {
                priceInputvalue[0].value = 0;
                minp = 0;
            }
        }

        if (diff >= priceGap && maxp <= rangeInputvalue[1].max) {
            if (e.target.className === "min-input") {
                rangeInputvalue[0].value = minp;
                let value1 = rangeInputvalue[0].max;
                rangevalue.style.left = `${(minp / value1) * 100}%`;
            }
            else {
                rangeInputvalue[1].value = maxp;
                let value2 = rangeInputvalue[1].max;
                rangevalue.style.right =
                    `${100 - (maxp / value2) * 100}%`;
            }
        }
    });

    for (let i = 0; i < rangeInputvalue.length; i++) {
        rangeInputvalue[i].addEventListener("input", e => {
            let minVal =
                parseInt(rangeInputvalue[0].value);
            let maxVal =
                parseInt(rangeInputvalue[1].value);

            let diff = maxVal - minVal

            if (diff < priceGap) {

                if (e.target.className === "min-range") {
                    rangeInputvalue[0].value = maxVal - priceGap;
                }
                else {
                    rangeInputvalue[1].value = minVal + priceGap;
                }
            }
            else {

                priceInputvalue[0].value = minVal;
                priceInputvalue[1].value = maxVal;
                rangevalue.style.left =
                    `${(minVal / rangeInputvalue[0].max) * 100}%`;
                rangevalue.style.right =
                    `${100 - (maxVal / rangeInputvalue[1].max) * 100}%`;
            }
        });
    }
}