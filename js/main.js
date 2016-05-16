$(document).ready(function () {

  // Image cover plugin in
  $('.js-image-fill').imgLiquid()

  // Smooth scroll links
  $('.js-smooth-scroll').click(function (e) {
    e.preventDefault()
    var target = $($(this).attr('href'))
    if (target.length) {
      var scrollTo = target.offset().top
      $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800)
      $('#menu-wrap').removeClass('active')
    }
  })

  // Mobile menu toggle
  $('.js-toggle-menu').click(function (e) {
    e.preventDefault()
    target = $($(this).attr('href'))
    if (!target.length) return
    if (target.hasClass('active')) {
      target.removeClass('active')
    } else {
      target.addClass('active')
    }
  })

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

  // Overlay control
  $('body').on('click', '.js-show-overlay', function (e) {
    e.preventDefault()
    var t = $(this)
    var target = $(t.attr('href'))
    if (!target.length) return false
    openOverlay(target)
  })

  $('.js-close-overlay').click(function (e) {
    e.preventDefault()
    closeOverlay()
  })

  $('.details-overlay-inner').click(function (e) {
    e.stopPropagation()
  })

  var overlay = $('.js-overlay')

  function openOverlay (elementToShow) {
    overlay.find('.active').removeClass('active')
    elementToShow.addClass('active')
    overlay.addClass('active')
  }

  function closeOverlay () {
    overlay.find('.active').removeClass('active')
    overlay.removeClass('active')
  }

  // Init timetable
  var timetable = new Timetable()
  timetable.setScope(9, 17)
  timetable.addLocations(['Software Development (stream 1)', 'Software Development (stream 2)', 'SQL/Business Intelligence', 'Windows, Azure & SharePoint'])
  // Keynote:
  timetable.addEvent('Keynote: Gabe Ripjma', 'Software Development (stream 1)', new Date(2016,6,18,9,30), new Date(2016,6,18,9,59), '#keynote', 'keynote all-streams js-show-overlay')
  // 10:00 - 10:55 Session:
  timetable.addEvent('TBC', 'Software Development (stream 1)', new Date(2016,6,18,10,00), new Date(2016,6,18,10,55), '#tbc', 'ss1-talk js-show-overlay')
  timetable.addEvent('Kim Carter', 'Software Development (stream 2)', new Date(2016,6,18,10,00), new Date(2016,6,18,10,55), '#kim-carter', 'ss2-talk js-show-overlay')
  timetable.addEvent('ColumnStore for BI Developers', 'SQL/Business Intelligence', new Date(2016,6,18,10,00), new Date(2016,6,18,10,55), '#columnstore-for-bi-developers', 'sql-talk js-show-overlay')
  timetable.addEvent('Windows 10 Device Management', 'Windows, Azure & SharePoint', new Date(2016,6,18,10,00), new Date(2016,6,18,10,55), '#windows-10-device-management', 'windows-talk js-show-overlay')
  // 11:00 - 11:55 Session:
  timetable.addEvent('Code Gardening - The Art of Continuous Refactoring', 'Software Development (stream 1)', new Date(2016,6,18,11,00), new Date(2016,6,18,11,55), '#code-gardening', 'ss1-talk js-show-overlay')
  timetable.addEvent('Vishesh Oberoi', 'Software Development (stream 2)', new Date(2016,6,18,11,00), new Date(2016,6,18,11,55), '#vishesh-oberoi', 'ss2-talk js-show-overlay')
  timetable.addEvent('Power XXX for DEV Heads', 'SQL/Business Intelligence', new Date(2016,6,18,11,00), new Date(2016,6,18,11,55), '#power-xxx', 'sql-talk js-show-overlay')
  timetable.addEvent('What\'s new in Windows Server 2016', 'Windows, Azure & SharePoint', new Date(2016,6,18,11,00), new Date(2016,6,18,11,55), '#windows-server-2016', 'windows-talk js-show-overlay')
  // Lunch Session:
  timetable.addEvent('Lunch Break', 'Software Development (stream 1)', new Date(2016,6,18,12,00), new Date(2016,6,18,12,59), '#', 'lunch all-streams')
  // 1:00 - 1:55 Session:
  timetable.addEvent('From Inception to Production: A Continuous Delivery Story', 'Software Development (stream 1)', new Date(2016,6,18,13,00), new Date(2016,6,18,13,55), '#continuous-delivery', 'ss1-talk js-show-overlay')
  timetable.addEvent('The Accidental Start-up', 'Software Development (stream 2)', new Date(2016,6,18,13,00), new Date(2016,6,18,13,55), '#accidental-startup', 'ss2-talk js-show-overlay')
  timetable.addEvent('Azure Infrastructure', 'Windows, Azure & SharePoint', new Date(2016,6,18,13,00), new Date(2016,6,18,13,55), '#azure-Infrastructure', 'windows-talk js-show-overlay')
  // 2:00 - 2:55 Session:
  timetable.addEvent('Building a large application in Azure using Angular.js - what have we learnt?', 'Software Development (stream 1)', new Date(2016,6,18,14,00), new Date(2016,6,18,14,55), '#azure-and-angular', 'ss1-talk js-show-overlay')
  timetable.addEvent('Tanya Gray & Michael Trengrove', 'Software Development (stream 2)', new Date(2016,6,18,14,00), new Date(2016,6,18,14,55), '#tanya-gray-michael-trengrove', 'ss2-talk js-show-overlay')
  timetable.addEvent('What Database Developers need to know about Continuous Delivery', 'SQL/Business Intelligence', new Date(2016,6,18,14,00), new Date(2016,6,18,14,55), '#databases-and-continuous-delivery', 'sql-talk js-show-overlay')
  // Coffee Break:
  timetable.addEvent('Coffee Break', 'Software Development (stream 1)', new Date(2016,6,18,15,00), new Date(2016,6,18,15,29), '#', 'coffee all-streams')
  // 3:30 - 4:25 Session:
  timetable.addEvent('Primitive Obsession: You Can Beat It', 'Software Development (stream 1)', new Date(2016,6,18,15,30), new Date(2016,6,18,16,25), '#primitive-obsession', 'ss1-talk js-show-overlay')
  timetable.addEvent('Fred Zhang', 'Software Development (stream 2)', new Date(2016,6,18,15,30), new Date(2016,6,18,16,25), '#fred-zhang', 'ss2-talk js-show-overlay')
  timetable.addEvent('SQL Server 2016 reinvigorates in-house BI capability', 'SQL/Business Intelligence', new Date(2016,6,18,15,30), new Date(2016,6,18,16,25), '#sql-server-2016-bi-capability', 'sql-talk js-show-overlay')
  // Wrap up:
  timetable.addEvent('Wrap up, prize draw and final word', 'Software Development (stream 1)', new Date(2016,6,18,16,30), new Date(2016,6,18,16,45), '#', 'wrap-up all-streams')

  var renderer = new Timetable.Renderer(timetable)
  renderer.draw('.timetable')
})
