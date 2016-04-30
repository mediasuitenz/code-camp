$(document).ready(function () {

  // Set banner height to be 100% of viewport height
  function setBannerHeight () {
    $('.banner').css('height', ($(window).height() - 50) + 'px')
  }
  setBannerHeight()

  // Add parallax effect to top banner on scroll:
  var banner = $('.banner-image')
  $(window).on('scroll', function () {
    parallaxScroll(banner)
  })

  function parallaxScroll (elementToParallax) {
    elementToParallax.css('transform', 'translateY(' + (0 + ($(window).scrollTop() * .2)) + 'px)')
  }

  // Reset banner height after window resize:
  $(window).resize(function () {
    setBannerHeight()
  })

  // Type title text effect:
  $('.js-type-text').each(function () {
    var t = $(this)
    var textToType = t.data('text')
    var i = 1;
    if (textToType.length) {
      var interval = setInterval(function (){
        addLetter(t, textToType, i)
        if (i === textToType.length) clearInterval(interval)
        i++
      }, 100)
    }
  })

  function addLetter (textElement, phrase, curLetterCount) {
    textElement.html(phrase.substring(0, curLetterCount))
  }
})
