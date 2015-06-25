var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'CHR.js',
    subtitle: 'Master Project 2015',
    //eventInfo: {
    //  title: 'Google I/O',
    //  date: '6/x/2013'
    //},
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/uulm.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    theme: ['default', 'uulm-changes'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Falco Nogatz',
    company: 'University of Ulm',
    twitter: '@ulmerleben',
    www: 'http://www.nogatz.net',
    github: 'http://github.com/fnogatz'
  }]
};

