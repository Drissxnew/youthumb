const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/download', (req, res) => {
    const videoURL = req.query.url;

    if (!ytdl.validateURL(videoURL)) {
        return res.send('Invalid YouTube URL');
    }

    const videoInfo = ytdl.getInfo(videoURL);
    const title = videoInfo.videoDetails.title;

    res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);

    ytdl(videoURL, { quality: 'highestaudio' })
        .pipe(res);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

