/*
	Story by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $('body'),
    $wrapper = $('#wrapper');

  // Breakpoints.
  breakpoints({
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: ['361px', '480px'],
    xxsmall: [null, '360px'],
  });

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Browser fixes.

  // IE: Flexbox min-height bug.
  if (browser.name == 'ie')
    (function () {
      var flexboxFixTimeoutId;

      $window
        .on('resize.flexbox-fix', function () {
          var $x = $('.fullscreen');

          clearTimeout(flexboxFixTimeoutId);

          flexboxFixTimeoutId = setTimeout(function () {
            if ($x.prop('scrollHeight') > $window.height())
              $x.css('height', 'auto');
            else $x.css('height', '100vh');
          }, 250);
        })
        .triggerHandler('resize.flexbox-fix');
    })();

  // Object fit workaround.
  if (!browser.canUse('object-fit'))
    (function () {
      $('.banner .image, .spotlight .image').each(function () {
        var $this = $(this),
          $img = $this.children('img'),
          positionClass = $this
            .parent()
            .attr('class')
            .match(/image-position-([a-z]+)/);

        // Set image.
        $this
          .css('background-image', 'url("' + $img.attr('src') + '")')
          .css('background-repeat', 'no-repeat')
          .css('background-size', 'cover');

        // Set position.
        switch (positionClass.length > 1 ? positionClass[1] : '') {
          case 'left':
            $this.css('background-position', 'left');
            break;

          case 'right':
            $this.css('background-position', 'right');
            break;

          default:
          case 'center':
            $this.css('background-position', 'center');
            break;
        }

        // Hide original.
        $img.css('opacity', '0');
      });
    })();

  // Smooth scroll.
  $('.smooth-scroll').scrolly();
  $('.smooth-scroll-middle').scrolly({ anchor: 'middle' });

  // Wrapper.
  $wrapper.children().scrollex({
    top: '30vh',
    bottom: '30vh',
    initialize: function () {
      $(this).addClass('is-inactive');
    },
    terminate: function () {
      $(this).removeClass('is-inactive');
    },
    enter: function () {
      $(this).removeClass('is-inactive');
    },
    leave: function () {
      var $this = $(this);

      if ($this.hasClass('onscroll-bidirectional'))
        $this.addClass('is-inactive');
    },
  });

  // Items.
  $('.items')
    .scrollex({
      top: '30vh',
      bottom: '30vh',
      delay: 50,
      initialize: function () {
        $(this).addClass('is-inactive');
      },
      terminate: function () {
        $(this).removeClass('is-inactive');
      },
      enter: function () {
        $(this).removeClass('is-inactive');
      },
      leave: function () {
        var $this = $(this);

        if ($this.hasClass('onscroll-bidirectional'))
          $this.addClass('is-inactive');
      },
    })
    .children()
    .wrapInner('<div class="inner"></div>');
})(jQuery);
