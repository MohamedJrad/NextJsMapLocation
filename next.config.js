
const withImages = require('next-images');
module.exports = withImages();
const withVideos = require('next-videos');
module.exports = withVideos();
const withPlugins = require('next-compose-plugins');
module.exports = withPlugins([[withImages]]);
module.exports = {
    reactStrictMode: true,
    env: {
        RESTAURANT_ID: process.env.RESTAURANT_ID
    }
}