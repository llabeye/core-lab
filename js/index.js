$(document).ready(function(){
    $('.ipad').hover(function(){
        $('.title').text("Collage");
    }, function() {
        $('.title').text(" ");
    });
    $('.ipad').click(function(){
        window.open('https://llabeye.github.io/core-lab2/Projects/collage.html');
        return false;
    })
    $('.switch').hover(function(){
        $('.title').text("Moodboard");
    }, function() {
        $('.title').text(" ");
    });
    $('.switch').click(function(){
        window.open('https://llabeye.github.io/rooftopblues/');
        return false;
    })
    $('.book').hover(function(){
        $('.title').text("POV");
    }, function() {
        $('.title').text(" ");
    });
    $('.book').click(function(){
        window.open('https://llabeye.github.io/core-lab2/Projects/flowmytears.html');
        return false;
    })
    $('.mask').hover(function(){
        $('.title').text("Bluestocking");
    }, function() {
        $('.title').text(" ");
    });
    $('.mask').click(function(){
        window.open('https://llabeye.github.io/Bluestockings/');
        return false;
    })
    $('.radio').hover(function(){
        $('.title').text("NYPL");
    }, function() {
        $('.title').text(" ");
    });
    $('.radio').click(function(){
        window.open('https://llabeye.github.io/NYPL/');
        return false;
    })
    $('.camera').hover(function(){
        $('.title').text("Instagram");
    }, function() {
        $('.title').text(" ");
    });
    $('.camera').click(function(){
        window.open('https://www.instagram.com/hazu_am/');
        return false;
    })
    $('.keyboard').hover(function(){
        $('.title').text("Email me");
    }, function() {
        $('.title').text(" ");
    });
    $('.keyboard').click(function(){
        window.open('mailto:allodola@hotmail.co.uk?Subject=Hey');
        return false;
    })
    $('.balm').hover(function(){
        $('.title').text("About me");
    }, function() {
        $('.title').text(" ");
    });
    $('.balm').click(function(){
        $('.wo').toggleClass("show");
        $('.intro').toggleClass("show");
    })
    $('.wo').draggable({
        containment:".wrapper"
    });
    $('.mobile').click(function(){
        window.open('https://www.instagram.com/hazu_am/');
        return false;
    })

})