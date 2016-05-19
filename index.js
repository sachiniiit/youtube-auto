var fs = require('fs');
var search = require('youtube-search');
var ytdl = require('ytdl-core');

var opts = {
  maxResults: 1,
  key: 'AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU'
};

search('iron man trailer', opts, function(err, results) {
  if(err) return console.log(err);
  ytdl(results[0].link).pipe(fs.createWriteStream('video1.flv'));
  console.dir(results[0].link);
});
