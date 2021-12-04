window.onload = function() {
    setTimeout(() => {
        let loader = document.getElementById('loader');
        loader.style.visibility = 'hidden';
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    }, 0);
}

let gooIndex = document.getElementById('goo-index');
let hoverEnter = index => {
    gooIndex.style.top = 60 * index + 'px';

    let anchorClass = document.getElementsByClassName('anchor_screen');
    for (let i = 0; i < anchorClass.length; i++) {
        anchorClass[i].className = "anchor_screen";
    }
    let nowVisible = document.getElementById('screen_' + index);
    nowVisible.click();
    anchorClass[index].classList.add('active');
}

var words = ['Coding.', 'Software Development.', 'Problem Solving.', 'Machine Learning.'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function() {
    setInterval(function() {
        if (forwards) {
            if (offset >= words[i].length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        } else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }
        $('.word').text(part);
    }, speed);
};

$(document).ready(function() {
    wordflick();
});


(function() {
    "use strict";

    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();



(function($) {
    var sections = [];
    var id = false;
    var $navbara = $('#scrollEffect a');

    $navbara.click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 0
        }, 80);
        hash($(this).attr('href'));
    });



    $navbara.each(function() {
        if ($($(this).attr('href')).length != 0) {
            sections.push($($(this).attr('href')));
        }

    })

    $(window).scroll(function(e) {
        var scrollTop = $(this).scrollTop() + ($(window).height() / 2);
        for (var i in sections) {
            var section = sections[i];
            if (scrollTop > section.offset().top) {
                var scrolled_id = section.attr('id');
            }
        }

        if (scrollTop > section.offset().top) {
            var scrolled_id = section.attr('id');
        }
        if (scrolled_id !== id) {
            id = scrolled_id;
            for (let i = 0; i < $($navbara).length; i++) {
                let parentRemove = $($navbara)[i].parentElement;
                parentRemove.classList.remove('active');
            }
            let gooIndex = document.getElementById('goo-index');
            let parentSpan = $('#scrollEffect a[href="#' + id + '"]')['0'].parentElement;
            let indexId = $('#scrollEffect a[href="#' + id + '"]')[0].id;
            gooIndex.style.top = 60 * indexId[indexId.length - 1] + 'px';
            parentSpan.classList.add('active');
            parentSpan.click();

        }
    })
})(jQuery);

hash = function(h) {
    if (history.pushState) {
        history.pushState(null, null, h);
    } else {
        location.hash = h;
    }
}


const certFullScreem = document.getElementsByClassName('fullscreen');
const certImage = document.getElementsByClassName('cert-image');
const fullscreenImage = document.getElementById('fullscreen-image');
const fullImage = document.getElementById('fullImage');
const closeButton = document.getElementById('close-button');


for (let i = 0; i < certFullScreem.length; i++) {
    certFullScreem[i].onclick = function(e) {
        fullscreenImage.style.display = 'flex';

        setTimeout(function() {
            fullscreenImage.style.visibility = 'visible';
            fullscreenImage.style.opacity = '1';
            console.log(certImage[i]);
            console.log(fullscreenImage.children);
            console.log(fullscreenImage.innerHTML);
            fullImage.src = certImage[i].src;
        }, 200);
    }
}


closeButton.onclick = function() {
    fullscreenImage.style.visibility = 'hidden';
    fullscreenImage.style.opacity = '0';
    setTimeout(function() {
        fullscreenImage.style.display = 'none';
    }, 400);
}