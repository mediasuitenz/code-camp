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
})
