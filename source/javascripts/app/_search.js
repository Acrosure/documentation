//= require ../lib/_jquery
//= require ../lib/_jquery.highlight

;(function() {
  'use strict'

  var content, searchResults, searchClear
  var highlightOpts = { element: 'span', className: 'search-highlight' }
  var searchDelay = 300
  var timeoutHandle = 0
  const dicts = []

  $(populate)
  $(bind)

  function populate() {
    $('h1, h2').each(function() {
      var title = $(this)
      var body = title.nextUntil('h1, h2')
      const obj = {
        id: title.prop('id'),
        title: title.text(),
        body: body.text()
      }
      dicts.push(obj)
    })
  }

  function bind() {
    content = $('.content')
    searchResults = $('.search-results')
    searchClear = $('#search-clear')
    searchClear.hide()
    $('#input-search').on('keyup', function(e) {
      var wait = (function() {
        return function(executingFunction, waitTime) {
          clearTimeout(timeoutHandle)
          timeoutHandle = setTimeout(executingFunction, waitTime)
        }
      })()
      wait(function() {
        search(e)
      }, searchDelay)
    })
    searchClear.on('click', function(e) {
      search({
        ...e,
        keyCode: 27
      })
    })
  }

  function search(event) {
    var searchInput = $('#input-search')[0]
    unhighlight()
    searchResults.addClass('visible')
    // ESC clears the field
    if (event.keyCode === 27) searchInput.value = ''
    if (searchInput.value && searchInput.value.length > 0) {
      searchClear.show()
      var results = dicts.filter(function(dict) {
        const val = searchInput.value
        return dict.title.includes(val) || dict.body.includes(val)
      })
      if (results.length) {
        searchResults.empty()
        $.each(results, function(index, result) {
          var elem = document.getElementById(result.id)
          searchResults.append(
            "<li><a href='#" + result.id + "'>" + $(elem).text() + '</a></li>'
          )
        })
        highlight.call(searchInput)
      } else {
        searchResults.html('<li></li>')
        $('.search-results li').text(
          'No Results Found for "' + searchInput.value + '"'
        )
      }
    } else {
      unhighlight()
      searchClear.hide()
      searchResults.removeClass('visible')
    }
  }

  function highlight() {
    if (this.value) content.highlight(this.value, highlightOpts)
  }

  function unhighlight() {
    content.unhighlight(highlightOpts)
  }
})()
