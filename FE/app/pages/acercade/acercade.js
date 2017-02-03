'use strict';

var APP = window.APP = window.APP || {};

APP.acercade = (function () {

    var bindEventsToUI = function () {
        // $('navbar a').parent().addClass('active');
        $('a[href="acercade.html').parent().addClass('active');
    };

    var init = function () {
        // uncomment the following line to access the DOM element invoking this component
        // var element = arguments[0];
        console.log('APP.acercade');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
