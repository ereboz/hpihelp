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


