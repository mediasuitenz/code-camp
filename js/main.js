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

  // Init timetable
  var timetable = new Timetable()
  timetable.setScope(9, 17)
  timetable.addLocations(['Software Development (stream 1)', 'Software Development (stream 2)', 'SQL/Business Intelligence', 'Windows, Azure & SharePoint'])
  // Keynote:
  timetable.addEvent('Keynote: Gabe Ripjma', 'Software Development (stream 1)', new Date(2016,6,18,9,30), new Date(2016,6,18,9,59), '#keynote', 'keynote all-streams')
  // 10:00 - 10:55 Session:
  timetable.addEvent('TBC', 'Software Development (stream 1)', new Date(2016,6,18,10,00), new Date(2016,6,18,10,55), '#tbc', 'ss1-talk')
  timetable.addEvent('Kim Carter', 'Software Development (stream 2)', new Date(2016,6,18,10,00), new Date(2016,6,18,10,55), '#kim-carter', 'ss2-talk')
  timetable.addEvent('ColumnStore for BI Developers', 'SQL/Business Intelligence', new Date(2016,6,18,10,00), new Date(2016,6,18,10,55), '#columnstore-for-bi-developers', 'sql-talk')
  timetable.addEvent('Windows 10 Device Management', 'Windows, Azure & SharePoint', new Date(2016,6,18,10,00), new Date(2016,6,18,10,55), '#windows-10-device-management', 'windows-talk')
  // 11:00 - 11:55 Session:
  timetable.addEvent('Code Gardening - The Art of Continuous Refactoring', 'Software Development (stream 1)', new Date(2016,6,18,11,00), new Date(2016,6,18,11,55), '#code-gardening', 'ss1-talk')
  timetable.addEvent('Vishesh Oberoi', 'Software Development (stream 2)', new Date(2016,6,18,11,00), new Date(2016,6,18,11,55), '#vishesh-oberoi', 'ss2-talk')
  timetable.addEvent('Power XXX for DEV Heads', 'SQL/Business Intelligence', new Date(2016,6,18,11,00), new Date(2016,6,18,11,55), '#power-xxx', 'sql-talk')
  timetable.addEvent('What\'s new in Windows Server 2016', 'Windows, Azure & SharePoint', new Date(2016,6,18,11,00), new Date(2016,6,18,11,55), '#windows-server-2016', 'windows-talk')
  // Lunch Session:
  timetable.addEvent('Lunch Break', 'Software Development (stream 1)', new Date(2016,6,18,12,00), new Date(2016,6,18,12,59), '#', 'lunch all-streams')
  // 1:00 - 1:55 Session:
  timetable.addEvent('From Inception to Production: A Continuous Delivery Story', 'Software Development (stream 1)', new Date(2016,6,18,13,00), new Date(2016,6,18,13,55), '#continuous-delivery', 'ss1-talk')
  timetable.addEvent('The Accidental Start-up', 'Software Development (stream 2)', new Date(2016,6,18,13,00), new Date(2016,6,18,13,55), '#accidental-startup', 'ss2-talk')
  timetable.addEvent('Azure Infrastructure', 'Windows, Azure & SharePoint', new Date(2016,6,18,13,00), new Date(2016,6,18,13,55), '#azure-Infrastructure', 'windows-talk')
  // 2:00 - 2:55 Session:
  timetable.addEvent('Building a large application in Azure using Angular.js - what have we learnt?', 'Software Development (stream 1)', new Date(2016,6,18,14,00), new Date(2016,6,18,14,55), '#azure-and-angular', 'ss1-talk')
  timetable.addEvent('Tanya Gray & Michael Trengrove', 'Software Development (stream 2)', new Date(2016,6,18,14,00), new Date(2016,6,18,14,55), '#tanya-gray-michael-trengrove', 'ss2-talk')
  timetable.addEvent('What Database Developers need to know about Continuous Delivery', 'SQL/Business Intelligence', new Date(2016,6,18,14,00), new Date(2016,6,18,14,55), '#databases-and-continuous-delivery', 'sql-talk')
  // Coffee Break:
  timetable.addEvent('Coffee Break', 'Software Development (stream 1)', new Date(2016,6,18,15,00), new Date(2016,6,18,15,29), '#', 'coffee all-streams')
  // 3:30 - 4:25 Session:
  timetable.addEvent('Primitive Obsession: You Can Beat It', 'Software Development (stream 1)', new Date(2016,6,18,15,30), new Date(2016,6,18,16,25), '#primitive-obsession', 'ss1-talk')
  timetable.addEvent('Fred Zhang', 'Software Development (stream 2)', new Date(2016,6,18,15,30), new Date(2016,6,18,16,25), '#fred-zhang', 'ss2-talk')
  timetable.addEvent('SQL Server 2016 reinvigorates in-house BI capability', 'SQL/Business Intelligence', new Date(2016,6,18,15,30), new Date(2016,6,18,16,25), '#sql-server-2016-bi-capability', 'sql-talk')
  // Wrap up:
  timetable.addEvent('Wrap up, prize draw and final word', 'Software Development (stream 1)', new Date(2016,6,18,16,30), new Date(2016,6,18,16,45), '#', 'wrap-up all-streams')

  var renderer = new Timetable.Renderer(timetable)
  renderer.draw('.timetable')
})
