function sleep(millis, callback) {
    setTimeout(function()
            { callback(); }
    , millis);
}

function mineMe(rockId) {
  console.log('Mining ' + rockId);
  $.ajax({type: 'POST', url: 'http://stackoverflow.com/unicoin/mine?rock=' + rockId, data: {'fkey':'1028ef1917213a18d0b242ec6739adab'}, complete: function(data) { console.log('Finished mining with data ' + data.responseText);}})
}

function rockMe(timeMult) {
  console.log('Requesting rock...');
  var rock = 'http://stackoverflow.com/unicoin/rock?_=' + new Date().getTime();
  console.log('Url ' + rock);
  $.ajax({url: rock,
    success: function(data) {
      var daRock = data.rock;
      console.log('Got rock ' + daRock);
      var mineMeLater = function() { mineMe(daRock) };
      var id = setTimeout(mineMeLater, timeMult * 11000);  // it says 10secs but not quite enough
      console.log('Scheduled mining as ' + id);
    }
  });
}

function rockMeTimes(times) {
  for (var i = 0; i < times; i++) {
    rockMe(i);
  }
}
