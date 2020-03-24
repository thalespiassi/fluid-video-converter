const ffmpeg = require('../utils/ffmpeg');

const conversion = (event, videos) => {
  try {
    videos.map(video => {
      const outputDir = video.path.split(video.name)[0];
      const outputName = video.name.split('.')[0];
      const outputPath = `${outputDir}${outputName}.${video.outputFormat}`;

      ffmpeg(video.path)
        .output(outputPath)
        .on('progress', ({ percent }) =>
          event.reply('conversion:progress', {
            id: video.id,
            percent
          })
        )
        .on('end', () =>
          event.reply('conversion:end', { id: video.id, outputDir })
        )
        .run();
    });
  } catch ({ message }) {
    event.reply('error', message);
  }
};

module.exports = conversion;
