'use strict';

var APP = window.APP = window.APP || {};

APP.pasatiempos = (function () {

    var bindEventsToUI = function () {
        $('a[href="pasatiempos.html').parent().addClass('active');
    };

    var init = function () {
        // uncomment the following line to access the DOM element invoking this component
        // var element = arguments[0];
        console.log('APP.pasatiempos');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
