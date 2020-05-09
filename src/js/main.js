import React from "react";
import ReactDOM from "react-dom";
import "./custom-modernizr.js";
import $ from "cash-dom";
import { isMobile } from  "./helper";
import { ReactCompCheck } from "../js/components/react-comp-check";
// import "objectFitPolyfill";
// import SmoothScroll from "smooth-scroll";
// import LazyLoad from "vanilla-lazyload";

(function(){



  $(document).ready(function(){
    // renderCheckComp();
    renderReactComps();
    if(isMobile()){
    }
    // if(isMobile()){
    // }

    // intiLazyLoad();
   
  }); // end ready()


})();


function renderReactComps() {
  const domContainer = document.querySelector('#react-comp-check');

  //maybe render can add multiple components
  // No, here they call for each element render https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda
  ReactDOM.render(<ReactCompCheck text="Like me, dude!!"/>, domContainer);
}


// window.addEventListener('load', function () {
//   alert("It's loaded!")
// })

