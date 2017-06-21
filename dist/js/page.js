/**
 * Created by javaBoxer on 6/20/2017.
 */

// quick load header and footer till we implement a package for fed like
// webpack, gulp/nunJucks, grunt/require.js, etc.
$(function(){
    $(".M04-Header").load("header.html");
    $(".M05-Footer").load("footer.html");
});


// Homepage - direct the user to the website they chose in the select menu
$('#website-select').bind('change', function () { // bind change event to select
    var url = $(this).val(); // get selected value
    if (url != '') { // require a URL
        // window.location = url;               // redirect (doesn't open in new window)
        window.open(url, 'HPI Website');        // redirect opens new window
    }
    return false;
});

// ****** Un-comment this when deleted from header.html ******
// ****** this will live in the header of a template ******

// $(document).ready(function(){
//
//     $(".wrapper-subnav").affix({
//         offset: {
//             top: $('.bg-banner').height()
//         }
//     });
//
//     $("#topnavbar").height($(".wrapper-subnav").height() + $(".bg-banner").height());
//
// });


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

