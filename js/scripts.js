$(document).ready(function(){
  $(".planet-1").click(function() {
    $('.planet-1').toggleClass('transform-active');
    $('.explore-1').toggleClass('explore-show');
    $('.explore-2, .explore-3, .explore-4, .explore-5').removeClass('explore-show');
    $('.planet-2, .planet-3, .planet-4, .planet-5').removeClass('transform-active');
  });
  $(".explore-1").click(function() {
    $('.planet-1').toggleClass('explore-planet-1')
    $('.alien-1').toggleClass('alien-grow')
    $('.return-to-orbit-1').toggleClass('return-to-orbit-show')
  })
  $(".return-to-orbit-1").click(function() {
    $('.planet-1').toggleClass('explore-planet-1')
    $('.alien-1').toggleClass('alien-grow')
    $('.alien-1').toggleClass('alien-shrink')
    $('.alien-1').toggleClass('alien-shrink')
    $('.return-to-orbit-1').toggleClass('return-to-orbit-show')
    $('.planet-1').toggleClass('transform-active');
    $('.explore-1').toggleClass('explore-show');
    $('.planet-1').addClass('on-top');
    setTimeout(function() {
      $('.planet-1').removeClass('on-top');
    }, 3000);
  })
  $(".planet-2").click(function() {
    $('.planet-2').toggleClass('transform-active');
    $('.explore-2').toggleClass('explore-show');
    $('.explore-1, .explore-3, .explore-4, .explore-5').removeClass('explore-show');
    $('.planet-1, .planet-3, .planet-4, .planet-5').removeClass('transform-active');
  });
  $(".explore-2").click(function() {
    $('.planet-2').toggleClass('explore-planet-2')
    $('.alien-2').toggleClass('alien-grow')
    $('.return-to-orbit-2').toggleClass('return-to-orbit-show')
  })
  $(".return-to-orbit-2").click(function() {
    $('.planet-2').toggleClass('explore-planet-2')
    $('.alien-2').toggleClass('alien-grow')
    $('.alien-2').toggleClass('alien-shrink')
    $('.alien-2').toggleClass('alien-shrink')
    $('.return-to-orbit-2').toggleClass('return-to-orbit-show')
    $('.planet-2').toggleClass('transform-active');
    $('.explore-2').toggleClass('explore-show');
    $('.planet-2').addClass('on-top');
    setTimeout(function() {
      $('.planet-2').removeClass('on-top');
    }, 3000);
  })
  $(".planet-3").click(function() {
    $('.planet-3').toggleClass('transform-active');
    $('.explore-3').toggleClass('explore-show');
    $('.explore-2, .explore-1, .explore-4, .explore-5').removeClass('explore-show');
    $('.planet-2, .planet-1, .planet-4, .planet-5').removeClass('transform-active');
  });
  $(".explore-3").click(function() {
    $('.planet-3').toggleClass('explore-planet-3')
    $('.alien-3').toggleClass('alien-grow')
    $('.return-to-orbit-3').toggleClass('return-to-orbit-show')
  })
  $(".return-to-orbit-3").click(function() {
    $('.planet-3').toggleClass('explore-planet-3')
    $('.alien-3').toggleClass('alien-grow')
    $('.alien-3').toggleClass('alien-shrink')
    $('.alien-3').toggleClass('alien-shrink')
    $('.return-to-orbit-3').toggleClass('return-to-orbit-show')
    $('.planet-3').toggleClass('transform-active');
    $('.explore-3').toggleClass('explore-show');
    $('.planet-3').addClass('on-top');
    setTimeout(function() {
      $('.planet-3').removeClass('on-top');
    }, 3000);
  })
  $(".planet-4").click(function() {
    $('.planet-4').toggleClass('transform-active');
    $('.explore-4').toggleClass('explore-show');
    $('.explore-2, .explore-3, .explore-1, .explore-5').removeClass('explore-show');
    $('.planet-2, .planet-3, .planet-1, .planet-5').removeClass('transform-active');
  });
  $(".explore-4").click(function() {
    $('.planet-4').toggleClass('explore-planet-4')
    $('.alien-4').toggleClass('alien-grow')
    $('.return-to-orbit-4').toggleClass('return-to-orbit-show')
  })
  $(".return-to-orbit-4").click(function() {
    $('.planet-4').toggleClass('explore-planet-4')
    $('.alien-4').toggleClass('alien-grow')
    $('.alien-4').toggleClass('alien-shrink')
    $('.alien-4').toggleClass('alien-shrink')
    $('.return-to-orbit-4').toggleClass('return-to-orbit-show')
    $('.planet-4').toggleClass('transform-active');
    $('.explore-4').toggleClass('explore-show');
    $('.planet-4').addClass('on-top');
    setTimeout(function() {
      $('.planet-4').removeClass('on-top');
    }, 3000);
  })
  $(".planet-5").click(function() {
    $('.planet-5').toggleClass('transform-active');
    $('.explore-5').toggleClass('explore-show');
    $('.explore-2, .explore-3, .explore-4, .explore-1').removeClass('explore-show');
    $('.planet-2, .planet-3, .planet-4, .planet-1').removeClass('transform-active');
  });
  $(".explore-5").click(function() {
    $('.planet-5').toggleClass('explore-planet-5')
    $('.alien-5').toggleClass('alien-grow')
    $('.return-to-orbit-5').toggleClass('return-to-orbit-show')
  })
  $(".return-to-orbit-5").click(function() {
    $('.planet-5').toggleClass('explore-planet-5')
    $('.alien-5').toggleClass('alien-grow')
    $('.alien-5').toggleClass('alien-shrink')
    $('.alien-5').toggleClass('alien-shrink')
    $('.return-to-orbit-5').toggleClass('return-to-orbit-show')
    $('.planet-5').toggleClass('transform-active');
    $('.explore-5').toggleClass('explore-show');
    $('.planet-5').addClass('on-top');
    setTimeout(function() {
      $('.planet-5').removeClass('on-top');
    }, 3000);
  })

});
