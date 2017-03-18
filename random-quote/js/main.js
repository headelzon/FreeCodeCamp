var quote = '';
var author = '';

function inIframe() { 
	try { 
		return window.self !== window.top; 
	} 
	catch (e) { 
		return true; 
	} 
}

function popupCenter(url, title, w, h) {
 
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    if (window.focus) {
        newWindow.focus();
    }
}

function openURL(url){
	popupCenter(url, 'Share', 550, 430);
}

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    success: function(response) {
      var response = JSON.parse(response);
      quote = response.quote;
      author = response.author;
		
      if(inIframe())
      {
        $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + quote + '" ' + author));
      }
		
      $(".quote").animate({
          opacity: 0
        }, 300,
        function() {
          $(this).animate({
            opacity: 1
          }, 300);
          $('#quote').text(response.quote);
        });

      $(".author").animate({
          opacity: 0
        }, 300,
        function() {
          $(this).animate({
            opacity: 1
          }, 300);
          $('#author').html(response.author);
        });
    }
  });
}

$(document).ready(function() {
	
  getQuote();
	
  $('#new-quote').on('click', getQuote);
	
  $('#tweet').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + quote + '" ' + author));
    }
  });
});