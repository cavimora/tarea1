'use strict';

var APP = window.APP = window.APP || {};

APP.objetivos = (function () {

    var bindEventsToUI = function () {
        $('a[href="objetivos.html').parent().addClass('active');
    };

    var init = function () {
        // uncomment the following line to access the DOM element invoking this component
        // var element = arguments[0];
        console.log('APP.objetivos');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
