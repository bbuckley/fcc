function Account(data) {
  this.stream = data.stream;
  // this.name = data.stream.channel.name;
  // this.logo = logo;
  // this.status = status;
  // this.url = data.stream.channel.url;
  // this.viewers = viewers;
  this.data = data;
  // this.game = data.stream.game;

  this.game = function() {
    if (data.stream === null) {
      return "not streaming";
    }
    return data.stream.game;
  };

}

$(document).ready(function() {
  var a = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck",
    "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"
  ];
  var b = "https://api.twitch.tv/kraken/streams/"
  var ac;
  for (var i = 0; i < a.length; i++) {
    $.getJSON('https://api.twitch.tv/kraken/streams/' + a[i] + '?callback=?', function(data) {
      ac = new Account(data);
      $("#list").append('<li>'
      // + ac.name + ' '
       + ac.game() +

      '</li>');
      if (ac.game() === 'not streaming') {
        $("#list li").last().attr("stream", false);
      } else {
        $("#list li").last().attr("stream", true);
      }
    });
  };

  $("#filter li").click(function() {
    var s = $(this).text();
    $("#list li").show();
    if(s === 'All'){ return; }

    if (s === 'Online') {
      $("#list li[stream='false']").hide();
    } else {
      $("#list li[stream='true']").hide();
    }
  });

});
