const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)

//exist video name and file
ffmpeg('soul.mp4')
//set video start and end times, 15 means seconds
  .setStartTime('00:00:00')
  .setDuration('15')

//output the video new name
  .output('soul_outVideo2.mp4')
  .on('end', function(err) {
    if(!err) { console.log('conversion complete') }
  })
  .on('error', function(err){
    console.log('Something error on: ', err)
  }).run()

