let itsMobile = document.querySelectorAll('.to-hide--mobile');
let itsIpad = document.querySelectorAll('.to-hide--ipad');
let itsMac = document.querySelectorAll('.to-hide--mac');

let readMore = document.querySelector('.read-more');
let readLess = document.querySelector('.read-less');

let showAll = function (element) {
    readMore.addEventListener('click', function () {
        element.classList.remove('item--hide--mobile');
        element.classList.remove('item--hide--ipad');
        element.classList.remove('item--hide--mac');
        readMore.classList.add('hidden');
        readLess.classList.remove('hidden');
    })
}

let dontShowAllMobile = function (element) {
    readLess.addEventListener('click', function () {
        element.classList.add('item--hide--mobile');
        readLess.classList.add('hidden');
        readMore.classList.remove('hidden');
    })
}

let dontShowAllIpad = function (element) {
    readLess.addEventListener('click', function () {
        element.classList.add('item--hide--ipad');
        readLess.classList.add('hidden');
        readMore.classList.remove('hidden');
    })
}

let dontShowAllMac = function (element) {
    readLess.addEventListener('click', function () {
        element.classList.add('item--hide--mac');
        readLess.classList.add('hidden');
        readMore.classList.remove('hidden');
    })
}


for (let i = 0; i < itsMobile.length; i++) {
    showAll(itsMobile[i]);
    dontShowAllMobile(itsMobile[i]);
}

for (let i = 0; i < itsIpad.length; i++) {
    showAll(itsIpad[i]);
    dontShowAllIpad(itsIpad[i]);
}

for (let i = 0; i < itsMac.length; i++) {
    showAll(itsMac[i]);
    dontShowAllMac(itsMac[i]);
}


let brands = document.querySelector('.brands');
let devices = document.querySelector('.devices');
let more = document.querySelectorAll('.more');

function showHide() {
    more.forEach((item) => {
        item.addEventListener('click', function (event) {
            if (event.target.id == 'brands') {
                brands.classList.toggle('cards--short-list');
                item.classList.toggle('more-button--rotate');
                textContentButtonToggle(item);
            }

            if (event.target.id == 'devices') {
                devices.classList.toggle('cards--short-list');
                item.classList.toggle('more-button--rotate');
                textContentButtonToggle(item);
            }

        })
    })
}

showHide();

function textContentButtonToggle(item) {
    return (item.textContent === 'Скрыть') ? (item.textContent = 'Показать все') : (item.textContent = 'Скрыть')
}



let burger = document.querySelector('.icon--the-burger');
let pageHolder = document.querySelector('.page-holder');
let sideMenu = document.querySelector('.side-menu');

burger.addEventListener('click', function () {
    pageHolder.classList.toggle('page-holder--side-menu--show');
    sideMenu.classList.toggle('side-menu--show');
})


let phone = document.querySelector('.icon--phone');
let message = document.querySelector('.icon--message');
let feedback = document.querySelectorAll('.feedback');
let feedbackCall = document.querySelector('.feedback-call');
let feedbackMessage = document.querySelector('.feedback-message');

let macPhone = document.querySelector('.icon--side-phone');
let macMessage = document.querySelector('.icon--side--message');


phone.addEventListener('click', function () {
    pageHolder.classList.add('page-holder--feedback--show');
    feedbackCall.classList.add('feedback--show');
    
    if (feedbackCall.classList.contains('feedback--show')) {
        document.addEventListener('click', function (e) {
            if (!(e.target.closest('.icon--the-burger') || (e.target.closest('.icon--phone') ||(e.target.closest('.feedback-phone') )))) {
                pageHolder.classList.remove('page-holder--feedback--show');
                feedbackCall.classList.remove('feedback--show');
                console.log('phone')
            }
        })
    }
})

macPhone.addEventListener('click', function () {
    pageHolder.classList.add('page-holder--feedback--show');
    feedbackCall.classList.add('feedback--show');
    
    if (feedbackCall.classList.contains('feedback--show')) {
        document.addEventListener('click', function (e) {
            if (!(e.target.closest('.icon--the-burger') || (e.target.closest('.icon--side--phone') ||(e.target.closest('.feedback-phone') )))) {
                pageHolder.classList.remove('page-holder--feedback--show');
                feedbackCall.classList.remove('feedback--show');
                console.log('phone')
            }
        })
    }
})

// document.addEventListener('click', function (e) {
//         if (!(e.target.closest('.icon--the-burger') || (e.target.closest('.icon--phone') ||(e.target.closest('.feedback-call') )))) {
//             console.log('phone')
//             pageHolder.classList.remove('page-holder--feedback--show');
//             feedbackCall.classList.remove('feedback--show');
//         }
// })


message.addEventListener('click', function () {
    pageHolder.classList.add('page-holder--feedback--show');
    feedbackMessage.classList.add('feedback--show');

    if (feedbackMessage.classList.contains('feedback--show')) {
        document.addEventListener('click', function (e) {
            if (!(e.target.closest('.icon--the-burger') || (e.target.closest('.icon--message') ||(e.target.closest('.feedback-message') )))) {
                pageHolder.classList.remove('page-holder--feedback--show');
                feedbackMessage.classList.remove('feedback--show');
                console.log('message')
            }
        })
    }
})

macMessage.addEventListener('click', function () {
    pageHolder.classList.add('page-holder--feedback--show');
    feedbackMessage.classList.add('feedback--show');

    if (feedbackMessage.classList.contains('feedback--show')) {
        document.addEventListener('click', function (e) {
            if (!(e.target.closest('.icon--the-burger') || (e.target.closest('.icon--side--message') ||(e.target.closest('.feedback-message') )))) {
                pageHolder.classList.remove('page-holder--feedback--show');
                feedbackMessage.classList.remove('feedback--show');
                console.log('message')
            }
        })
    }
})



// document.addEventListener('click', function (e) {
//     if (!(e.target.closest('.icon--the-burger') || (e.target.closest('.icon--message') ||(e.target.closest('.feedback-message') )))) {
//         console.log('trulala')
//         pageHolder.classList.remove('page-holder--feedback--show');
//         feedbackMessage.classList.remove('feedback--show');
//     }
// })







//  --СВАЙПЕР--

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 16,
    breakpoints: {
        768: {
            enabled: false,
            // width: inherit, 
            spaceBetween: 24,
        },
    },
    width: 240,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    slideToClickedSlide: true
});
