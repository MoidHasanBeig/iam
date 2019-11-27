$(document).ready(() => {

  function sceneParallax() {
    $(document).scroll(() => {
      let scrollPos = window.scrollY;
      $(".grass-front").css('transform', 'translateX(-50%) rotate(' + scrollPos*0.05 + 'deg)');
      // $(".after-scene").css('margin-top', '-' + scrollPos + 'px');
      // $(".grass-back").css('bottom', scrollPos * 0.95 + 'px');
      // $(".hut").css('margin-bottom', scrollPos * 0.98 + 'px');
      // $(".windmill-tower").css('margin-bottom', scrollPos * 0.8 + 'px');
      // $(".hills-front").css('margin-bottom', scrollPos * 0.7 + 'px');
      // $(".hills-middle").css('margin-bottom', scrollPos * 0.5 + 'px');
      // $(".hills-back").css('margin-bottom', scrollPos * 0.3 + 'px');
      $(".sun").css('margin-top', -scrollPos * 0.2 + 'px');
      $(".cloud1").css('margin-top', -scrollPos * 0.25 + 'px');
      $(".cloud2").css('margin-top', -scrollPos * 0.23 + 'px');
      $(".cloud3").css('margin-top', -scrollPos * 0.26 + 'px');
      $(".greet").css('margin-top', -scrollPos * 0.3 + 'px');
    });
  }
  sceneParallax();

  function navbarVisibility() {
    let scrollLastPos = 0;
      $(document).scroll( () => {
        let scrollPos = window.scrollY;
        if (scrollPos>scrollLastPos) {
          $(".navbar").stop(true).slideUp();
          scrollLastPos = scrollPos;
        }
        else if (scrollPos<scrollLastPos) {
          $(".navbar").stop(true).slideDown();
          scrollLastPos = scrollPos;
        }
          $(".navbar").css('background','rgba(255,255,255,' + scrollPos*0.002 + ')');
          if (scrollPos<600) {
            $(".navbar").css('box-shadow','0 0');
          }
          else {
            $(".navbar").css('box-shadow','0 1px 5px 5px rgba(0,0,0,0.05)');
          }
      });
  }
  navbarVisibility();

});
