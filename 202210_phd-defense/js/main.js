
var api

document.addEventListener("DOMContentLoaded", function(event) {
  api = impress();
  api.init();

  // document.getElementById("impress-help").style.display = "none";
});

var rootElement = document.getElementById( "impress" );
rootElement.addEventListener( "impress:stepleave", function(event) {
  var currentStep = event.target;
  var nextStep = event.detail.next;

  if (currentStep.id === 'Programming-Languages' && nextStep.id === 'GPL-vs-DSL') {
    currentStep.querySelector('.hexagons').classList.add('splitted');
  }
  if (currentStep.id === 'GPL-vs-DSL' && nextStep.id === 'Programming-Languages') {
    nextStep.querySelector('.hexagons').classList.remove('splitted');
  }
});

// Wait for impress.js to be initialized
document.addEventListener( "impress:init", function( event ) {
  api = event.detail.api;
  util = api.lib.util;
  root = event.target;
  var gc = api.lib.gc;

  gc.addEventListener( document, "keydown", function( event ) {
    // Accept o is sent by presentation remote controllers
    if ( event.keyCode === 79) {
        event.preventDefault();
        api.goto('Overview')
    }
  }, false );

  gc.addEventListener( document, "keyup", function( event ) {
      // Accept o
      if ( event.keyCode === 79) {
          event.preventDefault();
      }
  }, false );

  var timeout = 3;
  gc.addEventListener( document.getElementById('impress-navigation-ui-select'), "focus", function () {
      if ( timeoutHandle ) {
          window.clearTimeout( timeoutHandle );
      }
      document.body.classList.remove( "impress-mouse-timeout" );
  });
  gc.addEventListener( document.getElementById('impress-navigation-ui-select'), "blur", function () {
      if ( timeoutHandle ) {
        window.clearTimeout( timeoutHandle );
      }
      timeoutHandle = window.setTimeout( function () {
        document.body.classList.add( "impress-mouse-timeout" );
      }, timeout * 1000 );
  });

}, false );
