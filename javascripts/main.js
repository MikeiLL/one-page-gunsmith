'use strict';

var $ = require('jquery');
var fullpage = require('fullpage.js');

var executeAnimationOfSection1 = require('./animations/section-1');
var executeAnimationOfSection2 = require('./animations/section-2');
var executeAnimationOfSection3 = require('./animations/section-3');
var executeAnimationOfSection4 = require('./animations/section-4');

$(document).ready(function () {  
    // disable velocity mobileHA because it overrides the transform values we defined in stylesheets.
    $.Velocity.defaults.mobileHA = false;
    
    $('#fullpage').fullpage({
        menu: '#menu',
        paddingTop: $('.header').outerHeight(),     // paddingTop should be the same as the header's height.
        afterLoad: function (anchorLink, index) { 
            hideAnimatedItems();                   // reset all animated-items to their default styles.
            switch (index) {
                case 1: 
                    $('#btn-next').show();
                    executeAnimationOfSection1();
                    console.log('click 1');
                    break;
                case 2:
                    $('#btn-next').show();
                    executeAnimationOfSection2();
                    console.log('click 2');
                    break;
                case 3:
                    $('#btn-next').show();          
                    executeAnimationOfSection3();
                    console.log('click 3');
                    break;
                case 4:
                    $('#btn-next').hide();          // hide btn-next when reaching the last section.
                    executeAnimationOfSection4();
                    console.log('click 4');
                    break;    

            }
        }
    });
    
    // move to next section when btn-next is clicked.
    $('#btn-next').on('click', function () {
        $.fn.fullpage.moveSectionDown();
    });

});

function hideAnimatedItems() {
    $('.animated-item').css({
        opacity: 0
    });
}
