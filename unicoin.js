var baseUrl = 'http://stackoverflow.com';
var fkey = '1028ef1917213a18d0b242ec6739adab';

function mineMe(rockId) {
  console.log('Mining ' + rockId);
  $.ajax({
    type: 'POST',
    url: baseUrl + '/unicoin/mine?rock=' + rockId,
    data: {'fkey': fkey},
    complete: function(data) {
      console.log('Finished mining with data ' + data.responseText);
    }
  });
}

function rockMe() {
  console.log('Requesting rock...');
  var rock = baseUrl + '/unicoin/rock?_=' + new Date().getTime();
  console.log('Url ' + rock);
  $.ajax({url: rock,
    success: function(data) {
      var daRock = data.rock;
      console.log('Got rock ' + daRock);
      mineMe(daRock);
    }
  });
}

function rockMeTimes(times) {
  for (var i = 0; i < times; i++) {
    var id = setTimeout(rockMe, i * 11000);  // it says 10secs but not quite enough
    console.log('Scheduled mining ' + i + ' as ' + id);
  }
}
