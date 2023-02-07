// banner 
$('#banner').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$( ".owl-prev").html('<i class="fa-solid fa-arrow-left-long"></i>');
$( ".owl-next").html('<i class="fa-solid fa-arrow-right-long"></i>');

// fundraising
$('#fundrasing').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// testimonial
$('#testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// counter js
function numCounter(tagId,maxCount,speed){
    var initialNumber = 0;
    function counter(){
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
    }
    var counterDelay = setInterval(counter,speed);
    function totalTime(){
        clearInterval(counterDelay);
    }
    var totalPeriod = speed * (maxCount);  
    setTimeout(totalTime, totalPeriod);
}

numCounter("Donations",44,100);
numCounter("Volunteers",12,400);
numCounter("Projects",43,10);
numCounter("Missions",56,10);