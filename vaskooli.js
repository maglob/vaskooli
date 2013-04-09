testUrl = 'https://news.ycombinator.com/rss';

function populateFeed(doc) {
    var el = $("#feed-box");
    el.empty();
    el.append("<h2>"+ doc.find('channel > title').text() +"</h2>");
    a = doc.find("channel > item");
    $.each(a, function (i,e) {
	el.append("<ul><a href='"+ $(e).find("link").text() +"'>"+ $(e).find("title").text() +"</a></ul>");
    });
}

function requestFeed(url) {
    $.ajax({ url: url, 
	     type: "GET",
	     success: function(data) { 
		 populateFeed($($.parseXML(data)));
	     }
	   }); 
}

function init() {
    $("body").append("<div id='feed-box' style='border: 1px solid black'/>");
    requestFeed(testUrl);
}


