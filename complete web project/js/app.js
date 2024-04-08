
// ****************************owl carousel script ******************
$(document).ready(function(){

    
    var owl = $('#home-slider');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:0,
        center: false,
        autoplay:true,
        autoplayTimeout:10000,
        animateOut: 'fadeOut',
        dots : false,
        padding: 50,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[10000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })






    
    // $('#slider-parent').owlCarousel({
    //     loop:true,
    //     // margin:10,
    //     nav:true,
    //     items : 1,
    //     smartspeed : 1000,
    //     dots : false,
    //     navText : ["PREV", "NEXT"],
    //     responsive:{
    //         0:{
    //             nav: false// items:1
    //         },
    //         768:{
    //             nav: true // items:3
    //         }
          
    //     }
    // });



    //project, portfolio/work slider

    $('#project-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        smartspeed : 1000,
        dots : false,
        navText : ["PREV", "NEXT"],
        responsive:{
            0:{
                items : 1,
                nav: false,
            },
            768:{
                items : 2,
            },
            1140:{
                items : 2,
                center: true,
            }
        }
    });



    //reviews slider
    // $('#review-slider').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:false,
    //     dots: true,
    
    // })



    var owl = $('#review-slider');
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[5000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
});

















// ****************************about page ******************
// let number = document.querySelector(".number")
// let counter = 0;
// setInterval(()=>{
//     if (counter == 65){
//         clearInterval();
//     }else{
//         counter += 1;
//         number.innerHTML = counter + "%"
//     }
   
// }, 20);


