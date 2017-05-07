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
    //e.preventDefault()
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
  var body = $('body')

  function openOverlay (elementToShow) {
    body.addClass('hide-overflow')
    overlay.find('.active').removeClass('active')
    elementToShow.addClass('active')
    overlay.addClass('active')
  }

  function closeOverlay () {
    body.removeClass('hide-overflow')
    overlay.find('.active').removeClass('active')
    overlay.removeClass('active')
    // Reset tabs:
    $('.js-bio-content').removeClass('js-active-tab')
    $('.js-talk-content').addClass('js-active-tab')
    $('.js-tab-btn.js-active').removeClass('js-active')
    $('.js-tabs').each(function () {
      $(this).children().eq(0).addClass('js-active')
    })
  }

  // Tabs within speaker modal
  $('.js-tab-btn').click(function (e) {
    e.preventDefault()
    var t = $(this)
    $('.js-tab-btn.js-active').removeClass('js-active')
    t.addClass('js-active')
    if (t.hasClass('js-show-bio')) {
      $('.js-talk-content').removeClass('js-active-tab')
      $('.js-bio-content').addClass('js-active-tab')
    } else {
      $('.js-bio-content').removeClass('js-active-tab')
      $('.js-talk-content').addClass('js-active-tab')
    }
  })

  // Init timetable
  var timetable = new Timetable()
  timetable.setScope(9, 17)
  timetable.addLocations(['Software Development (stream 1)', 'Software Development (stream 2)', 'SQL/Business Intelligence', 'Windows, Azure & SharePoint'])
  // Keynote:
  timetable.addEvent('Keynote', 'Software Development (stream 1)', new Date(2017,5,13,9,30), new Date(2017,5,13,9,59), '#', 'keynote all-streams js-show-overlay')
  // 10:00 - 10:55 Session:
  timetable.addEvent('Coding a Conversation: MS Bot Framework and Cognitive Services', 'Software Development (stream 1)', new Date(2017,5,13,10,00), new Date(2017,5,13,10,55), '#vishesh-oberoi', 'ss1-talk js-show-overlay')
  timetable.addEvent('Mobile Metadata And You', 'Software Development (stream 2)', new Date(2017,5,13,10,00), new Date(2017,5,13,10,55), '#alix-klingenberg', 'ss2-talk js-show-overlay')
  timetable.addEvent('Asynchronous messaging with SQL Server Service Broker', 'SQL/Business Intelligence', new Date(2017,5,13,10,00), new Date(2017,5,13,10,55), '#martin-catherall', 'sql-talk js-show-overlay')
  timetable.addEvent('Regan Murphy', 'Windows, Azure & SharePoint', new Date(2017,5,13,10,00), new Date(2017,5,13,10,55), '#regan-murphy', 'windows-talk js-show-overlay')
  // 11:00 - 11:55 Session:
  timetable.addEvent('Things Senior Developers Know', 'Software Development (stream 1)', new Date(2017,5,13,11,00), new Date(2017,5,13,11,55), '#bevan-arps', 'ss1-talk js-show-overlay')
  timetable.addEvent('Hacking and citizen science - from the paddock to PowerBI for WTF', 'Software Development (stream 2)', new Date(2017,5,13,11,00), new Date(2017,5,13,11,55), '#bryn-lewis', 'ss2-talk js-show-overlay')
  timetable.addEvent('Split, Merge and Eliminate - An Introduction to Partitioning', 'SQL/Business Intelligence', new Date(2017,5,13,11,00), new Date(2017,5,13,11,55), '#martin-cairney', 'sql-talk js-show-overlay')
  timetable.addEvent('Introduction to Power Apps and Flow', 'Windows, Azure & SharePoint', new Date(2017,5,13,11,00), new Date(2017,5,13,11,55), '#steve-knutson', 'windows-talk js-show-overlay')
  // Lunch Session:
  timetable.addEvent('Lunch Break', 'Software Development (stream 1)', new Date(2017,5,13,12,00), new Date(2017,5,13,12,59), '#', 'lunch all-streams js-show-overlay')
  // 1:00 - 1:55 Session:
  timetable.addEvent('Hit the ground running, what you need to get started with Xamarin', 'Software Development (stream 1)', new Date(2017,5,13,13,00), new Date(2017,5,13,13,55), '#mahmoud-abduo', 'ss1-talk js-show-overlay')
  timetable.addEvent('IoT and Big Data', 'Software Development (stream 2)', new Date(2017,5,13,13,00), new Date(2017,5,13,13,55), '#vishesh-and-regan', 'ss2-talk js-show-overlay')
  timetable.addEvent('Power BI for Developers', 'SQL/Business Intelligence', new Date(2017,5,13,13,00), new Date(2017,5,13,13,55), '#peter-george', 'sql-talk js-show-overlay')
  timetable.addEvent('Pihanga – The Journey – moving from On-Premises to the cloud with a cultural flavour .', 'Windows, Azure & SharePoint', new Date(2017,5,13,13,00), new Date(2017,5,13,13,55), '#donald-harman', 'windows-talk js-show-overlay')
  // 2:00 - 2:30 Session:
  timetable.addEvent('Code Club', 'Software Development (stream 1)', new Date(2017,5,13,14,00), new Date(2017,5,13,14,25), '#georgia-singleton', 'ss1-talk js-show-overlay')
  timetable.addEvent('Beer, Bacon and Blue Teaming', 'Software Development (stream 2)', new Date(2017,5,13,14,00), new Date(2017,5,13,14,25), '#chris-campbell', 'ss2-talk js-show-overlay')
  timetable.addEvent('Demo of SSDT and DACPACs', 'SQL/Business Intelligence', new Date(2017,5,13,14,00), new Date(2017,5,13,14,25), '#hamish-watson', 'sql-talk js-show-overlay')
  // Coffee Break:
  timetable.addEvent('Coffee Break', 'Software Development (stream 1)', new Date(2017,5,13,14,31), new Date(2017,5,13,14,55), '#', 'coffee all-streams js-show-overlay')
  // 3:00 - 4:00 Session:
  timetable.addEvent('Ask the experts (panel)', 'Software Development (stream 1)', new Date(2017,5,13,15,00), new Date(2017,5,13,15,55), '#ask-the-experts', 'ss1-talk js-show-overlay')
  timetable.addEvent('How VSTS and Azure can help optimise and automate deployments', 'Software Development (stream 2)', new Date(2017,5,13,15,00), new Date(2017,5,13,15,55), '#hamish-watson', 'ss2-talk js-show-overlay')
  timetable.addEvent('Next generation data warehouse automation (Case Study)', 'SQL/Business Intelligence', new Date(2017,5,13,15,00), new Date(2017,5,13,15,55), '#simon-and-nick', 'sql-talk js-show-overlay')
  timetable.addEvent('Requirements gathering and other soft skills', 'Windows, Azure & SharePoint', new Date(2017,5,13,15,00), new Date(2017,5,13,15,55), '#dorje-mckinnon', 'windows-talk js-show-overlay')
  // Wrap up:
  timetable.addEvent('Wrap up, prize draw and final word', 'Software Development (stream 1)', new Date(2017,5,13,16,00), new Date(2017,5,13,16,15), '#', 'wrap-up all-streams js-show-overlay')

  var renderer = new Timetable.Renderer(timetable)
  renderer.draw('.timetable')

  // Open overlay on page load if anchor present:
  if (window.location.hash != undefined && $(window.location.hash).length) {
    openOverlay($(window.location.hash))
  }

  window.onhashchange = function() {
    if (window.location.hash != undefined && $(window.location.hash).length) {
      openOverlay($(window.location.hash))
    }
  }
})
