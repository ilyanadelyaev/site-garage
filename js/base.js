/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $('.navbar-header').height() + 2
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: $('.navbar-header').height()
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Yandex Maps API
$(document).ready(function() {
    ymaps.ready(init);
    
    var myMap, myPlacemark;

    function init(){ 
        myMap = new ymaps.Map("map", {
            center: [59.904154, 30.354481],
            zoom: 15,
            controls: ['smallMapDefaultSet']
        });

        myMap.behaviors.disable('scrollZoom');

        myPlacemark = new ymaps.Placemark([59.904154, 30.354481], {
            hintContent: 'СТО Волковская',
            balloonContentHeader: '<i class="fa fa-wrench"></i> СТО Волковская',
            balloonContentBody: 'СПб, ул. Камчатская, д. 5 <br> <b>8 (812) 600-40-33</b>',
            balloonContentFooter: 'с 09:00 до 21:00'
        });
        myMap.geoObjects.add(myPlacemark);

    }
});