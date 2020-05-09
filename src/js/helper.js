
  export function initLazyLoad() {
    const lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy-load--iframe",
      threshold: 700
      // ... more custom settings?
    });
  }
 
export function isMobile() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

export function isMobileFirefox(){
    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    var is_mobile = isMobile();  
    return is_firefox && is_mobile;
  }

export function avoidMobileFirefoxHeaderJump() {
    if(isMobileFirefox()) {
      var video = $("header.page-header, .video--header");
      function resizeBackground() {
        //56px -> firefox bar
        video.height($(window).height() + 60);
      }

      // $(window).on('resize', resizeBackground);
      resizeBackground();
      // $('.header.page-header, video').css('transition', 'height 9999999s');
      return true;
    } else {
      return false;
    }
  }
