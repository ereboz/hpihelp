/**
 * Created by javaBoxer on 5/16/2017.
 */

// quick load header and footer till we implement a package for fed like
// webpack, gulp/nunJucks, grunt/require.js, etc.
$(".M04-Header").load("header.html");
$(".M05-Footer").load("footer.html");

$(document).ready(function(){
    
    $(".wrapper-subnav").affix({
        offset: {
            top: $('.bg-banner').height()
        }
    });
    
    $("#topnavbar").height($(".wrapper-subnav").height() + $(".bg-banner").height());
    
});



// $(function(){
//     $(".M04-Header").load("../../modules/M04-Header/partial.html");
//     $(".M05-Footer").load("../../modules/M05-Footer/partial.html");
//
// });

/**
 * Created by javaBoxer on 5/5/2017.
 */
// *************** BILL TO/SHIP TO ADDRESS FORM (from checkout page) ***************

// NEED TO MAKE THE ADD NEW SHIPPING, ADD NEW BILLING ADDRESS .container CLASS 50% WIDTH TO REDUCE THE SIZE AND CENTER IT ON SCREEN
// FOR DESKTOP > 800PX.
// IT DOES NOT HAVE A UNIQUE CLASS AND SETTING WIDTH ON .container AFFECTS EVERY PAGE ON THE SITE.
// READ IN THE URL AND APPLY STYLING ONLY TO THE ADDRESS PAGE for SHIPPING/BILLING(address/detail)
// APPLIES TO:
// http://a2zhardware.com/address/detail?makePrimary=True&addressType=Shipping&returnurl=%2Fcheckout
// http://a2zhardware.com/address/detail?makePrimary=True&addressType=Billing&returnurl=%2Fcheckout

$(window).load(function() {
    var loc = window.location.href.toLowerCase();
    var viewportWidth = $(window).width();
    var pageWrapper = "";
    
    if (loc.indexOf('/address/detail') > -1) {
        pageWrapper = $(".create-account-page");
        $(pageWrapper).addClass("addressMobileWidth");
        
        if (viewportWidth > 800) {
            $(pageWrapper).removeClass("addressMobileWidth").addClass("addressDesktopWidth");
        }
    
        $(window).resize(function () {
            var viewportWidth = $(window).width();
            if (viewportWidth < 800) {
                $(pageWrapper).removeClass("addressDesktopWidth").addClass("addressMobileWidth");
            }
            if (viewportWidth > 800) {
                $(pageWrapper).removeClass("addressMobileWidth").addClass("addressDesktopWidth");
            }
        });
    }
    
    // *************** CONTACT US PAGE ***************
    // Center the page with a left margin class when in Desktop view > 800px
    
    if (loc.indexOf('/contactus') > -1) {
        pageWrapper = $(".contact-us-page");
        $(pageWrapper).addClass("contactMobileWidth");
        
        if (viewportWidth > 800) {
            $(pageWrapper).removeClass("contactMobileWidth").addClass("contactDesktopWidth");
        }
        
        $(window).resize(function () {
            var viewportWidth = $(window).width();
            if (viewportWidth < 800) {
                $(pageWrapper).removeClass("contactDesktopWidth").addClass("contactMobileWidth");
            }
            if (viewportWidth > 800) {
                $(pageWrapper).removeClass("contactMobileWidth").addClass("contactDesktopWidth");
            }
        });
        
        // Replace all occurrences of (required) to *
    
        $('.form-label-suffix-required').each(function() {
            var txt = $(this).html();
            txt = txt.replace('(required)','*');
            $(this).html(txt);
        });
        
    }
    
});

