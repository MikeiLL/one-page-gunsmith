var $ = window.jQuery = window.$ = require('jquery');
var velocity = require('velocity-animate');



module.exports = function () {
    $('.section-2 .gunsmith-header')
        .velocity({
            left: '40%',
            opacity: 0
        }, 0)
        .delay(100)
        .velocity({
            left: '0%',
            opacity: 1
        }, 600, 'easeOutCubic');
    $('.section-2 .section-2-tagline')
    .velocity({
        right: '40%',
        opacity: 0
    }, 0)
    .delay(100)
    .velocity({
        right: '0%',
        opacity: 1
    }, 600, 'easeOutCubic');
}; 